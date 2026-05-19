import { Card, CardContent } from "./ui/card";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the global leader in transformative technology solutions, shaping the future of business operations worldwide.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation, integrity, collaboration, and customer-centricity guide every decision we make and solution we deliver.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Company</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Founded in 2015, Innovate Solutions Inc. has been at the forefront of technological
            innovation, helping businesses navigate the complexities of digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="text-center hover:shadow-md transition-shadow duration-300 group"
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
