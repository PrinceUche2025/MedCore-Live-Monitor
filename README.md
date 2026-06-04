# MedCore — Live Patient Vitals Monitor

## About the Project
For my third project with DecodeLabs, I took the creative initiative to build a medical-grade dashboard interface: **MedCore**. 

Moving beyond static designs, this project focuses entirely on client-side user experience. It uses pure, vanilla JavaScript to simulate a real-time clinical monitoring panel where actions (such as administering a stimulant or sedative) dynamically recalculate and display a patient's live heart rate (BPM) while supporting an alternate "Night Shift" visual mode.


## Architectural Patterns & Standards

To ensure production-grade code quality, this system is engineered around the strict guidelines specified in the training manual:

1. **The IPO Loop Architecture:** All interactive scripts are cleanly divided into:
   - **Input:** Event listeners watching for specific interface clicks (`addEventListener`).
   - **Process:** Isolated functions processing logic rules, boundary limits (capping the heart rate safely between 40 and 200 BPM), and updating state variables (`let` and `const`).
   - **Output:** Safe, real-time modifications rendering directly to the user interface.

2. **Secure DOM Mutation:** To protect the application from Cross-Site Scripting (XSS) vulnerabilities, all visual telemetry modifications are injected exclusively using `element.textContent`. The fragile `innerHTML` property is completely avoided.

3. **Decoupled Class Hooks:** - Interactive nodes targeted by JavaScript use a distinct structural functional prefix (**`js-`**, e.g., `.js-counter-value`), which is never used for cosmetic layout styling.
   - Dynamic interface state adjustments utilize standard visual state prefixes (**`is-`**, e.g., `.is-dark-mode`) handled beautifully within CSS.
  
   - The code is live at : 
