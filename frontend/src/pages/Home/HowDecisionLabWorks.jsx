import {
  ArrowDown,
  ArrowRight,
  Brain,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleAlert,
  CircleCheckBig,
  MessageCircleQuestion,
  Scale,
} from "lucide-react";
import DecisionLabLogo from "../../assets/logo.png";

const HowDecisionLabWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Ask",
      description:
        "Tell DecisionLab what you're deciding. Describe your situation, goals, or the options you're considering.",
      icon: MessageCircleQuestion,
      preview: "question",
    },
    {
      number: "02",
      title: "Understand",
      description:
        "DecisionLab identifies the important context, goals, constraints, and factors that could influence your decision.",
      icon: Brain,
      preview: "factors",
    },
    {
      number: "03",
      title: "Analyze",
      description:
        "AI compares your options, evaluates trade-offs, and identifies pros, cons, risks, and key factors.",
      icon: ChartNoAxesCombined,
      preview: "comparison",
    },
    {
      number: "04",
      title: "Decide",
      description:
        "Get clear, structured insights that help you understand your choices and make a more informed decision.",
      icon: CircleCheckBig,
      preview: "result",
    },
  ];

  const renderPreview = (type) => {
    if (type === "question") {
      return (
        <div className="rounded-xl border border-base-200 bg-base-200/40 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-base-content/40">
            Your question
          </p>

          <p className="mt-2 text-xs leading-5 text-base-content/70">
            Should I learn Next.js or focus on getting a job?
          </p>
        </div>
      );
    }

    if (type === "factors") {
      const factors = ["Goals", "Budget", "Time", "Skills", "Risk"];

      return (
        <div className="rounded-xl border border-base-200 bg-base-200/40 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-base-content/40">
            Important factors
          </p>

          <div className="flex flex-wrap gap-1.5">
            {factors.map((factor) => (
              <span
                key={factor}
                className="rounded-lg border border-primary/10 bg-primary/5 px-2 py-1 text-[10px] font-medium text-primary"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (type === "comparison") {
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-base-200 bg-base-200/40 p-3">
            <p className="text-xs font-semibold text-base-content">
              Option A
            </p>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px] text-success">
                <CheckCircle2 size={12} />
                <span>Pros</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-error">
                <CircleAlert size={12} />
                <span>Cons</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 p-3">
            <p className="text-xs font-semibold text-base-content">
              Option B
            </p>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px] text-success">
                <CheckCircle2 size={12} />
                <span>Pros</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-error">
                <CircleAlert size={12} />
                <span>Cons</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-primary/10 bg-primary/5 p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content">
            <CheckCircle2 size={16} />
          </div>

          <div>
            <p className="text-xs font-semibold text-base-content">
              Decision Summary
            </p>

            <p className="mt-0.5 text-[10px] text-base-content/50">
              Based on your priorities
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 text-[10px] text-base-content/60">
          <p>✓ Best fit for your current goals</p>
          <p>✓ Key factors to consider</p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-base-200/30">
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-secondary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-semibold text-primary sm:text-sm">
            <img src={DecisionLabLogo} alt="DecisionLab Logo" className="w-6 h-6" />
            <span>How DecisionLab Works</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-base-content sm:text-4xl md:text-5xl">
            From Uncertainty to a{" "}
            <span className="text-primary">Clear Decision</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/60 sm:text-base sm:leading-8">
            DecisionLab turns complex questions into structured insights so
            you can understand your options and move forward with confidence.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="mt-12 lg:mt-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col"
                >
                  {/* Desktop Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-[calc(100%+2px)] top-14 z-10 hidden lg:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight
                        size={20}
                        className="text-primary/30"
                        strokeWidth={1.8}
                      />
                    </div>
                  )}

                  {/* Card */}
                  <article className="group flex h-full flex-col rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-900/5 sm:p-6">
                    {/* Step Header */}
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content">
                        <Icon
                          size={22}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Number */}
                      <span className="text-sm font-bold tracking-wider text-base-content/20">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-xl font-bold text-base-content">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 min-h-20 text-sm leading-6 text-base-content/60">
                      {step.description}
                    </p>

                    {/* Product Preview */}
                    <div className="mt-5">{renderPreview(step.preview)}</div>
                  </article>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className="flex justify-center py-3 md:hidden"
                      aria-hidden="true"
                    >
                      <ArrowDown
                        size={20}
                        className="text-primary/30"
                        strokeWidth={1.8}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= FLOW MESSAGE ================= */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <div className="flex items-center gap-2 rounded-full border border-base-200 bg-base-100 px-4 py-2.5 shadow-sm">
            <MessageCircleQuestion
              size={16}
              className="text-primary"
              aria-hidden="true"
            />

            <span className="text-xs font-medium text-base-content/60 sm:text-sm">
              You bring the question
            </span>
          </div>

          <ArrowRight
            size={16}
            className="hidden text-base-content/25 sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2.5">
            <Scale
              size={16}
              className="text-primary"
              aria-hidden="true"
            />

            <span className="text-xs font-medium text-primary sm:text-sm">
              DecisionLab brings clarity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDecisionLabWorks;