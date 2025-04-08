const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 60000,
    video: true,
    screenshotOnRunFailure: true, 
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    setupNodeEvents(on, config) { 
    },
    experimentalSessionAndOrigin: true,
  },
});
