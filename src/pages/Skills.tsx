import { Film, Palette, Layers, Code, Sparkles, Box } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Video Editing",
      icon: Film,
      skills: [
        { name: "Adobe Premiere Pro", level: 90 },
        { name: "After Effects", level: 85 },
        { name: "DaVinci Resolve", level: 80 },
        { name: "Final Cut Pro", level: 75 },
      ],
    },
    {
      category: "Graphic Design",
      icon: Palette,
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Brand Identity", level: 80 },
        { name: "Typography", level: 85 },
      ],
    },
    {
      category: "Motion Graphics",
      icon: Layers,
      skills: [
        { name: "Animation", level: 85 },
        { name: "Motion Design", level: 80 },
        { name: "Visual Effects", level: 75 },
        { name: "Compositing", level: 80 },
      ],
    },
    {
      category: "UI/UX Design",
      icon: Code,
      skills: [
        { name: "Figma", level: 85 },
        { name: "User Interface", level: 80 },
        { name: "User Experience", level: 75 },
        { name: "Prototyping", level: 80 },
      ],
    },
    {
      category: "Creative Suite",
      icon: Sparkles,
      skills: [
        { name: "Color Grading", level: 85 },
        { name: "Sound Design", level: 70 },
        { name: "Storytelling", level: 90 },
        { name: "Creative Direction", level: 85 },
      ],
    },
    {
      category: "3D & Ads",
      icon: Box,
      skills: [
        { name: "3D Modeling", level: 75 },
        { name: "3D Ad Creation", level: 80 },
        { name: "Product Visualization", level: 75 },
        { name: "Rendering", level: 70 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 text-primary">MY SKILLS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of creative and technical abilities honed through years of experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bebas text-primary">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-inter text-foreground">{skill.name}</span>
                        <span className="text-sm font-inter text-accent">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
