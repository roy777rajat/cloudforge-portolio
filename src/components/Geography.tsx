import { Globe, MapPin } from "lucide-react";

const regions = [
  {
    country: "India",
    flag: "🇮🇳",
    years: "2007-2014, 2020-2022",
    role: "System Engineer to Associate Consultant",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    years: "2014-2016",
    role: "IT Analyst",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    years: "2016-2020",
    role: "Assistant Consultant",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    years: "2022-Present",
    role: "Associate Consultant",
  },
];

export function Geography() {
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

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    <p className="text-sm text-muted-foreground mb-2">
                      {region.years}
                    </p>
                    <p className="text-sm text-foreground/80 font-medium">
                      {region.role}
                    </p>
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
