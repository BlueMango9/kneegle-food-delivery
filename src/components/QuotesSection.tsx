import { Quote } from "lucide-react";

export default function QuotesSection() {
  const quotes = [
    {
      text: "We teach girls to shrink themselves, to make themselves smaller. We say to girls, you can have ambition, but not too much.",
      context: "Discussing early gender socialization and how young girls are conditioned to curb leadership traits.",
      highlight: "Ambition & Socialization",
    },
    {
      text: "Masculinity is a hard, small cage, and we put boys inside this cage.",
      context: "Critiquing patriarchal expectations that deny boys emotional expressiveness and force financial dominance.",
      highlight: "Costs of Masculinity",
    },
    {
      text: "Culture does not make people. People make culture. If it is true that the full humanity of women is not our culture, then we can and must make it our culture.",
      context: "Refuting traditionalist defenses of sexism as static 'cultural heritage'.",
      highlight: "Cultural Evolution",
    },
    {
      text: "I am angry. Gender as it functions today is a grave injustice. We should all be angry. Anger has a long history of bringing about positive change.",
      context: "Reclaiming anger from a gendered stigma into a valid civic emotion driving reform.",
      highlight: "Constructive Anger",
    },
    {
      text: "Gender matters everywhere in the world. And today I would like to ask that we begin to dream about and plan for a different world. A fairer world.",
      context: "Concluding call for global solidarity and systemic change.",
      highlight: "Call to Vision",
    },
  ];

  return (
    <section id="quotes" className="py-20 bg-plum-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-plum-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold-400 mb-2">Primary Text Evidence</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Key Excerpts & Context
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, idx) => (
            <div
              key={idx}
              className="bg-plum-900/60 backdrop-blur-md p-8 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-colors flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-gold-400/50 group-hover:text-gold-400 transition-colors" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                    {q.highlight}
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl font-normal text-cream-50 italic leading-relaxed mb-6">
                  &ldquo;{q.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-cream-200/70 font-sans block leading-normal">
                  <strong className="text-gold-400 font-semibold uppercase tracking-wide">Context:</strong> {q.context}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
