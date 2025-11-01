import { Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certifications = [
  {
    name: "Confluent Apache Kafka Fundamentals Accreditation",
    provider: "Confluent",
    link: "https://certificates.confluent.io/223f5446-4848-407a-bb1e-217eae0be7bf#acc.omvWMQNF",
  },
  {
    name: "Confluent Data Streaming Engineer",
    provider: "Confluent",
    link: "https://certificates.confluent.io/d2ac746e-8de8-4d0e-a56a-d43e550cbf2a#acc.a13JZdsu",
  },
  {
    name: "Kafka Cluster Setup & Administrator",
    provider: "Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-bb59cdb4-09b7-472f-9996-1e0c4535ace0.jpg",
  },
  {
    name: "AI Agent Fundamentals - Databricks",
    provider: "Databricks",
    link: "https://credentials.databricks.com/c46c29d3-7c23-4e1b-b4fa-a8afdcb92de3#acc.KHYiuzed",
  },
  {
    name: "GraphQL - Intermediate Cypher Queries",
    provider: "Neo4j",
    link: "https://graphacademy.neo4j.com/c/0917a891-71c2-497b-b3ef-ce6295c84be0/",
  },
  {
    name: "Databricks Platform Architect - Databricks & AWS",
    provider: "Databricks",
    link: "https://credentials.databricks.com/0703b9e4-b44e-4af5-85ac-f15e4295c0c6#acc.v0F5SAEh",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    provider: "Databricks",
    link: "https://credentials.databricks.com/df2a4edd-c36a-42eb-90db-1a1bb78b2e15#acc.lu089eyH",
  },
  {
    name: "Databricks Certified Data Engineer Professional",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-dd9a1350-6146-4e3e-9df1-515821b7704b/",
  },
  {
    name: "Academy Accreditation - Generative AI Fundamentals",
    provider: "Databricks",
    link: "https://credentials.databricks.com/1fe3bee3-a8fe-4b8e-afb0-3f7ba74b5d55#acc.Yduk1XxB",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    provider: "AWS",
    link: "https://www.credly.com/badges/8817f0f3-7984-47d0-9e8a-1c3f5f861860/linked_in_profile",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    provider: "AWS",
    link: "https://www.credly.com/badges/097a83c4-0505-4960-80fb-47b6d2b40a5a/linked_in_profile",
  },
  {
    name: "SQL Analytics and BI on Databricks",
    provider: "Databricks",
    link: "https://www.linkedin.com/in/royrajat/details/certifications/1737137484167/single-media-viewer/?profileId=ACoAAAHO68EBcQ0nEsrBTK6DoEJ554ptqOtPBPU",
  },
];

// Group certifications by provider
const groupedCertifications = certifications.reduce((acc, cert) => {
  if (!acc[cert.provider]) {
    acc[cert.provider] = [];
  }
  acc[cert.provider].push(cert);
  return acc;
}, {} as Record<string, typeof certifications>);

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

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Certifications Carousel */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Professional Certifications
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {Object.entries(groupedCertifications).map(([provider, certs], groupIndex) => (
                  <CarouselItem key={groupIndex} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-primary/20">
                        <Award className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-heading font-bold text-primary">
                          {provider}
                        </h4>
                        <span className="ml-auto text-sm font-semibold text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                          {certs.length}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {certs.map((cert, certIndex) => (
                          <a
                            key={certIndex}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-3 rounded-lg bg-muted/30 hover:bg-muted/60 border border-transparent hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {cert.name}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
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
