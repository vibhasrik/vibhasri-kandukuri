import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { title } from "process";

const projects = [
  {
    title: "Shell Interpreter",
    date: "Mar 2025",
    description:
      "Built a full shell in C with support for subshell command evaluation, wildcard expansion, redirection, and piping.",
    tech: ["C", "Unix", "Systems Programming", "Process Management"],
    showGithub: false,
  },
  {
    title: "Simple C Compiler",
    date: "Nov 2024",
    description:
      "Wrote a custom C compiler that performs lexical analysis, parsing, and intermediate representation (IR) generation.",
    tech: ["C", "Compiler Design", "Lexical Analysis", "Parsing"],
    showGithub: false,
  },
  {
    title: "Personal Malloc in C",
    date: "Jan 2025",
    description:
      "Implemented a custom memory allocator using freelists and arenas, designed to mimic malloc/free behavior safely.",
    tech: ["C", "Memory Management", "Data Structures", "Systems"],
    showGithub: false,
  },
  {
    title: "Android SQLite Java Bookstore",
    date: "Apr 2023",
    description:
      "Built a mobile application using Android Studio and SQLite to manage inventory and transactions for a bookstore.",
    tech: ["Java", "Android Studio", "SQLite", "Mobile Development"],
    showGithub: true,
    github: "https://github.com/vibhasrik/The_Boring_Square_Bookstore",
  },
  {
    title: "Java Marketplace",
    date: "Nov 2023",
    description:
      "Simulated an e-commerce platform with a backend in Java, featuring user accounts, product listings, and cart logic.",
    tech: [
      "Java",
      "Backend Development",
      "E-commerce",
      "Object-Oriented Design",
    ],
    showGithub: true,
    github: "https://github.com/nathanxli/CS180-Project-5",
  },
  {
    title: "Solar Energy Forecasting",
    date: "Apr 2025",
    description:
      "Developed a machine learning model to predict solar energy output based on weather data.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Solar Energy"],
    showGithub: true,
    github: "https://github.com/vibhasrik/solar_energy_forcasting",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-margin section-padding relative">
      {/* Background decoration */}
      <div
        className="gradient-blob w-80 h-80 bg-plum/10 -top-20 -right-20 animate-blob"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-coral to-teal mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in systems
            programming, compiler design, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-medium text-charcoal group-hover:text-coral transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-plum/70 font-mono bg-white/50 px-2 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-teal/20 to-coral/20 text-charcoal border-0 hover:from-teal/30 hover:to-coral/30 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.showGithub && (
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:text-charcoal hover:scale-105 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0 0L1200 0 1200 60.52L0 120z"
            fill="rgba(246, 139, 125, 0.05)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSection;
