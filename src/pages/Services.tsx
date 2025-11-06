import { Film, Palette, Monitor, Box, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Video Editing Services",
      description: "Professional video editing for commercials, social media content, documentaries, and corporate videos. Bringing your vision to life with seamless cuts, color grading, and compelling storytelling.",
      features: ["Commercial Editing", "Social Media Content", "Documentary Production", "Color Grading"],
    },
    {
      icon: Palette,
      title: "Graphic Design Services",
      description: "Creating stunning visual identities, logos, branding materials, and marketing collateral that capture attention and communicate your message effectively.",
      features: ["Brand Identity", "Logo Design", "Marketing Materials", "Print Design"],
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces for web and mobile applications. Focus on user experience, accessibility, and modern design principles.",
      features: ["Web Design", "Mobile Apps", "User Research", "Prototyping"],
    },
    {
      icon: Box,
      title: "3D Ad Creation",
      description: "Eye-catching 3D advertisements and product visualizations that stand out in the digital landscape. Perfect for social media campaigns and marketing materials.",
      features: ["3D Modeling", "Product Visualization", "Animated Ads", "Social Media Content"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 text-primary">SERVICES</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg inline-block group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                </div>

                <h3 className="text-3xl font-bebas text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group/btn w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 border border-accent/50 rounded-lg p-12 text-center animate-fade-in">
          <h2 className="text-4xl font-bebas text-primary mb-4">READY TO START YOUR PROJECT?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch to discuss your next project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
