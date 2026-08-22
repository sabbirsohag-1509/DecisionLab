import { Link, Outlet } from "react-router";
import {
  Scale,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import Logo from "../pages/shared/Logo/Logo";

const AuthLayout = () => {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <section className="relative hidden overflow-hidden bg-base-100 lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

          {/* Logo */}
          <div className="relative z-10">
            <Link
              to="/"
              aria-label="Go to DecisionLab home"
              className="inline-flex rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Logo />
            </Link>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
             

              AI-Powered Decision Intelligence
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-base-content xl:text-5xl">
              Make better decisions
              <span className="block text-primary">
                with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-base-content/65 xl:text-lg">
              Analyze your options, understand trade-offs, identify risks,
              and move forward with clearer, more structured insights.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles size={19} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-semibold text-base-content">
                    Structured Analysis
                  </p>
                  <p className="text-sm text-base-content/55">
                    Turn complex decisions into clear insights.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Scale size={19} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-semibold text-base-content">
                    Compare Your Options
                  </p>
                  <p className="text-sm text-base-content/55">
                    Understand trade-offs before you decide.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck size={19} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-semibold text-base-content">
                    Understand the Risks
                  </p>
                  <p className="text-sm text-base-content/55">
                    Identify important factors and uncertainties.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <p className="text-sm text-base-content/40">
              © {new Date().getFullYear()} DecisionLab. Make informed
              decisions.
            </p>
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className="flex min-h-screen flex-col bg-base-200 px-5 py-6 sm:px-8 lg:justify-center lg:px-12 xl:px-16">

          {/* Mobile Header */}
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Link
              to="/"
              aria-label="Go to DecisionLab home"
              className="inline-flex rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Logo />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-base-content/60 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Home
            </Link>
          </div>

          {/* Auth Content */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">

              <Outlet />

            </div>

            {/* Mobile bottom text */}
            <p className="mt-6 text-center text-xs text-base-content/40 lg:hidden">
              Your decisions. Your priorities. Clearer insights.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default AuthLayout;