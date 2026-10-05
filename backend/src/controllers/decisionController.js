const {
  calculateDecision,
  validateDecision,
} = require("../services/decisionEngine");

const analyzeDecision = (request, response) => {
  const validationError = validateDecision(request.body);

  if (validationError) {
    return response.status(400).json({ error: validationError });
  }

  try {
    return response.json(calculateDecision(request.body));
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

module.exports = { analyzeDecision };
