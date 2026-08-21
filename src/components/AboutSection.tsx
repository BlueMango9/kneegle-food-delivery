import { UserCheck, BookOpenCheck, Globe, Mic } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-plum-700 mb-2">Context & Background</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
            Author & Text Overview
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* About Author Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-plum-800" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-plum-100 flex items-center justify-center text-plum-800">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-plum-950">About the Author</h3>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Literary Figure</span>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6 font-sans">
              <strong className="text-plum-900 font-semibold">Chimamanda Ngozi Adichie</strong> is a world-renowned Nigerian novelist, essayist, and speaker. Recognized as one of the defining literary voices of the 21st century, her storytelling bridges cultural commentary, history, and gender discourse.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <Globe className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span><strong>Key Works:</strong> <em>Half of a Yellow Sun</em> (2006), <em>Americanah</em> (2013), <em>Purple Hibiscus</em> (2003).</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <Mic className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span><strong>Global Impact:</strong> Recipient of the MacArthur Genius Grant; her work has been translated into over 30 languages.</span>
              </div>
            </div>
          </div>

          {/* About Text Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center text-plum-900">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-plum-950">About the Text</h3>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Origin & Format</span>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6 font-sans">
              The essay originated from Adichie&apos;s celebrated December <strong>2012 TEDxEuston talk</strong> in London. The talk went viral, igniting global discussions on gender, and was notably sampled in Beyoncé&apos;s 2013 anthem <em>***Flawless</em>.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-2 h-2 rounded-full bg-plum-800 shrink-0 mt-2" />
                <span><strong>Publication:</strong> Released in book format in <strong>2014</strong> by Fourth Estate / Anchor Books.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0 mt-2" />
                <span><strong>Format:</strong> Personal essay / Feminist manifesto, combining humorous autobiographical anecdotes with acute sociological analysis.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
