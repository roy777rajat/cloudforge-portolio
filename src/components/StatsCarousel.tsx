import { useEffect, useState } from "react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "4+", label: "Countries" },
  { value: "7+", label: "Insurance LOBs" },
  { value: "6+", label: "Featured Projects" },
  { value: "11+", label: "AWS Cloud Skills" },
  { value: "5+", label: "Data Engineering Skills" },
  { value: "4+", label: "Streaming/Realtime Stack" },
  { value: "2+", label: "Certifications" },
];

export function StatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {stats.slice(currentIndex, currentIndex + 4).concat(
        stats.slice(0, Math.max(0, (currentIndex + 4) - stats.length))
      ).map((stat, idx) => (
        <div
          key={`${stat.label}-${idx}`}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:bg-card/80 hover:scale-105 transition-all duration-300 hover:border-primary/40 animate-fade-in"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
