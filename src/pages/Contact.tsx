import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 text-primary">GET IN TOUCH</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl font-bebas text-primary mb-6">CONTACT INFORMATION</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always excited to discuss new projects and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:sumitsinghkanyal7303@gmail.com"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg text-primary mb-1">EMAIL</h3>
                  <p className="text-sm text-muted-foreground">sumitsinghkanyal7303@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:7303997548"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg text-primary mb-1">PHONE</h3>
                  <p className="text-sm text-muted-foreground">+91 7303997548</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sumit-singh-kanyal-aaa484381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg text-primary mb-1">LINKEDIN</h3>
                  <p className="text-sm text-muted-foreground">Connect with me on LinkedIn</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium mb-2 text-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium mb-2 text-foreground">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
