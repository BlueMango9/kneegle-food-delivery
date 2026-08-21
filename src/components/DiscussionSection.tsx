import { HelpCircle, TrendingUp, MessageSquare } from "lucide-react";

export default function DiscussionSection() {
  const questions = [
    {
      q: "How do the microaggressions Adichie describes in Nigeria compare to gender dynamics you have observed in your own community or university?",
      focus: "Cross-Cultural Reflection",
    },
    {
      q: "Adichie asserts that 'masculinity is a hard, small cage.' In what specific ways does redefining masculinity benefit men and boys in modern society?",
      focus: "Masculinity & Mental Health",
    },
    {
      q: "Why is reclaiming 'anger' as a positive force important for marginalized groups, and how does it challenge traditional standards of female 'likeability'?",
      focus: "Social Change & Emotion",
    },
    {
      q: "How can academic institutions like SRM IST foster environments that actively counteract gendered double standards in leadership and coursework?",
      focus: "Campus Application",
    },
  ];

  return (
    <section id="discussion" className="py-20 bg-cream-100/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contemporary Relevance Box */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-plum-900/15 shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-plum-800" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-plum-100 rounded-lg text-plum-900">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-plum-950">Relevance Today</h3>
          </div>

          <p className="text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
            Although originally delivered in 2012, Adichie&apos;s manifesto remains acutely relevant to contemporary discourse. From debates surrounding pay transparency and equal workplace leadership to modern discussions on emotional labor and mental health, her core premise—that gender expectations artificially restrict human potential—continues to serve as a vital framework for 21st-century equality.
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-plum-700 mb-2">Classroom Engagement</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
            Discussion Questions
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Questions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {questions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-slate-200 shadow-2xs hover:border-plum-800/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-plum-800 uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4 text-gold-600" />
                    <span>Question 0{idx + 1}</span>
                  </div>
                  <span className="text-[11px] font-medium bg-cream-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {item.focus}
                  </span>
                </div>

                <p className="font-sans text-base font-medium text-slate-800 leading-relaxed">
                  &ldquo;{item.q}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Suggested for class debate or written reflection</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
