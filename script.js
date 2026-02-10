function analyze() {
  const input = document.getElementById("input").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerText = "Please enter a statement.";
    return;
  }

  let claimType = detectClaimType(input);
  let overclaims = findOverclaimWords(input);
  let riskType = detectRiskyMedicalClaims(input);

  let ruleData = getRuleForClaim(claimType, input);

  let interpretation = buildInterpretation(input, claimType, overclaims, ruleData, riskType);

  let accuracy = calculateAccuracy(overclaims, riskType);

  let output = "";

  output += "Claim Type: " + claimType + "\n\n";
  output += "Scientific Basis: " + getBasis(accuracy) + "\n\n";
  output += "Rule Applied: " + ruleData.principle + "\n\n";

  if (overclaims.length > 0) {
    output += "Overclaim Words: " + overclaims.join(", ") + "\n\n";
  } else {
    output += "Overclaim Words: None detected\n\n";
  }

  output += "Missing Context: " + ruleData.neededContext.join(", ") + "\n\n";

  if (riskType) {
    output += "Risk Alert: " + riskType + "\n\n";
  }

  output += "Realistic Interpretation:\n" + interpretation + "\n\n";
  output += "Estimated Scientific Accuracy: " + accuracy + "%";

  resultDiv.innerText = output;
}

function detectClaimType(text) {
  text = text.toLowerCase();

  if (text.includes("autism") || text.includes("cancer") || text.includes("disease"))
    return "medical misinformation risk";

  if (text.includes("fat") || text.includes("weight") || text.includes("burn"))
    return "weight loss claim";

  if (text.includes("detox") || text.includes("cleanse"))
    return "detox claim";

  if (text.includes("immunity") || text.includes("immune"))
    return "immunity claim";

  if (text.includes("muscle") || text.includes("protein"))
    return "fitness claim";

  return "general health claim";
}

function detectRiskyMedicalClaims(text) {
  text = text.toLowerCase();

  if (text.includes("autism") && text.includes("cause"))
    return "This claim connects autism with an unproven cause.";

  if (text.includes("cure") || text.includes("guarantee"))
    return "This statement makes an unsupported medical cure claim.";

  return null;
}

function findOverclaimWords(text) {
  let risky = ["quickly", "instantly", "guarantee", "always", "never", "miracle", "100%"];

  let found = [];

  risky.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      found.push(word);
    }
  });

  return found;
}

function getRuleForClaim(type, text) {
  if (type === "weight loss claim") {
    return {
      principle: "Weight loss requires calorie deficit and long-term habits",
      neededContext: ["diet", "exercise level", "time period"]
    };
  }

  if (type === "medical misinformation risk") {
    return {
      principle: "Medical claims require peer-reviewed scientific evidence",
      neededContext: ["clinical studies", "expert consensus", "population group"]
    };
  }

  if (type === "detox claim") {
    return {
      principle: "Body detoxification is handled by liver and kidneys",
      neededContext: ["mechanism", "scientific evidence", "quantity"]
    };
  }

  return {
    principle: "Health claims need scientific backing",
    neededContext: ["dosage", "population", "conditions"]
  };
}

function buildInterpretation(text, type, overclaims, ruleData, risk) {

  let base = "";

  if (risk) {
    return "This statement makes a potentially harmful medical claim. " +
      "There is no established scientific evidence supporting this connection. " +
      "Extraordinary medical claims require strong clinical proof.";
  }

  base += "This statement is categorized as a " + type + ". ";

  if (overclaims.length > 0) {
    base += "It contains exaggerating language which may mislead readers. ";
  }

  base += "According to scientific reasoning: " + ruleData.principle + ". ";

  base += "To properly evaluate this claim, information is required about: " +
          ruleData.neededContext.join(", ") + ".";

  return base;
}

function calculateAccuracy(overclaims, risk) {
  let score = 75;

  if (risk) return 20;

  if (overclaims.length > 0) {
    score -= overclaims.length * 20;
  }

  return Math.max(score, 15);
}

function getBasis(score) {
  if (score > 70) return "Well Supported";
  if (score > 40) return "Partially Supported";
  return "Weak or Unsupported";
}