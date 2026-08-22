
import { Link } from 'react-router';
import { 
  ArrowRight, 
  CircleHelp, 
  Cpu, 
  BarChart3, 
  Lightbulb, 
  ThumbsUp, 
  ThumbsDown, 
  AlertTriangle, 
  Layers 
} from 'lucide-react';
import DecisionLabLogo from "../../assets/logo.png";

// Data array for the subtle trust/value indicators
const TRUST_FEATURES = [
  {
    icon: Cpu,
    label: 'AI-Powered',
  },
  {
    icon: BarChart3,
    label: 'Structured Analysis',
  },
  {
    icon: Lightbulb,
    label: 'Clear Insights',
  },
];

// Data array for the interactive decision preview features
const ANALYSIS_FEATURES = [
  {
    icon: ThumbsUp,
    label: 'Pros',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400',
  },
  {
    icon: ThumbsDown,
    label: 'Cons',
    color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-400',
  },
  {
    icon: AlertTriangle,
    label: 'Risks',
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400',
  },
  {
    icon: Layers,
    label: 'Key Factors',
    color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-400',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] py-12 md:py-20 lg:py-28">
      {/* Subtle Background Accent Blurs */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl -z-10 bg-gradient-to-tr from-[#4F46E5]/10 via-[#06B6D4]/10 to-transparent" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN (55% on Desktop - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 shadow-xs transition-colors hover:bg-[#4F46E5]/15">
              <img src={DecisionLabLogo} alt="DecisionLab Logo" className="w-4 h-4" />
              <span>AI-Powered Decision Intelligence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
              Make Better Decisions.{' '}
              <span className="block text-[#4F46E5] mt-1 sm:mt-2">
                With Confidence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Turn complex choices into clear, structured decisions with AI-powered analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Link
                to="/decision"
                className="btn border-none bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-base px-7 h-12 min-h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
                aria-label="Start a decision analysis"
              >
                <span>Start a Decision</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                to="/how-it-works"
                className="btn btn-outline border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:bg-slate-50 font-medium text-base px-6 h-12 min-h-12 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                aria-label="Learn how DecisionLab works"
              >
                <CircleHelp className="w-4 h-4 text-slate-500" aria-hidden="true" />
                <span>How It Works</span>
              </Link>
            </div>

            {/* Trust / Value Row */}
            <div className="pt-4 border-t border-slate-200/80 w-full">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-600">
                {TRUST_FEATURES.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#06B6D4]" aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (45% on Desktop - 5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decision Analysis Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-5 sm:p-7 space-y-5 transition-all hover:shadow-2xl hover:shadow-slate-200/80">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]">
                      <img className='w-5 h-5' src={DecisionLabLogo} alt="DecisionLab Logo" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                      Decision Assistant
                    </h2>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-700">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Ready to analyze</span>
                  </div>
                </div>

                {/* Card Input Body */}
                <div className="space-y-3">
                  <label 
                    htmlFor="hero-decision-input" 
                    className="block text-xs sm:text-sm font-medium text-slate-600"
                  >
                    Tell us what you're deciding:
                  </label>
                  
                  <div className="relative">
                    <textarea
                      id="hero-decision-input"
                      readOnly
                      rows={3}
                      value="Should I learn Next.js or focus on getting a job?"
                      aria-label="Example decision input"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 text-sm sm:text-base font-medium text-slate-800 focus:outline-none cursor-default shadow-inner"
                    />
                  </div>

                  {/* Analyze Button (Visual preview action) */}
                  <button
                    type="button"
                    className="w-full btn border-none bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm sm:text-base rounded-xl h-11 min-h-11 shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Analyze Decision</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Analysis Preview Section */}
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Structured Analysis Included
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2.5">
                    {ANALYSIS_FEATURES.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        >
                          <div className={`p-1.5 rounded-lg ${item.color}`}>
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;