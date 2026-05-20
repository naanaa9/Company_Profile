import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    type: "Address",
    value: "123 Innovation Drive, Tech City, TC 12345",
  },
  {
    icon: Phone,
    type: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    type: "Email",
    value: "hello@innovatesolutions.com",
  },
  {
    icon: Clock,
    type: "Business Hours",
    value: "Monday – Friday: 9:00 AM – 6:00 PM",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Ready to transform your business with innovative technology solutions? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, type, value }) => (
                <div key={type} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{type}</p>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                  <h3 className="font-semibold text-lg">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. We'll get back to you within 1 business day.
                  </p>
                  <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-semibold text-lg mb-2">Send Us a Message</h3>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={loading}>
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
