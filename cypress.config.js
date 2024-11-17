const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber())
   
      // implement node event listeners here
    },
    reporter:'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Amazon.in_SearchProduct_Apply Filters (Brand,Price)',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    baseUrl:"https://www.amazon.in/",
    specPattern: 'cypress/e2e/**/*.feature',
    
  },
});
