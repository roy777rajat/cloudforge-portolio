import { Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    link: "https://www.credly.com/badges/8817f0f3-7984-47d0-9e8a-1c3f5f861860/linked_in_profile",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    year: "2023",
    link: "https://credentials.databricks.com/df2a4edd-c36a-42eb-90db-1a1bb78b2e15#acc.lu089eyH",
  },
  {
    name: "Confluent Apache Kafka Fundamentals",
    issuer: "Confluent",
    year: "2024",
    link: "https://certificates.confluent.io/223f5446-4848-407a-bb1e-217eae0be7bf#acc.omvWMQNF",
  },
  {
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    year: "2024",
    link: "https://credentials.databricks.com/8ea2c1cc-83de-473a-b08f-afaac1177c6f#acc.5YWvwvka",
  },
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    year: "2024",
    link: "https://graphacademy.neo4j.com/c/4b88df87-81de-41e9-a7a0-fd6c80fdf1cb/",
  },
  {
    name: "Redis Certified Developer",
    issuer: "Redis University",
    year: "2024",
    link: "https://bcert.me/bc/html/show-badge.html?b=kmwhckjy",
  },
  {
    name: "Python Associate Developer",
    issuer: "Python Institute",
    year: "2022",
    link: "https://www.linkedin.com/in/royrajat/",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    link: "https://www.credly.com/badges/c99a6835-b8d9-454f-a825-0cbce8dd5c5e/linked_in_profile",
  },
  {
    name: "AWS Lambda Foundations",
    issuer: "Amazon Web Services",
    year: "2023",
    link: "https://www.linkedin.com/in/royrajat/",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2024",
    link: "https://www.cloudskillsboost.google/public_profiles/4dafa73b-d13a-4b96-a5f7-c881b8a88bd0/badges/12030832",
  },
  {
    name: "Prompt Engineering for Generative AI",
    issuer: "Databricks",
    year: "2024",
    link: "https://credentials.databricks.com/7ff25503-6a66-4ac5-90c5-5f050dc1c033#acc.BLlexF5G",
  },
  {
    name: "Large Language Models",
    issuer: "Databricks",
    year: "2024",
    link: "https://credentials.databricks.com/b4ccb3b1-10f3-42a5-a2b5-9f30a0c19258#acc.0DUHsrvO",
  },
];

const recognitions = [
  {
    title: "Winner - AI Magic with AWS Q Innovation Challenge",
    icon: "🏆",
  },
  {
    title: "Finalist - TCS AI Hackathon",
    icon: "🤖",
  },
  {
    title: "Recognized - Redis AI Challenge",
    icon: "🏅",
  },
  {
    title: "10+ Years Global Experience",
    icon: "🌍",
  },
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
            <span className="text-primary font-semibold">12+ Certifications</span> and industry recognition
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border border-primary/20 bg-card/50 hover:bg-card hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 mt-1 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-sm font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground/70">{cert.year}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Key Recognitions
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {recognitions.map((recognition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl">{recognition.icon}</span>
                  <p className="text-sm font-medium">{recognition.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
