
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Shell Interpreter",
    date: "Mar 2025",
    description: "Built a full shell in C with support for subshell command evaluation, wildcard expansion, redirection, and piping.",
    tech: ["C", "Unix", "Systems Programming", "Process Management"],
    github: "#",
    demo: "#"
  },
  {
    title: "Simple C Compiler",
    date: "Nov 2024",
    description: "Wrote a custom C compiler that performs lexical analysis, parsing, and intermediate representation (IR) generation.",
    tech: ["C", "Compiler Design", "Lexical Analysis", "Parsing"],
    github: "#",
    demo: "#"
  },
  {
    title: "Personal Malloc in C",
    date: "Jan 2025",
    description: "Implemented a custom memory allocator using freelists and arenas, designed to mimic malloc/free behavior safely.",
    tech: ["C", "Memory Management", "Data Structures", "Systems"],
    github: "#",
    demo: "#"
  },
  {
    title: "Android SQLite Java Bookstore",
    date: "Apr 2023",
    description: "Built a mobile application using Android Studio and SQLite to manage inventory and transactions for a bookstore.",
    tech: ["Java", "Android Studio", "SQLite", "Mobile Development"],
    github: "#",
    demo: "#"
  },
  {
    title: "Java Marketplace",
    date: "Nov 2023",
    description: "Simulated an e-commerce platform with a backend in Java, featuring user accounts, product listings, and cart logic.",
    tech: ["Java", "Backend Development", "E-commerce", "Object-Oriented Design"],
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
            A selection of projects showcasing my expertise in systems programming, compiler design, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
