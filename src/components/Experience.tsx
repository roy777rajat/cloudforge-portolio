import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Associate Consultant",
    company: "Diligenta Ltd (TCS UK)",
    location: "United Kingdom",
    period: "2022 - Present",
    description:
      "Built AWS-based insurance data lakes, ETL pipelines with PySpark, implemented Lambda EventBridge monitoring, and integrated Dynatrace for observability.",
    achievements: [
      "Designed scalable data lake architecture using AWS S3, Glue, and Athena",
      "Improved ETL pipeline performance by 35% with PySpark optimization",
      "Implemented real-time monitoring with EventBridge and Dynatrace",
    ],
  },
  {
    title: "Associate Consultant",
    company: "TCS India",
    location: "India",
    period: "2020 - 2022",
    description:
      "Migrated PAS systems to AWS, implemented AI claim processing with Textract & Bedrock, and developed a Neo4J-powered chatbot.",
    achievements: [
      "Led cloud migration of legacy PAS systems to AWS",
      "Built AI-powered document processing pipeline using AWS Bedrock",
      "Developed graph-based chatbot achieving 80% automation in onboarding",
    ],
  },
  {
    title: "Assistant Consultant",
    company: "TCS South Africa",
    location: "South Africa",
    period: "2016 - 2020",
    description:
      "Designed high-availability APIs, created YAML-based orchestration, and optimized RESTful services.",
    achievements: [
      "Architected microservices with 99.9% uptime SLA",
      "Developed YAML-based orchestration framework for workflow automation",
      "Optimized API response times by 40% through caching strategies",
    ],
  },
  {
    title: "IT Analyst",
    company: "TCS UAE",
    location: "UAE",
    period: "2014 - 2016",
    description:
      "Integrated PAS with Oracle Financials; implemented Customer 360 dashboards.",
    achievements: [
      "Successfully integrated PAS systems with Oracle Financials",
      "Built comprehensive Customer 360 analytics dashboards",
      "Reduced data synchronization time by 50%",
    ],
  },
  {
    title: "System Engineer",
    company: "TCS India",
    location: "India",
    period: "2010 - 2014",
    description:
      "System engineering, TCS BaNCS Insurance product development, and foundational technical roles across leading organizations.",
    achievements: [
	"Designed and implemented robust APIs for enhanced system integration.",
	"Developed and managed databases with Core Java, Spring, JDBC, and Oracle PLSQL/SQL.",
	"Collaborated with cross-functional teams to optimize application performance and drive project success.",
	"Executed scalable system design and architecture, ensuring adaptability for future growth.",
	"Led seamless integration efforts, maintaining data flow and functionality across platforms.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A decade of innovation across four continents
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                <div className="md:ml-20 bg-card rounded-xl p-6 border border-border shadow-lg tech-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
