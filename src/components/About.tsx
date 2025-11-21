import { Award, Briefcase } from "lucide-react";

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
              With a career spanning{" "}
              <span className="font-semibold text-primary">
                over one and half decade in Global IT Services
              </span>
              , I have worked across multiple continents delivering data engineering solutions that matter. My passion lies in building data-driven ecosystems on AWS Cloud—from designing enterprise data lakes and near-real-time pipelines to modernizing legacy insurance operations. I believe that{" "}
              <span className="italic">data is meaningful only when it delivers measurable value</span>.
            </p>
            <p className="text-lg leading-relaxed">
              My journey from developer to cloud data engineer has been marked by continuous learning, hands-on
              innovation, and an eagerness to integrate AI into traditional insurance workflows. I architect end-to-end data solutions that blend cloud infrastructure with AI-driven intelligence, ensuring every design decision aligns with business outcomes and operational excellence.
            </p>
            <p className="text-lg leading-relaxed">
              Backed by{" "}
              <span className="font-semibold text-accent">
                12+ professional certifications including AWS Solutions Architect and Databricks Data Engineering
              </span>
              , I empower teams to adopt cloud-native, high-performance architectures that drive digital
              transformation across the insurance industry.
            </p>
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
