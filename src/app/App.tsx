import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StatsSection } from "./components/StatsSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TeamSection } from "./components/TeamSection";
import { ContactSection } from "./components/ContactSection";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="font-semibold">Innovate Solutions</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions since 2015.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-70">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {["About", "Services", "Portfolio", "Team", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(`#${item.toLowerCase()}`);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-70">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Innovate Solutions Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
