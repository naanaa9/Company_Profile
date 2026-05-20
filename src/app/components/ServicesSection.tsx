import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code2, Cloud, TrendingUp, HeadphonesIcon, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business requirements and scale with your growth.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Comprehensive cloud services to modernize your infrastructure and improve operational efficiency.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security"],
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "Strategic guidance and implementation to help your business leverage technology for competitive advantage.",
    features: ["Process Automation", "Data Analytics", "AI & Machine Learning", "Digital Strategy"],
  },
  {
    icon: HeadphonesIcon,
    title: "Consulting & Support",
    description:
      "Expert guidance and ongoing support to ensure your technology investments deliver maximum value.",
    features: ["Technical Consulting", "24/7 Support", "Training & Workshops", "Performance Optimization"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            We offer a comprehensive range of technology services to help your business thrive
            in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, features }) => (
            <Card
              key={title}
              className="h-full hover:shadow-md transition-shadow duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{description}</p>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
