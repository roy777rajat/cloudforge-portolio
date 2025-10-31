import { Cloud, Database, Brain, Network, Activity, Code } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "AWS Cloud Architecture",
    description:
      "End-to-end cloud migration, VPC design, and serverless integration tailored for enterprise scale and compliance.",
    tags: ["AWS", "Migration", "Infrastructure"],
  },
  {
    icon: Database,
    title: "Data Engineering Pipelines",
    description:
      "Build robust ETL/ELT workflows with AWS Glue, PySpark, and Kinesis for real-time and batch processing.",
    tags: ["ETL", "PySpark", "Data Lakes"],
  },
  {
    icon: Brain,
    title: "AI & GenAI Automation",
    description:
      "Implement AWS Bedrock and OpenAI workflows for document processing, chatbots, and intelligent automation.",
    tags: ["AI", "Bedrock", "Automation"],
  },
  {
    icon: Network,
    title: "API & Microservices",
    description:
      "Design scalable RESTful APIs and microservices architectures with comprehensive monitoring hooks.",
    tags: ["APIs", "Microservices", "Integration"],
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description:
      "Set up Dynatrace and Grafana dashboards for real-time system insights and proactive issue detection.",
    tags: ["Dynatrace", "Grafana", "Observability"],
  },
  {
    icon: Code,
    title: "Insurance Tech Solutions",
    description:
      "Specialized in PAS modernization, policy administration, and insurance data transformation projects.",
    tags: ["Insurance", "PAS", "Legacy Migration"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions for modern cloud and data challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
