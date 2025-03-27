import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    frontEndUrl: ' http://localhost:5173/#',
    backEndUrl: 'http://localhost:3000',
  },
});
