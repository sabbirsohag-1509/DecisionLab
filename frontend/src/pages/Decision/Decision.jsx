import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, LockKeyhole, Save } from "lucide-react";

const DRAFT_KEY = "decisionlab-guest-decision";

const Decision = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [isStarted, setIsStarted] = useState(false);
  const [saveMessage, setSaveMessage] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem(DRAFT_KEY);

    if (!savedDraft) return;

    const draft = JSON.parse(savedDraft);
    setQuestion(draft.question || "");
    setOptions(draft.options?.length ? draft.options : ["", ""]);
  }, []);

  const updateOption = (index, value) => {
    setOptions((currentOptions) =>
      currentOptions.map((option, optionIndex) =>
        optionIndex === index ? value : option,
      ),
    );
  };

  const handleStart = (event) => {
    event.preventDefault();

    localStorage.setItem(DRAFT_KEY, JSON.stringify({ question, options }));
    setIsStarted(true);
  };

  const handleSave = () => {
    setSaveMessage(true);
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
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 lg:grid-cols-[1fr_280px]">
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
              <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-6 text-base-content/70">
                AI questions and option scoring will be added in the next step.
                This guest draft is ready to continue.
              </div>
            </article>

            <aside className="h-fit rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-base-content">
                <LockKeyhole size={18} className="text-primary" />
                <h2 className="font-bold">Save your decision</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Sign in to keep this decision, view it later, and see it in your
                decision history.
              </p>
              <Link
                to="/auth/login"
                className="btn btn-primary mt-5 w-full gap-2 rounded-xl"
              >
                Sign in to save
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={handleSave}
                className="btn btn-ghost mt-2 w-full gap-2 rounded-xl text-sm"
              >
                <Save size={16} />
                Save for later
              </button>
              {saveMessage && (
                <p className="mt-3 text-center text-xs text-primary">
                  Please sign in first to save this decision.
                </p>
              )}
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Decision;
