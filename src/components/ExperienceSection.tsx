
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Machine Learning Research Assistant",
    company: "Purdue University",
    location: "West Lafayette, IN",
    date: "Aug 2024 - Present",
    type: "Research",
    highlights: [
      "Developed novel neural network architectures for time series forecasting, improving accuracy by 25%",
      "Published research on sustainable energy prediction models in IEEE conference proceedings",
      "Mentored 3 undergraduate students in machine learning fundamentals and research methodologies"
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "TechCorp Solutions",
    location: "Chicago, IL",
    date: "May 2024 - Aug 2024",
    type: "Software Engineering",
    highlights: [
      "Built full-stack web applications serving 10,000+ users using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 60% and improving code quality",
      "Collaborated with cross-functional teams to deliver 5 major features ahead of schedule"
    ]
  },
  {
    role: "Data Science Intern",
    company: "Analytics Plus",
    location: "Indianapolis, IN",
    date: "Jan 2024 - Apr 2024",
    type: "Data Science",
    highlights: [
      "Analyzed large datasets (1M+ records) to extract actionable business insights using Python and SQL",
      "Created interactive dashboards with Tableau that influenced strategic decisions for C-suite executives",
      "Optimized data processing pipelines, reducing computation time from hours to minutes"
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
