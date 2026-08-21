import { BookOpen, Calendar, User, IdCard } from "lucide-react";

export default function Footer() {
  return (
    <footer id="references" className="bg-plum-950 text-white pt-16 pb-12 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Works Cited Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-plum-900/60 p-8 sm:p-10 rounded-2xl border border-gold-500/20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-gold-400" />
            <h3 className="font-serif text-2xl font-bold text-white">Works Cited</h3>
          </div>

          <div className="space-y-4 text-cream-100 text-sm sm:text-base leading-relaxed font-sans">
            <p className="pl-8 -indent-8">
              Adichie, Chimamanda Ngozi. <em>We Should All Be Feminists</em>. Anchor Books, 2014.
            </p>
            <p className="pl-8 -indent-8">
              Adichie, Chimamanda Ngozi. &ldquo;We Should All Be Feminists.&rdquo; <em>TEDxEuston</em>, Dec. 2012, <a href="https://www.ted.com/talks/chimamanda_ngozi_adichie_we_should_all_be_feminists" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">ted.com/talks/chimamanda_ngozi_adichie_we_should_all_be_feminists</a>.
            </p>
          </div>
        </div>

        {/* Footer Meta Grid */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-cream-200/80">
          
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gold-400" />
            <span>Presented by: <strong className="text-white font-semibold">[Student Name]</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <IdCard className="w-4 h-4 text-gold-400" />
            <span>Section / Roll No: <strong className="text-white font-semibold">[Roll Number Placeholder]</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Submission Date: <strong className="text-white font-semibold">[Submission Date Placeholder]</strong></span>
          </div>

        </div>

        {/* Academic Copyright / Disclaimer */}
        <div className="mt-10 text-center text-xs text-cream-200/40">
          <p>SRM Institute of Science and Technology &bull; English Course Presentation</p>
        </div>

      </div>
    </footer>
  );
}
