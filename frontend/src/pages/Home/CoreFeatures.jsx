
import { 
  Sparkles, 
  Brain, 
  Scale, 
  Columns3, 
  TriangleAlert, 
  ListFilter, 
  FileCheck, 
  Check, 
  X, 
} from 'lucide-react';
import DecisionLabLogo from "../../assets/logo.png";

// Data array containing all 6 core features & custom mini-UI previews
const FEATURES = [
  {
    number: "01",
    title: "Pros & Cons Analysis",
    description: "See the advantages and disadvantages of each option in a clear and structured format.",
    icon: Scale,
    isHighlighted: false,
    renderPreview: () => (
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2 text-xs">
        <div className="font-semibold text-slate-800 text-[11px] pb-1 border-b border-slate-200/50 flex justify-between items-center">
          <span>Option A Evaluation</span>
          <span className="text-[10px] text-slate-500 font-mono">Structured</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium text-[11px]">
            <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>High flexibility & scale</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium text-[11px]">
            <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Affordable startup cost</span>
          </div>
          <div className="flex items-center gap-1.5 text-rose-500 font-medium text-[11px]">
            <X className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Requires longer setup time</span>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "02",
    title: "Option Comparison",
    description: "Compare multiple choices side by side and understand the key differences and trade-offs.",
    icon: Columns3,
    isHighlighted: false,
    renderPreview: () => (
      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] space-y-1.5">
        <div className="grid grid-cols-3 font-semibold text-slate-500 text-[10px] pb-1 border-b border-slate-200/60">
          <span>Factor</span>
          <span className="text-center text-[#4F46E5]">Option A</span>
          <span className="text-center text-slate-700">Option B</span>
        </div>
        <div className="grid grid-cols-3 text-slate-700 items-center">
          <span className="font-medium text-slate-500">Cost</span>
          <span className="text-center font-semibold text-emerald-600">Low</span>
          <span className="text-center font-semibold text-slate-600">Medium</span>
        </div>
        <div className="grid grid-cols-3 text-slate-700 items-center">
          <span className="font-medium text-slate-500">Flexibility</span>
          <span className="text-center font-semibold text-[#4F46E5]">High</span>
          <span className="text-center font-semibold text-slate-600">Moderate</span>
        </div>
      </div>
    )
  },
  {
    number: "03",
    title: "Risk Analysis",
    description: "Identify potential risks, uncertainties, and factors that could affect the outcome of your decision.",
    icon: TriangleAlert,
    isHighlighted: false,
    renderPreview: () => (
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50/80 border border-amber-200/60 text-amber-900 font-medium text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            <span>Market Volatility</span>
          </div>
          <span className="text-[10px] font-semibold bg-amber-200/60 px-1.5 py-0.5 rounded text-amber-800">Medium Risk</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/80 border border-emerald-200/60 text-emerald-900 font-medium text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>Execution Timeline</span>
          </div>
          <span className="text-[10px] font-semibold bg-emerald-200/60 px-1.5 py-0.5 rounded text-emerald-800">Low Risk</span>
        </div>
      </div>
    )
  },
  {
    number: "04",
    title: "Key Factors",
    description: "Identify the goals, priorities, constraints, and factors that matter most to your specific situation.",
    icon: ListFilter,
    isHighlighted: false,
    renderPreview: () => (
      <div className="space-y-1.5">
        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Identified Drivers</div>
        <div className="flex flex-wrap gap-1.5 text-xs">
          <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium text-[11px]">
            🎯 Goals
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium text-[11px]">
            💰 Budget
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium text-[11px]">
            ⏱️ Timeline
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium text-[11px]">
            ⚡ Skills
          </span>
        </div>
      </div>
    )
  },
  {
    number: "05",
    title: "AI-Powered Insights",
    description: "Turn your decision context into structured insights that help you understand the situation more clearly.",
    icon: Brain,
    isHighlighted: true, // Special highlight logic applied
    renderPreview: () => (
      <div className="p-3 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/20 space-y-1.5 text-xs">
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#4F46E5]">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" aria-hidden="true" /> AI Synthesized Insight
          </span>
          <span className="text-[9px] bg-[#4F46E5] text-white px-1.5 py-0.5 rounded-full font-medium">Core</span>
        </div>
        <p className="text-slate-700 text-[11px] leading-snug font-medium italic">
          "Option B aligns best with your long-term career priorities despite a slightly higher learning curve."
        </p>
      </div>
    )
  },
  {
    number: "06",
    title: "Decision Summary",
    description: "Get a concise summary of the most important findings, trade-offs, and factors before making your decision.",
    icon: FileCheck,
    isHighlighted: false,
    renderPreview: () => (
      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs">
        <div className="flex items-center justify-between pb-1 border-b border-slate-200/60 font-bold text-slate-800 text-[11px]">
          <span>Decision Blueprint</span>
          <span className="text-[#4F46E5] font-semibold text-[10px]">Ready</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-600 font-medium">
          <div className="bg-white p-1 rounded border border-slate-100">✔ 2 Options Evaluated</div>
          <div className="bg-white p-1 rounded border border-slate-100">✔ 4 Key Factors</div>
          <div className="bg-white p-1 rounded border border-slate-100">✔ 2 Risks Identified</div>
          <div className="bg-white p-1 rounded border border-slate-100 text-[#4F46E5] font-semibold">✔ Best Fit Match</div>
        </div>
      </div>
    )
  }
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] py-16 md:py-24">
      {/* Subtle Background Accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-full max-w-3xl h-72 pointer-events-none opacity-25 blur-3xl -z-10 bg-gradient-to-br from-[#4F46E5]/10 via-[#06B6D4]/10 to-transparent" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 shadow-xs">
            <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F46E5]" aria-hidden="true" />
            <span>Decision Intelligence</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Everything You Need to Make a{' '}
            <span className="text-[#4F46E5]">
              Better Decision
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            DecisionLab breaks down complex choices into clear, structured insights so you can understand what matters before you decide.
          </p>
        </div>

        {/* FEATURES GRID (3-Col Desktop / 2-Col Tablet / 1-Col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <article
                key={feature.number}
                className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border shadow-xs hover:shadow-lg hover:-translate-y-1 ${
                  feature.isHighlighted
                    ? 'bg-gradient-to-b from-white to-[#4F46E5]/5 border-[#4F46E5]/40 shadow-md shadow-[#4F46E5]/5'
                    : 'bg-white border-slate-200/90 hover:border-[#4F46E5]/30'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-2xl transition-colors duration-300 ${
                      feature.isHighlighted
                        ? 'bg-[#4F46E5] text-white'
                        : 'bg-[#4F46E5]/10 text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    </div>
                    
                    <span className="text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-[#4F46E5]/40 transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                    {feature.title}
                    {feature.isHighlighted && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#4F46E5]/10 text-[#4F46E5] px-2 py-0.5 rounded-full">
                        Core AI
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Miniature Product Preview UI */}
                <div className="pt-4 border-t border-slate-100">
                  {feature.renderPreview()}
                </div>
              </article>
            );
          })}
        </div>

        {/* SUBTLE BOTTOM MESSAGE */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-2xs text-xs sm:text-sm font-medium text-slate-700">
             <img src={DecisionLabLogo} alt="DecisionLab Logo" className="w-5 h-5" /> 
            <span>One decision. Multiple perspectives. Clearer insights.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;