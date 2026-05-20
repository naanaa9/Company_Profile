import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1567849859756-79bf6a9d62f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjY0MjgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "With over 15 years of experience in technology leadership, Sarah drives our strategic vision and innovation initiatives.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTY2NDI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Michael leads our technical team with expertise in cloud architecture, AI, and scalable software development.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU2NTI5NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Emily ensures operational excellence and manages our client relationships with a focus on delivering exceptional results.",
    linkedin: "#",
    twitter: "#",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            The People
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Our experienced leadership team brings together diverse expertise and a shared passion
            for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-base mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
