
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Team Lead & Software Engineering Researcher",
    company: "AgRPA – Purdue University",
    location: "West Lafayette, IN",
    date: "Aug 2024 – May 2025",
    type: "Research",
    highlights: [
      "Optimized drone mapping and targeted fertilizer application, reducing resource usage by 30–70%",
      "Generated flight waypoints from shapefiles using Python + QGroundControl",
      "Acted as Team Lead, coordinating across multiple sub-teams"
    ]
  },
  {
    role: "Data Science Intern",
    company: "Vizzhy",
    location: "Remote",
    date: "May 2024 – Aug 2024",
    type: "Data Science",
    highlights: [
      "Analyzed patient data with Python (Pandas, NumPy)",
      "Visualized correlations between diabetes and other health factors for preventative care plans"
    ]
  },
  {
    role: "ML & Data Science Researcher",
    company: "Caterpillar – Purdue University",
    location: "West Lafayette, IN",
    date: "Aug 2023 – May 2024",
    type: "Research",
    highlights: [
      "Developed a Flutter app for EV fleet battery tracking + charger scheduling",
      "Predicted battery SoC using machine learning",
      "Integrated frontend and backend analytics in Dart/Flutter"
    ]
  },
  {
    role: "Project Manager & Web Developer Intern",
    company: "Hampshire Academia",
    location: "Remote",
    date: "Jun 2022 – Nov 2022",
    type: "Software Engineering",
    highlights: [
      "Led agile team of 5 interns to build responsive web apps (HTML5, CSS3)",
      "Served as Scrum Master and stakeholder liaison"
    ]
  }
];

const ExperienceSection = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Software Engineering":
        return "bg-gradient-to-r from-coral/20 to-coral/30 text-coral border-0";
      case "Research":
        return "bg-gradient-to-r from-teal/20 to-teal/30 text-teal border-0";
      case "Data Science":
        return "bg-gradient-to-r from-plum/20 to-plum/30 text-plum border-0";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="section-margin section-padding bg-white/20 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="gradient-blob w-96 h-96 bg-teal/10 top-10 -left-32 animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Experience</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-coral to-plum mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Professional experience across software engineering, research, and data science.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card relative border-l-4 border-l-coral hover:shadow-glow transition-all duration-300 hover:scale-[1.01]">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <CardTitle className="text-xl font-medium text-charcoal">
                    {exp.role}
                  </CardTitle>
                  <Badge className={getTypeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  <span className="font-medium text-plum">{exp.company}</span> • {exp.location}
                </CardDescription>
                <p className="text-sm text-muted-foreground font-mono bg-white/50 px-2 py-1 rounded-full inline-block w-fit">{exp.date}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal to-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
