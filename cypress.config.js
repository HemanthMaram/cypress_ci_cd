const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    baseUrl:"https://www.amazon.in/",
    specPattern: 'cypress/e2e/**/*.feature'
  },
});
