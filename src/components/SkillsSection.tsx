
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  "Programming Languages": [
    "Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "R", "Go"
  ],
  "Tools & Frameworks": [
    "React", "Node.js", "TensorFlow", "PyTorch", "Docker", "AWS", "PostgreSQL", 
    "MongoDB", "Git", "Kubernetes", "FastAPI", "Express.js"
  ],
  "Machine Learning & Data": [
    "Deep Learning", "Computer Vision", "NLP", "Time Series Analysis", 
    "Statistical Modeling", "Data Visualization", "MLOps", "Feature Engineering"
  ],
  "Soft Skills": [
    "Technical Leadership", "Research & Development", "Cross-functional Collaboration", 
    "Mentoring", "Problem Solving", "Public Speaking", "Project Management"
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-margin section-padding bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">Skills & Expertise</h2>
          <div className="h-1 w-16 bg-coral mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of computer science and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <Card key={index} className="bg-white/80 border-2 border-transparent hover:border-teal/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium text-charcoal flex items-center">
                  <div className="w-1 h-6 bg-coral mr-3"></div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-cream/80 text-charcoal hover:bg-teal/20 hover:text-teal transition-colors border border-muted"
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
    </section>
  );
};

export default SkillsSection;
