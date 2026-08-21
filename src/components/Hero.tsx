import { Quote, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center bg-gradient-to-b from-plum-950 via-plum-900 to-plum-800 text-white overflow-hidden">
      {/* Subtle overlay elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
          We Should All Be Feminists
        </h1>

        {/* Author */}
        <p className="font-sans text-xl sm:text-2xl font-light text-cream-200 mb-10 tracking-wide">
          By <span className="font-serif font-semibold text-gold-400">Chimamanda Ngozi Adichie</span>
        </p>

        {/* Pull Quote Box */}
        <div className="relative max-w-3xl mx-auto bg-plum-900/80 backdrop-blur-md border border-gold-500/30 rounded-2xl p-6 sm:p-8 text-left shadow-2xl">
          <Quote className="w-10 h-10 text-gold-400/40 absolute -top-4 -left-4 bg-plum-950 rounded-full p-2 border border-gold-500/20" />
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-cream-50 italic leading-relaxed pl-2 sm:pl-4">
            &ldquo;My own definition of a feminist is a man or a woman who says, &lsquo;Yes, there&rsquo;s a problem with gender as it is today and we must fix it, we must do better.&rsquo;&rdquo;
          </blockquote>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cream-200/70 font-sans uppercase tracking-widest">
            <span>Central Thesis</span>
            <span>2014 Manifesto</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 text-cream-200/60 hover:text-gold-400 transition-colors">
          <a href="#about" aria-label="Scroll to About Section" className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
