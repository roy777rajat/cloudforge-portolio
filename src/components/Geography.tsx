import { useEffect, useState } from "react";
import { Globe, MapPin } from "lucide-react";

const regions = [
  {
    country: "India",
    flag: "🇮🇳",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
  },
];

export function Geography() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % regions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <section id="geography" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Globe className="h-10 w-10 text-primary animate-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Global <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="text-primary font-semibold">4+ Countries</span> across APAC, EMEA, and UK landscapes
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {regions
              .slice(currentIndex, currentIndex + 2)
              .concat(regions.slice(0, Math.max(0, currentIndex + 2 - regions.length)))
              .map((region, idx) => (
              <div
                key={`${region.country}-${idx}`}
                className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{region.flag}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-heading font-bold">
                        {region.country}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
