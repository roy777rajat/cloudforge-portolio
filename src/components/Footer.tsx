import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-2">
              Rajat Roy
            </h3>
            <p className="text-secondary-foreground/70">
              AWS Cloud Engineer & Data Transformation Expert
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right: Social */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rajat-roy-78698913/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="mailto:roy777rajat@gmail.com"
                className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-secondary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/70">
            © {new Date().getFullYear()} Rajat Roy. All rights reserved.
          </p>
          <p className="text-secondary-foreground/50 text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
