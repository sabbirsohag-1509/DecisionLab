const app = require("./src/app");
const {
  calculateDecision,
  validateDecision,
} = require("./src/services/decisionEngine");

if (require.main === module) {
  require("./src/server");
}

module.exports = { app, calculateDecision, validateDecision };
