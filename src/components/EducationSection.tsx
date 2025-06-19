
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-margin section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">Education</h2>
          <div className="h-1 w-16 bg-coral mx-auto mb-6"></div>
        </div>

        <Card className="bg-white/80 border-2 border-teal/20 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-coral" />
            </div>
            <CardTitle className="text-2xl font-medium text-charcoal mb-2">
              Purdue University
            </CardTitle>
            <CardDescription className="text-lg">
              West Lafayette, Indiana
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-medium text-charcoal mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                August 2023 – December 2026
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-teal/10 text-teal px-4 py-2 text-base">
                Concentration: Machine Learning
              </Badge>
              <Badge className="bg-plum/10 text-plum px-4 py-2 text-base">
                Minor: Finance
              </Badge>
            </div>

            <div className="pt-4 border-t border-muted">
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
                    className="border-charcoal/20 text-charcoal hover:bg-charcoal/5"
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
