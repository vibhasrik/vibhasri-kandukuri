
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Campus Navigation System",
    date: "Fall 2024",
    description: "ML-powered indoor navigation system for Purdue campus using computer vision and sensor fusion. Reduced navigation time by 40% for students with disabilities.",
    tech: ["Python", "TensorFlow", "React Native", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Financial Portfolio Optimizer",
    date: "Summer 2024",
    description: "Algorithmic trading system using reinforcement learning to optimize portfolio allocation. Achieved 15% better performance than traditional models.",
    tech: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Sustainable Energy Predictor",
    date: "Spring 2024",
    description: "Time series forecasting model for renewable energy output prediction. Deployed at local energy cooperative serving 500+ households.",
    tech: ["Python", "Scikit-learn", "Flask", "AWS", "Redis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Code Collaboration Platform",
    date: "Winter 2024",
    description: "Real-time collaborative coding environment with integrated version control and peer programming features for computer science education.",
    tech: ["TypeScript", "React", "Socket.io", "Express", "Git"],
    github: "#",
    demo: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-margin section-padding bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">Featured Projects</h2>
          <div className="h-1 w-16 bg-coral mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in machine learning, systems design, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-transparent hover:border-teal/20"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-medium text-charcoal group-hover:text-coral transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">{project.date}</span>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-teal/10 text-teal hover:bg-teal/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal hover:text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
