import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ProblemSection from "@/app/components/ProblemSection";
import SolutionSection from "@/app/components/SolutionSection";
import HowItWorks from "@/app/components/HowItWorks";
import StatsSection from "@/app/components/StatsSection";
import AboutSection from "@/app/components/AboutSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
