
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="gradient-blob w-72 h-72 bg-coral/20 top-20 -left-20 animate-blob"></div>
      <div className="gradient-blob w-96 h-96 bg-teal/15 top-40 -right-32 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="gradient-blob w-64 h-64 bg-plum/10 bottom-20 left-1/3 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6 text-charcoal">
            Vibhasri Kandukuri
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-coral to-plum mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-plum font-light mb-6">
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
            className="sparkle-btn bg-gradient-to-r from-coral to-coral/80 hover:from-coral/90 hover:to-coral/70 text-white px-8 py-3 text-lg font-medium rounded-2xl shadow-glow transition-all duration-300 hover:scale-105"
          >
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="sparkle-btn glass-card border-2 border-teal/30 text-teal hover:bg-teal/10 hover:text-teal hover:scale-105 px-8 py-3 text-lg font-medium rounded-2xl transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-plum/70" />
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="floating-decoration top-32 right-16 w-4 h-4 bg-coral/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="floating-decoration bottom-32 left-16 w-3 h-3 bg-teal/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill="rgba(147, 205, 206, 0.1)"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
