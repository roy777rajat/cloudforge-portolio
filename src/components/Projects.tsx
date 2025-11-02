import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import defectManagementImg from "@/assets/project-defect-management.jpg";
import mediaMakerImg from "@/assets/project-media-maker.jpg";
import dataLakeImg from "@/assets/project-data-lake-new.jpg";
import aiClaimsImg from "@/assets/project-ai-claims-new.jpg";
import neo4jChatbotImg from "@/assets/project-neo4j-new.jpg";
import vehicleTrackingImg from "@/assets/project-vehicle-new.jpg";
import monitoringImg from "@/assets/project-monitoring-new.jpg";
import cloudMigrationImg from "@/assets/project-cloud-migration-new.jpg";

const projects = [
  {
    title: "AI-Driven Defect Management & Incident Tracking",
    description:
      "Revolutionized defect tracking with conversational AI, enabling teams to manage incidents through WhatsApp, Teams, and Slack. Built intelligent state machine workflows using Anthropic's Claude, N8N automation, and real-time notifications via Twilio.",
    tech: ["Python", "Claude AI", "Twilio", "N8N", "Render", "AWS"],
    link: "https://medium.com/@uk.rajatroy/the-ai-powered-defect-workflow-state-machine-mcp-meets-n8n-render-and-whatsapp-slack-3ad8c936b944",
    image: defectManagementImg,
  },
  {
    title: "Insurance Media Maker - Multi-Agent AI Platform",
    description:
      "Developed an innovative end-to-end media generation platform leveraging Agentic AI and multi-agent orchestration. Integrates AWS Bedrock, Nova, Amazon Polly, and Claude to automatically create multimedia insurance content in real-time for personalized customer experiences.",
    tech: ["Python", "AWS Bedrock", "AWS Strands", "Agent Core", "Nova", "Claude AI"],
    link: "https://medium.com/@uk.rajatroy/insurance-product-media-maker-agentic-ai-with-llms-multi-agent-orchestration-mcp-and-media-92840d27806c",
    image: mediaMakerImg,
  },
  {
    title: "Enterprise Data Lake Modernization",
    description:
      "Architected scalable S3-based data lake infrastructure using AWS Glue and PySpark. Implemented comprehensive data validation frameworks and ETL pipelines, achieving 35% faster transaction processing and enabling near real-time payment analytics for insurance operations.",
    tech: ["AWS S3", "Glue", "PySpark", "Athena", "Lambda"],
    link: "https://www.linkedin.com/in/royrajat/",
    image: dataLakeImg,
  },
  {
    title: "AI-Powered Claims Processing Automation",
    description:
      "Transformed claims workflows using AWS Textract for intelligent document extraction and AWS Bedrock for classification. Reduced manual processing time by 60% through automated claim validation, fraud detection, and smart routing capabilities.",
    tech: ["AWS Bedrock", "Textract", "Lambda", "Python", "GenAI"],
    link: "https://medium.com/@uk.rajatroy/automating-insurance-claim-initiation-using-aws-and-generative-ai-79456ac2d16e",
    image: aiClaimsImg,
  },
  {
    title: "Neo4j Knowledge Graph Chatbot",
    description:
      "Built sophisticated graph-based AI chatbot combining Neo4j's relationship intelligence with LLM capabilities. Crawled and indexed legacy JSP systems, improving customer onboarding automation by 80% through context-aware conversations and intelligent policy recommendations.",
    tech: ["Neo4J", "Python", "AWS Bedrock", "Graph DB", "Redis"],
    link: "https://medium.com/@uk.rajatroy/transforming-legacy-insurance-with-neo4j-redis-and-ai-robust-scalable-low-latency-smart-2b72907fa23c",
    image: neo4jChatbotImg,
  },
  {
    title: "Real-Time Vehicle Tracking & RSA Dispatch",
    description:
      "Engineered high-performance real-time tracking system processing millions of location events using PyFlink stream processing and Redis Cloud. Integrated with AWS Kinesis for sub-second location updates, enabling instant roadside assistance dispatch and live fleet visualization.",
    tech: ["PyFlink", "Redis", "Kinesis", "Real-time", "AWS"],
    link: "https://medium.com/@uk.rajatroy/modern-insurance-is-in-motion-real-time-vehicle-tracking-roadside-assistance-rsa-cover-70cc2d836b90",
    image: vehicleTrackingImg,
  },
  {
    title: "Enterprise Observability & Monitoring Platform",
    description:
      "Designed comprehensive event-driven monitoring architecture using AWS EventBridge and Lambda. Integrated Dynatrace for full-stack observability, proactive alerting, and performance analytics. Achieved 99.9% uptime with automated incident response and CloudWatch metrics.",
    tech: ["EventBridge", "Lambda", "Dynatrace", "CloudWatch", "SNS"],
    link: "https://medium.com/@uk.rajatroy/from-spring-boot-insurance-app-to-full-cloud-observability-jmeter-asg-alb-and-dynatrace-906c244305c2",
    image: monitoringImg,
  },
  {
    title: "Legacy PAS Cloud Migration",
    description:
      "Led critical migration of Policy Administration Systems to AWS cloud infrastructure with zero downtime. Employed hybrid lift-and-shift and cloud-native refactoring strategies, modernizing Oracle-based systems into scalable microservices architecture using API Gateway and Lambda.",
    tech: ["AWS", "Migration", "Oracle", "API Gateway", "Microservices"],
    link: "https://www.linkedin.com/in/royrajat/",
    image: cloudMigrationImg,
  },
  {
    title: "RAG Unified Knowledge Chat with PDF and SQL Data using OpenAI",
    description: "Similarity Evaluation with RAG.",
    tech: ["Python", "OpenAI", "S3", "Dynamo DB", "PostgreSQL"],
    link: "https://medium.com/@uk.rajatroy/similarity-evaluation-unified-knowledge-chat-with-pdf-and-sql-data-using-openai-a1693d9a5ca0",
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

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50 text-xs">
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
