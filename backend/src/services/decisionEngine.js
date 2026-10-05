const clamp = (value, minimum, maximum) =>
  Math.min(Math.max(Number(value) || 0, minimum), maximum);

const validateDecision = (decision) => {
  if (!decision || typeof decision !== "object") {
    return "A decision payload is required.";
  }

  if (!Array.isArray(decision.options) || decision.options.length < 2) {
    return "At least two options are required.";
  }

  if (!decision.options.every((option) => option?.name?.trim())) {
    return "Every option must have a name.";
  }

  if (!Array.isArray(decision.factors) || decision.factors.length === 0) {
    return "At least one factor is required.";
  }

  if (
    !decision.factors.every(
      (factor) =>
        factor?.name?.trim() &&
        Number.isFinite(Number(factor.weight)) &&
        Array.isArray(factor.scores) &&
        factor.scores.length === decision.options.length,
    )
  ) {
    return "Every factor needs a name, weight, and one score per option.";
  }

  return null;
};

const calculateDecision = ({ options, factors }) => {
  const totalWeight = factors.reduce(
    (total, factor) => total + clamp(factor.weight, 0, 100),
    0,
  );

  if (totalWeight === 0) {
    throw new Error(
      "At least one factor must have a weight greater than zero.",
    );
  }

  const results = options.map((option, optionIndex) => {
    const contributions = factors.map((factor) => {
      const weight = clamp(factor.weight, 0, 100);
      const score = clamp(factor.scores[optionIndex], 0, 10);

      return {
        factor: factor.name.trim(),
        score,
        weight,
        contribution: Number(
          ((score / 10) * (weight / totalWeight) * 100).toFixed(2),
        ),
      };
    });

    return {
      option: option.name.trim(),
      score: Number(
        contributions
          .reduce((total, contribution) => total + contribution.contribution, 0)
          .toFixed(2),
      ),
      contributions,
    };
  });

  results.sort((first, second) => second.score - first.score);

  return {
    winner: results[0].option,
    winnerScore: results[0].score,
    results,
    totalWeight,
  };
};

module.exports = { calculateDecision, validateDecision };
