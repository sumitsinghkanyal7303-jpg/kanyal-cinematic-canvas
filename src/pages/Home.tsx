import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import profileImage from "@/assets/profile-sumit.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-accent text-sm font-inter font-medium uppercase tracking-wider">
                  Portfolio
                </p>
                <h1 className="text-6xl md:text-8xl font-bebas leading-none text-primary">
                  VISUAL
                  <br />
                  STORYTELLER
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Video Editor • Graphic Designer • Motion Graphics Artist
              </p>
              
              <p className="text-base text-muted-foreground max-w-lg">
                Blending creativity and technical skill to craft memorable visual experiences that resonate with viewers.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter group">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-inter">
                    Contact Me
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bebas text-primary">4+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bebas text-primary">10</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-slide-in-left">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-3xl animate-glow" />
                <img
                  src={profileImage}
                  alt="Sumit Singh Kanyal"
                  className="relative rounded-lg shadow-2xl w-full h-auto border-2 border-accent/50"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-xl">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
