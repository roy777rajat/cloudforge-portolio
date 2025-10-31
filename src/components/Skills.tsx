import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Zap, Brain, BarChart, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud & Integration",
    skills: [
      "AWS S3",
      "AWS EC2",
      "AWS Glue",
      "AWS Athena",
      "API Gateway",
      "EventBridge",
      "Step Functions",
      "Lambda",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      "Python",
      "Pandas",
      "PySpark",
      "PyFlink",
      "Oracle",
      "MySQL",
      "Neo4J",
    ],
  },
  {
    icon: Zap,
    title: "Event-Driven Systems",
    skills: ["Kafka", "AWS Kinesis", "Lambda Functions", "EventBridge"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: [
      "AWS Bedrock",
      "OpenAI",
      "AWS Textract",
      "N8N",
      "Redis",
      "GenAI Workflows",
    ],
  },
  {
    icon: BarChart,
    title: "Monitoring & KPIs",
    skills: ["Dynatrace", "Grafana", "CloudWatch", "Performance Analytics"],
  },
  {
    icon: Code,
    title: "App Development",
    skills: ["Java", "Spring MVC", "RESTful APIs", "HTML/CSS/JS", "Microservices"],
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    color: "bg-primary/10 text-primary border-primary/30",
  },
  {
    name: "Databricks Data Engineering",
    issuer: "Databricks",
    color: "bg-accent/10 text-accent border-accent/30",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive toolkit for modern cloud and data engineering
          </p>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${cert.color} shadow-lg tech-card animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-heading font-bold mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm opacity-80">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-lg tech-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
