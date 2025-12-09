**Project Structure** 
1. angular-app/ → The Angular frontend application.
2. playwright-tests/ → Playwright test suite.
   2.1. env/ → Environment files (.env.production, .env.staging).
   2.2. config.ts → stores all your environment-specific settings
   2.3. utils/env.ts → Helper to safely read environment variables.
   2.4. pages/ → Page Object Model (POM) files (navigation, forms, etc.).
   2.5. tests/ → Test files (*.spec.ts).
   2.6. package.json → Project dependencies and scripts.
   2.7. playwright.config.ts → tells Playwright how to run your tests.

**Setup**

**_Angular Application_**
Install dependencies and start the Angular app locally. 

**_Playwright tests _**
Install dependencies and make sure Playwright browsers are installed.
