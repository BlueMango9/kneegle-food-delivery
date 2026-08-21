import { Shield, Compass, RefreshCw, Flame, Lock, HeartHandshake } from "lucide-react";

export default function ThemesSection() {
  const themes = [
    {
      icon: Shield,
      title: "Redefining Feminism",
      description:
        "Reclaiming the term 'feminist' from negative stereotypes ('angry', 'anti-man', 'un-African') to mean anyone who acknowledges gender inequality and actively works to fix it.",
      tag: "Core Paradigm",
    },
    {
      icon: Compass,
      title: "Gender Roles & Socialization",
      description:
        "Analyzing how society conditions girls to shrink their ambition and police their behavior to accommodate male egos, while conditioning boys to suppress vulnerability.",
      tag: "Social Conditioning",
    },
    {
      icon: RefreshCw,
      title: "Culture vs. Tradition",
      description:
        "Challenging the defense of sexism as 'culture'. Adichie reminds us that culture is dynamic: 'Culture does not make people. People make culture.'",
      tag: "Cultural Agency",
    },
    {
      icon: Flame,
      title: "Anger & Likeability",
      description:
        "Validating female anger as a legitimate and constructive catalyst for systemic change, resisting the social pressure for women to prioritize being 'likeable'.",
      tag: "Emotional Autonomy",
    },
    {
      icon: Lock,
      title: "Masculinity's Costs",
      description:
        "Demonstrating that patriarchies oppress men too, locking boys in a 'hard, small cage' of financial pressure, emotional suppression, and forced dominance.",
      tag: "Inclusive Critique",
    },
    {
      icon: HeartHandshake,
      title: "Raising Children Differently",
      description:
        "A forward-looking call to action for parents and educators: raise boys and girls based on individual ability and passion rather than gender expectations.",
      tag: "Pedagogical Shift",
    },
  ];

  return (
    <section id="themes" className="py-20 bg-cream-100/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-plum-700 mb-2">Analysis Framework</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
            Core Themes of the Essay
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-plum-800 text-gold-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-100 text-plum-900 border border-plum-900/10">
                      {theme.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-plum-950 mb-3">
                    {theme.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-400 font-medium">
                  <span>Theme 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
