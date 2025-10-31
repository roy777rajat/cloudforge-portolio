import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "AWS Cloud Engineer",
  "Data Engineer",
  "Insurance Tech Specialist",
  "Solutions Architect",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/10 dark:from-background dark:via-secondary/30 dark:to-accent/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">
                Associate Consultant @ TCS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Rajat Roy</span>
            </h1>

            <div className="h-20 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground/80">
                {roles[currentRole]}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transforming Insurance Data with Cloud, AI, and Engineering Excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/rajat-roy-78698913/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a href="mailto:roy777rajat@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-glow" />
              <div className="relative w-full h-full rounded-full border-4 border-primary/50 overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/80 flex items-center justify-center">
                <div className="text-8xl font-bold gradient-text">RR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
