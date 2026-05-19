import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and scale with your growth.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud services to modernize your infrastructure and improve operational efficiency.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security"],
    },
    {
      title: "Digital Transformation",
      description: "Strategic guidance and implementation to help your business leverage technology for competitive advantage.",
      features: ["Process Automation", "Data Analytics", "AI & Machine Learning", "Digital Strategy"],
    },
    {
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support to ensure your technology investments deliver maximum value.",
      features: ["Technical Consulting", "24/7 Support", "Training & Workshops", "Performance Optimization"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We offer a comprehensive range of technology services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
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