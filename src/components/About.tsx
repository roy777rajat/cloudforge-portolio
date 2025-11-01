import { Award, Briefcase, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A decade of transforming data across continents
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              Rajat is an{" "}
              <span className="font-semibold text-primary">
                Associate Consultant at Tata Consultancy Services (Diligenta Ltd, UK)
              </span>{" "}
              with a passion for building data-driven ecosystems on AWS Cloud. From designing enterprise data lakes and
              near-real-time pipelines to modernizing legacy insurance operations, Rajat believes that{" "}
              <span className="italic">data is meaningful only when it delivers measurable value</span>.
            </p>
            <p className="text-lg leading-relaxed">
              His journey from developer to cloud data engineer has been marked by continuous learning, hands-on
              innovation, and an eagerness to integrate AI into traditional insurance workflows. He designs scalable ETL
              pipelines using AWS Glue and Apache PySpark, implements AI-driven automation with AWS Bedrock, and builds
              API frameworks aligned with strategic business goals.
            </p>
            <p className="text-lg leading-relaxed">
              Backed by{" "}
              <span className="font-semibold text-accent">
                12+ professional certifications including AWS Solutions Architect and Databricks Data Engineering
              </span>
              , Rajat empowers teams to adopt cloud-native, high-performance architectures that drive digital
              transformation across the insurance industry.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Peterborough, UK</span>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-xl p-6 border border-border shadow-lg tech-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">10+ Years Experience</h3>
                  <p className="text-muted-foreground">
                    Across India, UAE, South Africa, and the UK, delivering enterprise-scale solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-lg tech-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Key Achievements</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Built AWS-based data lakes for insurance transformation</li>
                    <li>• Developed AI orchestration models with 80% automation</li>
                    <li>• Improved transaction speeds by 35% with PySpark</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-lg tech-card">
              <h3 className="font-heading font-semibold text-xl mb-3">Education</h3>
              <p className="text-muted-foreground">
                <span className="font-semibold">B.Tech</span>
                <br />
                West Bengal University of Technology, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
