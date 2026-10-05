import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const useDecisionAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  const analyze = async (decision) => {
    setIsAnalyzing(true);
    setAnalysisError("");

    try {
      const response = await fetch(`${API_URL}/api/decisions/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(decision),
      });
      const payload = await response.json();

      if (!response.ok) throw new Error(payload.error || "Analysis failed.");
      setAnalysis(payload);
      return payload;
    } catch (error) {
      setAnalysisError(
        `${error.message} Start the DecisionLab API on port 5000 and try again.`,
      );
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysis(null);
    setAnalysisError("");
  };

  return { analysis, analysisError, analyze, clearAnalysis, isAnalyzing };
};

export default useDecisionAnalysis;
