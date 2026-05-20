import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 text-sm mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Now accepting new clients
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Build the Future <br className="hidden md:block" />
          <span className="opacity-80">with Innovate Solutions</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-85 leading-relaxed">
          We're a forward-thinking technology company dedicated to creating innovative solutions
          that transform businesses and empower growth in the digital age.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="secondary"
            size="lg"
            className="gap-2"
            onClick={() => scrollTo("#services")}
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => scrollTo("#contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
