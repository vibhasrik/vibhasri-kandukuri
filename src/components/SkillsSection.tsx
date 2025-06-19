
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  "Languages": [
    "Python (Pandas, NumPy)", "Java", "C", "R", "Bash", "Dart", "HTML/CSS", "SQLite", "x86-64 Assembly"
  ],
  "Tools": [
    "GitHub", "QGroundControl", "Jupyter", "LaTeX", "Notion", "Microsoft Suite"
  ],
  "Soft Skills": [
    "Agile development", "Cross-team collaboration", "Project leadership", "Communication"
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-margin section-padding relative">
      {/* Background decoration */}
      <div className="gradient-blob w-72 h-72 bg-coral/10 bottom-20 -right-20 animate-blob" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Skills & Expertise</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal to-plum mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of computer science and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300 hover:scale-[1.01]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium text-charcoal flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-coral to-teal mr-3 rounded-full"></div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/50 text-charcoal hover:bg-gradient-to-r hover:from-teal/20 hover:to-coral/20 hover:text-charcoal transition-all duration-200 border border-white/30 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120 892.25 114.72 1200 0z" fill="rgba(135, 110, 131, 0.05)"></path>
        </svg>
      </div>
    </section>
  );
};

export default SkillsSection;
