import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Facebook, Github } from "lucide-react";
import { StatsCarousel } from "@/components/StatsCarousel";

const roles = [
  "Data + AI",
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
                Talk About Data & AI
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
              Passionate about building intelligent data ecosystems on AWS Cloud. Seen and been part of various Insurance Digital Transformation initiatives across Claims Processing, Policy Administration, Underwriting, and Billing systems—delivering real-time ETL pipelines, AI-driven automation, modernized data architectures, production support, cross-functional team communication, and data governance at scale.
            </p>

            <div className="text-base text-muted-foreground/80 max-w-2xl italic">
              "Transforming insurance operations with Data + AI: from claims automation to policy insights, building secure and scalable solutions."
            </div>

            {/* Confident Quote Section */}
            <div className="mt-6 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                💡 <span className="font-bold text-primary">My Approach:</span> With over a decade of experience across various insurance transformations, I architect Data + AI solutions that turn legacy silos into real-time insights. From automating claims to ensuring governance, I work smart—not just hard—delivering faster results with trusted data.
              </p>
            </div>

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

            {/* Animated Stats */}
            <div className="mt-8">
              <StatsCarousel />
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/royrajat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
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
                <a 
                  href="https://github.com/roy777rajat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://medium.com/@uk.rajatroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium Profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a 
                  href="mailto:roy777rajat@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.facebook.com/rajat.ray.716/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-glow" />
              <div className="relative w-full h-full rounded-full border-4 border-primary/50 overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/4yCbmMVH/Rajat.jpg" 
                  alt="Rajat Roy - AWS Cloud & Data Engineer"
                  className="w-full h-full object-cover"
                />
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
