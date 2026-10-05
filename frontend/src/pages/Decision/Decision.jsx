import { useState } from "react";
import {
  Bot,
  Check,
  ChevronRight,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import useDecisionAnalysis from "../../hooks/useDecisionAnalysis";
import useLocalStorage from "../../hooks/useLocalStorage";

const DRAFT_KEY = "decisionlab-guest-decision";

const initialMessage = {
  id: 1,
  role: "assistant",
  text: "I can help you think this through. What decision is on your mind? There is no need to phrase it perfectly.",
};

const createFactors = (names, optionCount) =>
  names.map((name) => ({
    name: name.trim(),
    weight: Math.round(100 / names.length),
    scores: Array.from({ length: optionCount }, () => 5),
  }));

const Decision = () => {
  const [draft, setDraft] = useLocalStorage(DRAFT_KEY, {
    question: "",
    options: [],
  });
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("question");
  const [question, setQuestion] = useState(draft.question || "");
  const [options, setOptions] = useState(draft.options || []);
  const [factors, setFactors] = useState([]);
  const { analysis, analysisError, analyze, clearAnalysis, isAnalyzing } =
    useDecisionAnalysis();

  const addMessage = (role, text) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now() + Math.random(), role, text },
    ]);
  };

  const askForOptions = () => {
    addMessage(
      "assistant",
      "Good. What are the realistic options you are considering? List them separated by commas, and I will help compare them.",
    );
    setStep("options");
  };

  const askForFactors = (optionNames) => {
    addMessage(
      "assistant",
      `I see ${optionNames.length} options: ${optionNames.join(", ")}. What matters most here? For example: cost, growth, time, risk. List the factors separated by commas.`,
    );
    setStep("factors");
  };

  const finishSetup = (factorNames) => {
    const nextFactors = createFactors(factorNames, options.length);
    setFactors(nextFactors);
    setDraft({ question, options });
    addMessage(
      "assistant",
      "That gives us a useful starting point. I have created a structured model with equal importance for now. You can run the analysis below, then change any factor in the What-If panel.",
    );
    setStep("ready");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = input.trim();
    if (!answer || step === "ready") return;

    addMessage("user", answer);
    setInput("");

    if (step === "question") {
      setQuestion(answer);
      askForOptions();
      return;
    }

    if (step === "options") {
      const optionNames = answer
        .split(",")
        .map((option) => option.trim())
        .filter(Boolean);

      if (optionNames.length < 2) {
        addMessage(
          "assistant",
          "Please give me at least two options, separated by commas.",
        );
        return;
      }

      setOptions(optionNames);
      askForFactors(optionNames);
      return;
    }

    const factorNames = answer
      .split(",")
      .map((factor) => factor.trim())
      .filter(Boolean);

    if (!factorNames.length) {
      addMessage("assistant", "Please give me at least one factor to compare.");
      return;
    }

    finishSetup(factorNames);
  };

  const handleAnalyze = async () => {
    await analyze({
      question,
      options: options.map((name) => ({ name })),
      factors,
    });
  };

  const updateWeight = (factorIndex, value) => {
    setFactors((currentFactors) =>
      currentFactors.map((factor, index) =>
        index === factorIndex ? { ...factor, weight: Number(value) } : factor,
      ),
    );
    clearAnalysis();
  };

  const updateScore = (factorIndex, optionIndex, value) => {
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

  const resetConversation = () => {
    setMessages([initialMessage]);
    setInput("");
    setStep("question");
    setQuestion("");
    setOptions([]);
    setFactors([]);
    clearAnalysis();
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-base-200/30 px-3 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 flex items-center justify-between px-1">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkles size={16} /> DecisionLab AI
            </div>
            <p className="mt-1 text-sm text-base-content/55">
              A thinking partner for better decisions
            </p>
          </div>
          <button
            type="button"
            onClick={resetConversation}
            className="btn btn-ghost btn-sm gap-2 rounded-xl text-base-content/60"
          >
            <RotateCcw size={15} /> New chat
          </button>
        </header>

        <main className="overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
          <div className="min-h-[420px] space-y-7 p-4 sm:p-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-content">
                    <Bot size={17} />
                  </div>
                )}
                <div
                  className={`max-w-[min(90%,38rem)] whitespace-pre-line text-[15px] leading-7 ${message.role === "user" ? "rounded-2xl rounded-br-md bg-base-content px-4 py-3 text-base-100" : "pt-1 text-base-content"}`}
                >
                  {message.text}
                </div>
                {message.role === "user" && (
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-base-300 bg-base-200 text-base-content/70">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {step === "ready" && (
              <div className="ml-11 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Structured decision model
                    </p>
                    <h2 className="mt-1 font-bold text-base-content">
                      {question}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="btn btn-primary btn-sm gap-2 rounded-xl"
                  >
                    {isAnalyzing ? "Thinking..." : "Run analysis"}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {analysisError && (
              <p className="ml-11 rounded-xl bg-error/10 p-3 text-sm text-error">
                {analysisError}
              </p>
            )}

            {analysis && (
              <div className="ml-11 rounded-2xl border border-success/20 bg-success/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-success">
                  <Check size={15} /> Current recommendation
                </div>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h2 className="text-2xl font-extrabold text-base-content">
                    {analysis.winner}
                  </h2>
                  <span className="font-semibold text-success">
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
          </div>

          {step === "ready" && (
            <section className="border-t border-base-200 bg-base-200/25 p-4 sm:p-8">
              <div className="mb-4">
                <p className="text-sm font-bold text-base-content">
                  What-If simulator
                </p>
                <p className="mt-1 text-xs text-base-content/55">
                  Change importance or scores and run the analysis again.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {factors.map((factor, factorIndex) => (
                  <div
                    key={`${factor.name}-${factorIndex}`}
                    className="rounded-2xl border border-base-200 bg-base-100 p-4"
                  >
                    <div className="flex items-center justify-between gap-3 text-sm font-semibold">
                      <span>{factor.name}</span>
                      <label className="flex items-center gap-2 text-xs font-normal text-base-content/60">
                        Importance
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={factor.weight}
                          onChange={(event) =>
                            updateWeight(factorIndex, event.target.value)
                          }
                          className="w-16 rounded-lg border border-base-300 px-2 py-1 text-center text-base-content"
                        />
                      </label>
                    </div>
                    <div className="mt-3 space-y-2">
                      {options.map((option, optionIndex) => (
                        <label
                          key={option}
                          className="block text-xs text-base-content/60"
                        >
                          {option}: {factor.scores[optionIndex]}/10
                          <input
                            type="range"
                            min="0"
                            max="10"
                            value={factor.scores[optionIndex]}
                            onChange={(event) =>
                              updateScore(
                                factorIndex,
                                optionIndex,
                                event.target.value,
                              )
                            }
                            className="range range-primary range-xs mt-1"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-base-200 p-3 sm:p-4"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-base-300 bg-base-100 p-2 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form.requestSubmit();
                  }
                }}
                disabled={step === "ready"}
                rows={1}
                placeholder={
                  step === "ready"
                    ? "Your decision model is ready above"
                    : "Message DecisionLab..."
                }
                className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || step === "ready"}
                className="btn btn-primary btn-square rounded-xl"
                aria-label="Send message"
                title="Send message"
              >
                <Send size={17} />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-base-content/40">
              DecisionLab organizes your thinking. You remain the decision
              maker.
            </p>
          </form>
        </main>
      </div>
    </section>
  );
};

export default Decision;
