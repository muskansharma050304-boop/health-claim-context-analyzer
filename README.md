# Health Claim Context Analyzer

A rule based system designed to analyze health related statements and explain them logically instead of simply labeling them as "true" or "false".
## Project Overview
Social media is full of health claims that sound convincing but often lack proper scientific context. Many of these claims are incomplete, exaggerated, or misleading. This project was built to address that problem.
Instead of depending on external AI APIs or black-box models, this system uses structured reasoning rules to break down a statement and evaluate:

- What type of claim it is  
- What scientific principle applies  
- What important context is missing  
- Whether the claim contains exaggeration  
- How reliable the statement is  

The goal is not to give a final judgment, but to help users THINK CRITICALLY about health information.
## Why This Project is Different
Most health claim tools available online:

- Simply classify a statement as True or False  
- Use AI models that do not explain reasoning  
- Do not show missing context  
- Provide generic outputs  

This project takes a different approach:

 Transparent logic instead of black-box answers  
 Step-by-step reasoning  
 Focus on missing context  
 Explanation-based output  
 No dependency on paid APIs  

It mirrors how a real human would analyze a health statement logically.

## How It Works
When a user enters a statement, the system:

1. Detects the type of health claim  
2. Checks for risky medical misinformation  
3. Identifies exaggerating words  
4. Applies predefined scientific reasoning rules  
5. Determines what information is missing  
6. Generates a realistic interpretation  
7. Estimates scientific accuracy  

The output includes:

- Claim Type  
- Scientific Basis  
- Rule Applied  
- Overclaim Words  
- Missing Context  
- Risk Alerts  
- Realistic Interpretation  
- Estimated Accuracy Score  

## Technologies Used
- HTML  
- CSS  
- JavaScript  
- Rule-based logic  
- Client side processing  

No external AI API or backend is required.

## Example Output Format

For an input like:
"Green tea burns fat quickly"
The system generates:

- Claim Type: Weight Loss Claim  
- Scientific Basis: Partially Supported  
- Rule Applied: Calorie deficit principle  
- Overclaim Word: "quickly"  
- Missing Context: dosage, diet, exercise  
- Interpretation explaining realistic limits  
- Estimated Scientific Accuracy: around 60–70%  

## Limitations

- Does not verify claims against live medical databases  
- Works only on text based input  
- Cannot replace professional medical advice  
- Accuracy score is logical estimation, not clinical validation  
- Limited to general health domains  

## Future Scope

Planned improvements for future versions:

- Support for image and video-based claims  
- Database of verified medical sources  
- Multi language support  
- Browser extension version  
- User feedback learning system  
- Mobile friendly interface  
- Integration with credible medical references  
- More advanced claim categories  

## Author
Developed as an independent academic project to demonstrate critical thinking and problem solving in the area of digital health misinformation.

## License
This project is released under the MIT License.
