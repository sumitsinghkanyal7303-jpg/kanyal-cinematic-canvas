import { Film, Palette, Monitor, Box, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const slugs = ["video-editing", "motion-graphics", "graphics-branding", "ui-ux", "3d-ads"];
  const categories = [{
    icon: Film,
    title: "Video Editing",
    count: "25+ Projects",
    description: "Commercial videos, documentaries, and social media content"
  }, {
    icon: Layers,
    title: "Motion Graphics",
    count: "30+ Projects",
    description: "Animated logos, explainer videos, and visual effects"
  }, {
    icon: Palette,
    title: "Graphics & Branding",
    count: "40+ Projects",
    description: "Brand identities, logos, and marketing materials"
  }, {
    icon: Monitor,
    title: "UI/UX Work",
    count: "15+ Projects",
    description: "Web and mobile app designs with user-centric approach"
  }, {
    icon: Box,
    title: "3D Ads",
    count: "20+ Projects",
    description: "Eye-catching 3D advertisements and product visualizations"
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 text-primary">PORTFOLIO</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative work spanning video editing, motion graphics, design, and more
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
          const Icon = category.icon;
          return <button key={index} onClick={() => navigate(`/portfolio/${slugs[index]}`)} className="bg-card border-2 border-border p-8 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group cursor-pointer animate-fade-in text-left rounded-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg inline-block group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                </div>

                <h3 className="text-2xl font-bebas text-primary mb-2">{category.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{category.count}</p>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </button>;
        })}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-card border-2 border-accent/50 rounded-lg p-16 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bebas text-primary mb-4">PORTFOLIO SHOWCASE COMING SOON</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently curating a selection of my best work to showcase here. Check back soon to see detailed 
              project case studies, behind-the-scenes content, and examples of my creative process.
            </p>
            <div className="inline-block px-6 py-3 bg-accent/10 border border-accent rounded-lg">
              <p className="text-accent font-bebas text-lg">Projects will be added soon</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center animate-fade-in">
            <p className="text-4xl font-bebas text-accent mb-2">130+</p>
            <p className="text-sm text-muted-foreground">Total Projects</p>
          </div>
          <div className="text-center animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <p className="text-4xl font-bebas text-accent mb-2">50+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="text-4xl font-bebas text-accent mb-2">4+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <p className="text-4xl font-bebas text-accent mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Portfolio;