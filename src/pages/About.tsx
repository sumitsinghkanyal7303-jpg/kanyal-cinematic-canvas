import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const education = [
    { degree: "B.Com (Program)", institution: "University", year: "2018-2021" },
    { degree: "Diploma in 2D and 3D Animation", institution: "Animation Institute", year: "2021-2022" },
    { degree: "Digital Marketing Certification", institution: "Online Platform", year: "2022" },
  ];

  const experience = [
    { role: "Video Editor & Graphic Designer", duration: "1 year", description: "Creating compelling visual stories and brand identities" },
    { role: "Service Engineer", duration: "2 years", description: "Technical support and system maintenance" },
    { role: "Sales Executive", duration: "1 year", description: "Client relations and business development" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 text-primary">ABOUT ME</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A passionate visual storyteller and creative professional, I bring designs to life both in motion and static forms. 
            As a Video Editor and Graphic Designer, my goal is to blend technical skill with artistic vision to deliver 
            high-quality, memorable projects that resonate with viewers.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16 animate-slide-in-left">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bebas text-primary">EDUCATION</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <h3 className="text-xl font-bebas text-primary mb-2">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                <p className="text-sm text-accent">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="animate-slide-in-left">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bebas text-primary">WORK EXPERIENCE</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bebas text-primary">{exp.role}</h3>
                  <span className="text-sm text-accent font-medium">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
