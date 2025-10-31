import { Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "bg-aws-orange/10 text-aws-orange border-aws-orange/30",
  },
  {
    name: "Databricks Data Engineering",
    issuer: "Databricks",
    year: "2023",
    color: "bg-accent/10 text-accent border-accent/30",
  },
];

const recognitions = [
  "Cloud Migration Excellence",
  "AI Innovation Award",
  "Insurance Transformation Leader",
  "Performance Optimization Champion",
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="h-10 w-10 text-primary animate-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="text-primary font-semibold">2+ Certifications</span> and industry recognition
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${cert.color} shadow-lg tech-card animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-heading font-bold mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-sm opacity-80 mb-1">{cert.issuer}</p>
                      <p className="text-xs opacity-60">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Key Recognitions
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {recognitions.map((recognition, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {recognition}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
