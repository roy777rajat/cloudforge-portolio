import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dataLakeImg from "@/assets/project-data-lake.jpg";
import aiClaimsImg from "@/assets/project-ai-claims.jpg";
import neo4jChatbotImg from "@/assets/project-neo4j-chatbot.jpg";
import vehicleTrackingImg from "@/assets/project-vehicle-tracking.jpg";
import monitoringImg from "@/assets/project-monitoring.jpg";
import cloudMigrationImg from "@/assets/project-cloud-migration.jpg";

const projects = [
  {
    title: "AI Driven defect management & incident tracking automation",
    description:
      "Efficient handling of defects and incidents via simple chat messages (Whatsapp/Teams/Slack)",
    tech: ["Python","Anthropic model","Twillo","N8N","Render","AWS"],
    link: "https://medium.com/@uk.rajatroy/the-ai-powered-defect-workflow-state-machine-mcp-meets-n8n-render-and-whatsapp-slack-3ad8c936b944",
    image: dataLakeImg,
  },
  {
    title: "Insurance Media Maker - Agentic AI/MCP Based solution",
    description:
      "Built end-to-end near real time Insurance Product Media Maker, demonstrates how Agentic AI, Claude/Anthropic LLMs, AWS Strands, Nova, Amazon Polly and MCP-based multi-agent orchestration can transform insurance workflows end-to-end, generating real-time, multimedia content for every customer interaction.",
    tech: ["Python", "AWS Bedrock", "AWS Strands", "Agent Core", "Nova" , "Anthropic model"],
    link: "https://medium.com/@uk.rajatroy/insurance-product-media-maker-agentic-ai-with-llms-multi-agent-orchestration-mcp-and-media-92840d27806c",
    image: dataLakeImg,
  },
  {
    title: "Insurance Data Lake Modernization",
    description:
      "Built end-to-end S3-based data lake using AWS Glue and PySpark with validation tooling. Improved transaction processing speed by 35% enabling near real-time payments.",
    tech: ["AWS S3", "Glue", "PySpark", "Athena", "Lambda"],
    link: "https://www.linkedin.com/in/royrajat/",
    image: dataLakeImg,
  },
  {
    title: "AI-Powered Claim Processing",
    description:
      "Leveraged AWS Textract and Bedrock for automated document analysis and classification, reducing manual processing time by 60%.",
    tech: ["AWS Bedrock", "Textract", "Lambda", "Python", "GenAI"],
    link: "https://medium.com/@uk.rajatroy/automating-insurance-claim-initiation-using-aws-and-generative-ai-79456ac2d16e",
    image: aiClaimsImg,
  },
  {
    title: "Neo4J Chatbot Framework with Legacy JSP Crawling",
    description:
      "Graph-based chatbot system with LLM integration improving customer onboarding automation by 80% with intelligent context awareness.",
    tech: ["Neo4J", "Python", "AWS", "Graph DB", "Bedrock"],
    link: "https://medium.com/@uk.rajatroy/transforming-legacy-insurance-with-neo4j-redis-and-ai-robust-scalable-low-latency-smart-2b72907fa23c",
    image: neo4jChatbotImg,
  },
  {
    title: "Vehicle Tracking & RSA Dispatch",
    description:
      "Real-time vehicle tracking system using PyFlink and Redis Cloud via Kinesis for instant location updates and live map visualization.",
    tech: ["PyFlink", "Redis", "Kinesis", "Real-time", "AWS"],
    link: "https://medium.com/@uk.rajatroy/modern-insurance-is-in-motion-real-time-vehicle-tracking-roadside-assistance-rsa-cover-70cc2d836b90",
    image: vehicleTrackingImg,
  },
  {
    title: "Event-Driven Monitoring System",
    description:
      "Implemented Lambda EventBridge monitoring with Dynatrace integration for comprehensive observability and proactive alerting.",
    tech: ["EventBridge", "Lambda", "Dynatrace", "CloudWatch", "SNS"],
    link: "https://medium.com/@uk.rajatroy/from-spring-boot-insurance-app-to-full-cloud-observability-jmeter-asg-alb-and-dynatrace-906c244305c2",
    image: monitoringImg,
  },
  {
    title: "PAS to Cloud Migration",
    description:
      "Successfully migrated legacy Policy Administration Systems to AWS cloud with zero downtime using lift-and-shift and cloud-native patterns.",
    tech: ["AWS", "Migration", "Oracle", "API Gateway", "Microservices"],
    link: "https://www.linkedin.com/in/royrajat/",
    image: cloudMigrationImg,
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up block cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
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

                {/* View Link */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
