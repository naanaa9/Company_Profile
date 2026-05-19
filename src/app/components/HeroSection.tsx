import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-6">Innovate Solutions Inc.</h1>
        <p className="mb-8 max-w-2xl mx-auto opacity-90">
          We're a forward-thinking technology company dedicated to creating innovative solutions 
          that transform businesses and empower growth in the digital age.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}