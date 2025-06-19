
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Vibhasri Kandukuri
          </h1>
          <div className="h-1 w-24 bg-coral mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
            Computer Science @ Purdue | ML & Systems | Building Tech for Good
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate Computer Science student at Purdue University with a focus on Machine Learning 
            and Systems. I build innovative solutions that make a positive impact on society through 
            thoughtful engineering and data-driven insights.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg font-medium"
          >
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-3 text-lg font-medium"
          >
            Contact Me
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
