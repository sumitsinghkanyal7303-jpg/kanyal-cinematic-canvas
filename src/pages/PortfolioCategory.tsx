import { useParams, Link } from "react-router-dom";
import { Film, Palette, Monitor, Box, Layers, ArrowLeft } from "lucide-react";

const categoryData: Record<string, { icon: React.ElementType; title: string; count: string; description: string }> = {
  "video-editing": {
    icon: Film,
    title: "Video Editing",
    count: "25+ Projects",
    description: "Commercial videos, documentaries, and social media content",
  },
  "motion-graphics": {
    icon: Layers,
    title: "Motion Graphics",
    count: "30+ Projects",
    description: "Animated logos, explainer videos, and visual effects",
  },
  "graphics-branding": {
    icon: Palette,
    title: "Graphics & Branding",
    count: "40+ Projects",
    description: "Brand identities, logos, and marketing materials",
  },
  "ui-ux": {
    icon: Monitor,
    title: "UI/UX Work",
    count: "15+ Projects",
    description: "Web and mobile app designs with user-centric approach",
  },
  "3d-ads": {
    icon: Box,
    title: "3D Ads",
    count: "20+ Projects",
    description: "Eye-catching 3D advertisements and product visualizations",
  },
};

const PortfolioCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bebas text-primary mb-4">Category Not Found</h1>
        <Link to="/portfolio" className="text-accent hover:underline">← Back to Portfolio</Link>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="animate-fade-in mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bebas text-primary">{category.title}</h1>
              <p className="text-accent font-medium">{category.count}</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
        </div>

        <div className="bg-card border-2 border-accent/50 rounded-lg p-16 text-center animate-fade-in">
          <h2 className="text-4xl font-bebas text-primary mb-4">PROJECTS COMING SOON</h2>
          <p className="text-muted-foreground">
            Detailed case studies and project showcases for {category.title} will be added here soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCategory;
