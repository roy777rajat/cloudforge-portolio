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
import ragKnowledgeChatImg from "@/assets/project-rag-knowledge-chat.jpg";
import mcpAiAgentImg from "@/assets/project-mcp-ai-agent.jpg";
import kappaArchitectureImg from "@/assets/project-kappa-architecture.jpg";
import cdcDebeziumImg from "@/assets/project-cdc-debezium.jpg";
import insurancePipelineImg from "@/assets/project-insurance-pipeline.jpg";

const projects = [
  {
    title: "Real-Time Motor Insurance Fraud Detection System",
    description:
      "Built an end-to-end real-time fraud detection system using Databricks Lakehouse architecture. Leverages Delta Live Tables, streaming data pipelines, and ML models to detect fraudulent motor insurance claims instantly, achieving high accuracy while maintaining low latency for production-grade insurance operations.",
    tech: ["Databricks", "Delta Lake", "PySpark", "ML", "Real-time"],
    link: "https://medium.com/@uk.rajatroy/real-time-motor-insurance-fraud-detection-system-using-databricks-lakehouse-55fac8952777",
    image: dataLakeImg,
  },
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
    title: "MCP-Powered Autonomous AI Agent",
    description:
      "Built an end-to-end autonomous AI agent leveraging MCP (Model Context Protocol) to orchestrate Git operations, cloud deployments on Render, and intelligent task execution via Microsoft Copilot Studio. Demonstrates how MCP enables seamless tool integration for fully autonomous developer workflows.",
    tech: ["MCP", "Copilot Studio", "Git", "Render", "AI Agent"],
    link: "https://medium.com/@uk.rajatroy/building-an-mcp-powered-autonomous-ai-agent-with-git-render-and-microsoft-copilot-studio-1b9c74d5cfb8",
    image: mcpAiAgentImg,
  },
  {
    title: "Kappa Architecture: Kafka, PySpark & Delta Lake",
    description:
      "Implemented a Kappa Architecture with multiple local sinks, streaming real-time data through Kafka into PySpark for processing, then persisting into both PostgreSQL and Delta Lake simultaneously. Showcases unified stream processing eliminating the need for separate batch layers.",
    tech: ["Kafka", "PySpark", "PostgreSQL", "Delta Lake", "Streaming"],
    link: "https://medium.com/@uk.rajatroy/kappa-architecture-multiple-sink-kafka-pyspark-postgres-and-delta-lake-44cefd33350e",
    image: kappaArchitectureImg,
  },
  {
    title: "True Streaming: CDC with Debezium",
    description:
      "Designed a true streaming Change Data Capture pipeline using Debezium to capture real-time database changes at the log level. Streams row-level inserts, updates, and deletes through Kafka topics, enabling event-driven architectures with zero data loss and minimal latency.",
    tech: ["Debezium", "Kafka", "CDC", "PostgreSQL", "Docker"],
    link: "https://medium.com/@uk.rajatroy/true-streaming-building-change-data-capture-with-debezium-9466f30021e7",
    image: cdcDebeziumImg,
  },
  {
    title: "Cost-Effective Insurance Data Pipeline",
    description:
      "Architected a modern, cost-optimized data pipeline for insurance analytics using AWS DMS for real-time database migration and Databricks for scalable processing. Replaces expensive legacy ETL with a streamlined cloud-native approach, reducing infrastructure costs while improving data freshness.",
    tech: ["AWS DMS", "Databricks", "Delta Lake", "Insurance", "Analytics"],
    link: "https://medium.com/@uk.rajatroy/cost-effective-modern-data-pipeline-for-insurance-analytics-using-aws-dms-and-databricks-df180f129d7b",
    image: insurancePipelineImg,
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
    image: ragKnowledgeChatImg,
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
