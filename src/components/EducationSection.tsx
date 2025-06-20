
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-margin section-padding bg-white/20 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="gradient-blob w-64 h-64 bg-plum/15 top-20 -left-16 animate-blob" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-coral to-teal mx-auto mb-6 rounded-full"></div>
        </div>

        <Card className="glass-card shadow-glow hover:scale-[1.01] transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-coral/20 to-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-8 h-8 text-coral"  />
            </div>
            <CardTitle className="text-2xl font-serif font-medium text-charcoal mb-2">
              Purdue University
            </CardTitle>
            <CardDescription className="text-lg text-plum">
              West Lafayette, Indiana
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-medium text-charcoal mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground font-mono text-sm bg-white/50 px-3 py-1 rounded-full inline-block">
                August 2023 – December 2026
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-gradient-to-r from-teal to-teal/80 text-white px-4 py-2 text-base border-0 shadow-md">
                Concentration: Machine Learning
              </Badge>
              <Badge className="bg-gradient-to-r from-plum to-plum/80 text-white px-4 py-2 text-base border-0 shadow-md">
                Minor: Finance
              </Badge>
            </div>

            <div className="pt-4 border-t border-white/30">
              <h4 className="font-medium text-charcoal mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Data Structures & Algorithms",
                  "Machine Learning",
                  "Database Systems",
                  "Software Engineering",
                  "Computer Systems",
                  "Statistical Methods",
                  "Linear Algebra",
                  "Discrete Mathematics"
                ].map((course, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="bg-white/30 border-white/50 text-charcoal hover:bg-white/50 hover:scale-105 transition-all duration-200"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
