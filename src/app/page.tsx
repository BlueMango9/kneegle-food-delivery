import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import QuotesSection from "@/components/QuotesSection";
import SummarySection from "@/components/SummarySection";
import DiscussionSection from "@/components/DiscussionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-plum-900 selection:text-gold-400">
      <Navbar />
      <Hero />
      <AboutSection />
      <ThemesSection />
      <QuotesSection />
      <SummarySection />
      <DiscussionSection />
      <Footer />
    </main>
  );
}
