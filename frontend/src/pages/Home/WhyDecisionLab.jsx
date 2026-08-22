import {
  BadgeCheck,
  CircleAlert,
  CircleCheckBig,
  GitCompare,
  Lightbulb,
  Search,
  ShieldAlert,
} from "lucide-react";
import DecisionLabLogo from "../../assets/logo.png";

const WhyDecisionLab = () => {
  const benefits = [
    {
      number: "01",
      title: "See the Bigger Picture",
      description:
        "Break down complicated situations and identify the factors that actually matter to your decision.",
      icon: Search,
      preview: "factors",
    },
    {
      number: "02",
      title: "Compare Your Options",
      description:
        "Understand the strengths, weaknesses, and trade-offs of different choices instead of looking at only one option.",
      icon: GitCompare,
      preview: "comparison",
    },
    {
      number: "03",
      title: "Understand the Risks",
      description:
        "Identify potential risks, uncertainties, and important factors that could affect the outcome.",
      icon: ShieldAlert,
      preview: "risks",
    },
    {
      number: "04",
      title: "Decide With Confidence",
      description:
        "Get a clear summary of the most important insights so you can make a more informed decision.",
      icon: BadgeCheck,
      preview: "summary",
    },
  ];

  const renderPreview = (type) => {
    if (type === "factors") {
      const factors = [
        "Goals",
        "Constraints",
        "Priorities",
        "Context",
      ];

      return (
        <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-base-content/40">
              Decision factors
            </span>

            <Search
              size={14}
              className="text-primary"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {factors.map((factor) => (
              <span
                key={factor}
                className="rounded-lg border border-primary/10 bg-primary/5 px-2.5 py-1.5 text-[10px] font-medium text-primary"
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
          <div className="rounded-2xl border border-base-200 bg-base-200/40 p-3">
            <p className="text-xs font-bold text-base-content">
              Option A
            </p>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-success">
                <CircleCheckBig size={13} aria-hidden="true" />
                <span>Pros</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-error">
                <CircleAlert size={13} aria-hidden="true" />
                <span>Cons</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-3">
            <p className="text-xs font-bold text-base-content">
              Option B
            </p>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-success">
                <CircleCheckBig size={13} aria-hidden="true" />
                <span>Pros</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-error">
                <CircleAlert size={13} aria-hidden="true" />
                <span>Cons</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "risks") {
      return (
        <div className="space-y-2 rounded-2xl border border-base-200 bg-base-200/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-base-content/70">
              Low Risk
            </span>

            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-base-300">
              <div className="h-full w-1/4 rounded-full bg-success" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-base-content/70">
              Medium Risk
            </span>

            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-base-300">
              <div className="h-full w-1/2 rounded-full bg-warning" />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 rounded-xl bg-warning/5 px-3 py-2">
            <ShieldAlert
              size={14}
              className="text-warning"
              aria-hidden="true"
            />

            <span className="text-[10px] font-medium text-base-content/60">
              Important factor identified
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content">
            <CircleCheckBig
              size={17}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-xs font-bold text-base-content">
              Decision Summary
            </p>

            <p className="mt-0.5 text-[10px] text-base-content/50">
              Based on your priorities
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-1.5">
          <p className="text-[10px] text-base-content/60">
            ✓ Best fit for your current goals
          </p>

          <p className="text-[10px] text-base-content/60">
            ✓ 3 key factors to consider
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-base-100">
      {/* Subtle Background Decorations */}
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

            <span>Why DecisionLab?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-base-content sm:text-4xl md:text-5xl">
            Think Clearly.{" "}
            <span className="text-primary">
              Decide Smarter.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/60 sm:text-base sm:leading-8">
            Complex decisions rarely have a simple answer. DecisionLab
            helps you understand your options, trade-offs, risks, and
            priorities before you decide.
          </p>
        </div>

        {/* ================= BENEFIT CARDS ================= */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:mt-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className="group rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-900/5 sm:p-6 lg:p-7"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-sm font-bold tracking-wider text-base-content/20">
                    {benefit.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-base-content sm:text-2xl">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base sm:leading-7">
                  {benefit.description}
                </p>

                {/* Preview */}
                <div className="mt-6">
                  {renderPreview(benefit.preview)}
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2.5">
            <Lightbulb
              size={16}
              className="text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <span className="text-xs font-semibold text-primary sm:text-sm">
              Less guesswork. More clarity.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDecisionLab;