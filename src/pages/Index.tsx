import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Geography } from "@/components/Geography";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Geography />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
