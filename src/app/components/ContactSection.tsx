import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      type: "Address",
      value: "123 Innovation Drive, Tech City, TC 12345",
    },
    {
      type: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      type: "Email",
      value: "hello@innovatesolutions.com",
    },
    {
      type: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Ready to transform your business with innovative technology solutions? 
            We'd love to hear from you and discuss how we can help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium mb-1">{info.type}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6">Start Your Project Today</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking to modernize your existing systems, build a new application, 
                  or explore emerging technologies, our team is here to help you succeed.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Request a Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}