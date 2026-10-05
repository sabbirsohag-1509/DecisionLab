import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import useDecisionAnalysis from "../../hooks/useDecisionAnalysis";
import useLocalStorage from "../../hooks/useLocalStorage";

const DRAFT_KEY = "decisionlab-guest-decision";

const Decision = () => {
  const [draft, setDraft] = useLocalStorage(DRAFT_KEY, {
    question: "",
    options: ["", ""],
  });
  const [question, setQuestion] = useState(draft.question);
  const [options, setOptions] = useState(draft.options);
  const [isStarted, setIsStarted] = useState(false);
  const [factors, setFactors] = useState([
    { name: "Impact", weight: 40, scores: [7, 7] },
    { name: "Effort", weight: 30, scores: [5, 8] },
    { name: "Confidence", weight: 30, scores: [8, 6] },
  ]);
  const { analysis, analysisError, analyze, clearAnalysis, isAnalyzing } =
    useDecisionAnalysis();

  const updateOption = (index, value) => {
    setOptions((currentOptions) =>
      currentOptions.map((option, optionIndex) =>
        optionIndex === index ? value : option,
      ),
    );
  };

  const handleStart = (event) => {
    event.preventDefault();

    if (options.filter((option) => option.trim()).length < 2) return;

    setDraft({ question, options });
    setIsStarted(true);
  };

  const updateFactor = (factorIndex, key, value) => {
    setFactors((currentFactors) =>
      currentFactors.map((factor, index) =>
        index === factorIndex ? { ...factor, [key]: value } : factor,
      ),
    );
    clearAnalysis();
  };

  const updateFactorScore = (factorIndex, optionIndex, value) => {
    setFactors((currentFactors) =>
      currentFactors.map((factor, index) =>
        index === factorIndex
          ? {
              ...factor,
              scores: factor.scores.map((score, scoreIndex) =>
                scoreIndex === optionIndex ? Number(value) : score,
              ),
            }
          : factor,
      ),
    );
    clearAnalysis();
  };

  const addFactor = () => {
    setFactors((currentFactors) => [
      ...currentFactors,
      { name: "New factor", weight: 10, scores: options.map(() => 5) },
    ]);
  };

  const removeFactor = (factorIndex) => {
    setFactors((currentFactors) =>
      currentFactors.filter((_, index) => index !== factorIndex),
    );
    clearAnalysis();
  };

  const handleAnalyze = async () => {
    await analyze({
      question,
      options: options.filter(Boolean).map((name) => ({ name })),
      factors,
    });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-base-200/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">New Decision</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            Start with the decision on your mind.
          </h1>
          <p className="mt-4 text-base leading-7 text-base-content/60 sm:text-lg">
            No account is needed to begin. Tell us what you are deciding and we
            will help you organize your options.
          </p>
        </div>

        {!isStarted ? (
          <form
            onSubmit={handleStart}
            className="mx-auto mt-10 max-w-3xl rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8"
          >
            <label
              htmlFor="decision-question"
              className="block text-sm font-semibold text-base-content"
            >
              What are you trying to decide?
            </label>
            <textarea
              id="decision-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Should I learn Next.js or start applying for jobs?"
              rows={4}
              required
              className="mt-3 w-full resize-none rounded-2xl border border-base-300 bg-base-200/40 p-4 text-base-content outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {options.map((option, index) => (
                <div key={index}>
                  <label
                    htmlFor={`decision-option-${index}`}
                    className="block text-sm font-medium text-base-content/75"
                  >
                    Option {String.fromCharCode(65 + index)}
                  </label>
                  <input
                    id={`decision-option-${index}`}
                    value={option}
                    onChange={(event) =>
                      updateOption(index, event.target.value)
                    }
                    placeholder={
                      index === 0 ? "Learn Next.js" : "Apply for jobs"
                    }
                    className="mt-2 w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-8 w-full gap-2 rounded-xl sm:w-auto"
            >
              Continue without login
              <ArrowRight size={18} />
            </button>
            <p className="mt-3 text-xs text-base-content/50">
              Your draft stays in this browser until you sign in and save it.
            </p>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-5xl">
            <article className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-success">
                <CheckCircle2 size={18} />
                Decision draft started
              </div>
              <h2 className="mt-5 text-2xl font-bold text-base-content">
                {question}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {options.filter(Boolean).map((option, index) => (
                  <div
                    key={`${option}-${index}`}
                    className="rounded-2xl border border-base-200 bg-base-200/40 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-base-content/45">
                      Option {String.fromCharCode(65 + index)}
                    </p>
                    <p className="mt-2 font-semibold text-base-content">
                      {option}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-base-content">
                <SlidersHorizontal size={18} className="text-primary" />
                Set the factors that matter
              </div>
              <p className="mt-2 text-sm leading-6 text-base-content/60">
                Adjust importance and score each option from 0 to 10. The
                backend calculates the result; AI can explain it later.
              </p>

              <div className="mt-5 space-y-4">
                {factors.map((factor, factorIndex) => (
                  <div
                    key={`${factor.name}-${factorIndex}`}
                    className="rounded-2xl border border-base-200 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <input
                        value={factor.name}
                        onChange={(event) =>
                          updateFactor(factorIndex, "name", event.target.value)
                        }
                        className="min-w-40 flex-1 rounded-lg border border-base-300 px-3 py-2 text-sm font-semibold outline-none focus:border-primary"
                        aria-label={`Factor ${factorIndex + 1} name`}
                      />
                      <label className="flex items-center gap-2 text-xs text-base-content/60">
                        Weight
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={factor.weight}
                          onChange={(event) =>
                            updateFactor(
                              factorIndex,
                              "weight",
                              Number(event.target.value),
                            )
                          }
                          className="w-20 rounded-lg border border-base-300 px-3 py-2 text-sm text-base-content outline-none focus:border-primary"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => removeFactor(factorIndex)}
                        disabled={factors.length === 1}
                        className="btn btn-ghost btn-sm btn-square text-error"
                        aria-label={`Remove ${factor.name}`}
                        title={`Remove ${factor.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {options.filter(Boolean).map((option, optionIndex) => (
                        <label
                          key={`${factorIndex}-${option}`}
                          className="text-xs text-base-content/60"
                        >
                          {option}: {factor.scores[optionIndex]}/10
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={factor.scores[optionIndex]}
                            onChange={(event) =>
                              updateFactorScore(
                                factorIndex,
                                optionIndex,
                                event.target.value,
                              )
                            }
                            className="range range-primary range-xs mt-2"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={addFactor}
                  className="btn btn-ghost gap-2 rounded-xl"
                >
                  <Plus size={16} /> Add factor
                </button>
                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="btn btn-primary gap-2 rounded-xl"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze decision"}
                  <ArrowRight size={18} />
                </button>
              </div>

              {analysisError && (
                <p className="mt-4 rounded-xl bg-error/10 p-3 text-sm text-error">
                  {analysisError}
                </p>
              )}

              {analysis && (
                <div className="mt-6 rounded-2xl border border-success/20 bg-success/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-success">
                    Current recommendation
                  </p>
                  <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                    <h3 className="text-2xl font-extrabold text-base-content">
                      {analysis.winner}
                    </h3>
                    <span className="text-sm font-semibold text-success">
                      {analysis.winnerScore}/100
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {analysis.results.map((result) => (
                      <div key={result.option}>
                        <div className="flex justify-between text-sm">
                          <span>{result.option}</span>
                          <span className="font-semibold">{result.score}</span>
                        </div>
                        <progress
                          className="progress progress-success mt-1 w-full"
                          value={result.score}
                          max="100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 border-t border-base-200 pt-5 text-sm text-base-content/60">
                Sign in later to save this analysis and revisit it in decision
                history.
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};

export default Decision;
