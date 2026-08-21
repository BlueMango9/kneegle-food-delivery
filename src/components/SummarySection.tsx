import { BookMarked, Eye, Sparkles } from "lucide-react";

export default function SummarySection() {
  const steps = [
    {
      number: "01",
      icon: BookMarked,
      title: "Personal Anecdotes (Grounding)",
      subtitle: "Anchoring systemic problems in lived experience",
      description:
        "Adichie opens with relatable stories from her upbringing in Nigeria—being passed over for class monitor despite having the highest grade because she was female, or watching a valet thank her male friend for a tip she provided. These anecdotes dismantle abstractions and connect immediately with the reader.",
    },
    {
      number: "02",
      icon: Eye,
      title: "Cultural Observation (Analysis)",
      subtitle: "Transitioning from individual stories to systemic critique",
      description:
        "She broadens her scope to demonstrate that these anecdotes are not isolated anomalies, but predictable outcomes of societal socialization. She examines double standards surrounding career ambition, marital compromise, and domestic expectations across different cultures.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Call to Action (Transformation)",
      subtitle: "Proposing a practical path forward",
      description:
        "The essay culminates in an urgent recommendation: we must re-examine how we raise children and treat one another. By unlearning rigid gender roles and rejecting outdated traditional excuses, both men and women can achieve genuine equality.",
    },
  ];

  return (
    <section id="summary" className="py-20 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-plum-700 mb-2">Rhetorical Breakdown</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
            How Adichie Builds Her Argument
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline / Steps */}
        <div className="space-y-8 relative before:absolute before:left-8 sm:before:left-12 before:top-4 before:bottom-4 before:w-0.5 before:bg-plum-900/15">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex items-start gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow"
              >
                {/* Step Badge */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-plum-900 text-gold-400 font-serif font-bold text-lg sm:text-2xl flex items-center justify-center shrink-0 shadow-md border border-gold-500/30 z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-plum-700 uppercase tracking-wider mb-1">
                    <Icon className="w-4 h-4 text-gold-600" />
                    <span>{step.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum-950 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
