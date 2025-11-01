import { Shield, Heart, TrendingUp, FileText, CheckCircle, Users, Briefcase } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const lobs = [
  {
    icon: Shield,
    title: "Life Insurance",
    points: [
      "Policy lifecycle management from issuance to maturity",
      "Premium calculation and benefit processing automation",
      "Surrender processing with data lineage tracking",
      "Automated reporting and regulatory compliance",
      "Maturity benefits calculation with AWS-based workflows"
    ],
  },
  {
    icon: Heart,
    title: "Health Insurance",
    points: [
      "Claims adjudication and settlement automation",
      "Provider network integration and data synchronization",
      "Medical data ETL flows with quality checks",
      "Policy renewals with AI-based fraud detection",
      "Real-time eligibility verification systems"
    ],
  },
  {
    icon: TrendingUp,
    title: "Pensions",
    points: [
      "Contribution tracking and fund management",
      "Benefit calculation engines with complex rules",
      "Regulatory data reporting in AWS environment",
      "Periodic statement generation and distribution",
      "Investment portfolio tracking and rebalancing"
    ],
  },
  {
    icon: FileText,
    title: "Annuities",
    points: [
      "Periodic payout computation and scheduling",
      "Interest revaluation with automated adjustments",
      "AWS-based payment automation and tracking",
      "Tax calculation and reporting workflows",
      "Customer statement generation and delivery"
    ],
  },
  {
    icon: CheckCircle,
    title: "Claims",
    points: [
      "FNOL to settlement pipeline automation",
      "Document AI with AWS Textract integration",
      "Workflow orchestration with Bedrock models",
      "Fraud detection using machine learning",
      "Real-time claim status tracking and notifications"
    ],
  },
  {
    icon: Users,
    title: "Policy Administration",
    points: [
      "End-to-end policy record management systems",
      "Data migration to modern PAS platforms",
      "Microservices-based policy operations",
      "Real-time data sync across systems",
      "Legacy system modernization and cloud migration"
    ],
  },
  {
    icon: Briefcase,
    title: "Underwriting",
    points: [
      "Risk assessment rules engine implementation",
      "Data quality scoring and validation frameworks",
      "AI-assisted decision support systems",
      "Automated underwriting workflow orchestration",
      "Integration with external risk assessment APIs"
    ],
  },
];

export function InsuranceExpertise() {
  return (
    <section id="insurance" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Insurance <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep domain knowledge across <span className="text-primary font-semibold">7+ Lines of Business</span>
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {lobs.map((lob, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                    <lob.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {lob.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {lob.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
