import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    id: 1,
    title: "TechCorp Website Redesign",
    category: "Web Design",
    description:
      "Complete website redesign for a leading technology company, focusing on modern UI/UX and improved conversion rates.",
    image:
      "https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NDIwMTQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Responsive", "React"],
  },
  {
    id: 2,
    title: "FinanceHub Mobile App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile application for personal finance management with intuitive dashboard and analytics.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MTIzMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile", "Flutter", "Finance"],
  },
  {
    id: 3,
    title: "EcoLife Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity development including logo design, color palette, and brand guidelines for sustainable lifestyle brand.",
    image:
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQxMzYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Branding", "Logo", "Design"],
  },
  {
    id: 4,
    title: "ShopSmart E-commerce Platform",
    category: "E-commerce",
    description:
      "Full-featured e-commerce platform with advanced product filtering, payment integration, and inventory management.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjQxNDA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["E-commerce", "Full-stack", "Payment"],
  },
  {
    id: 5,
    title: "DataViz Analytics Dashboard",
    category: "Web Application",
    description:
      "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY0MTUzODg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Analytics", "Dashboard", "Charts"],
  },
  {
    id: 6,
    title: "Global Enterprises Portal",
    category: "Corporate Website",
    description:
      "Enterprise-level corporate website with multi-language support, CMS integration, and advanced SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDEzNTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Corporate", "CMS", "SEO"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses achieve their digital
            goals through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                  {project.category}
                </p>
                <h3 className="font-semibold text-base mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
