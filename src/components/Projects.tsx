import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Insurance Data Lake Modernization",
    description:
      "Built end-to-end data lake using AWS S3, Glue, and PySpark. Improved transaction processing speed by 35% and enabled real-time analytics.",
    tech: ["AWS S3", "Glue", "PySpark", "Athena", "Lambda"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
  {
    title: "AI-Powered Claim Processing",
    description:
      "Leveraged AWS Textract and Bedrock for automated document analysis, reducing manual processing time by 60%.",
    tech: ["AWS Bedrock", "Textract", "Lambda", "Python", "GenAI"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
  {
    title: "Neo4J Chatbot Framework",
    description:
      "Graph-based chatbot system improving customer onboarding automation by 80% with intelligent context awareness.",
    tech: ["Neo4J", "Python", "AWS", "Graph DB", "NLP"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
  {
    title: "Vehicle Tracking & RSA Dispatch",
    description:
      "Real-time vehicle tracking system using Flink and Redis Cloud via Kinesis for instant location updates.",
    tech: ["PyFlink", "Redis", "Kinesis", "Real-time", "AWS"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
  {
    title: "Event-Driven Monitoring System",
    description:
      "Implemented Lambda EventBridge monitoring with Dynatrace integration for comprehensive observability.",
    tech: ["EventBridge", "Lambda", "Dynatrace", "CloudWatch", "Grafana"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
  {
    title: "PAS to Cloud Migration",
    description:
      "Successfully migrated legacy Policy Administration Systems to AWS cloud with zero downtime.",
    tech: ["AWS", "Migration", "Oracle", "API Gateway", "Microservices"],
    link: "https://www.linkedin.com/in/rajat-roy-78698913/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world solutions driving digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with Gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed min-h-[4.5rem]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
