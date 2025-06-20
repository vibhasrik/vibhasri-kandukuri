
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TODO: Add functionality for View Resume button
  const handleViewResume = () => {
    // Add your resume link or PDF download logic here
    console.log("View Resume clicked - add your resume functionality here");
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate transform values based on scroll position
  const nameTransform = Math.min(scrollY * 0.8, 300); // Move name to the right
  const taglineTransform = Math.min(scrollY * 0.6, 250); // Move tagline to the left
  const barOpacity = Math.max(1 - scrollY / 200, 0); // Fade out the bar
  const descriptionTransform = Math.min(scrollY * 0.7, 275); // Move description to the right
  const buttonsTransform = Math.min(scrollY * 0.5, 225); // Move buttons to the left

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Enhanced animated gradient blobs - many more distributed across the screen */}
      
      {/* Top section blobs */}
      <div className="gradient-blob w-80 h-80 bg-coral/20 top-16 left-8 animate-blob"></div>
      <div className="gradient-blob w-64 h-64 bg-teal/15 top-32 right-12 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="gradient-blob w-52 h-52 bg-coral/12 top-8 left-1/4 animate-blob" style={{ animationDelay: '9s' }}></div>
      <div className="gradient-blob w-36 h-36 bg-teal/18 top-4 left-1/3 animate-blob" style={{ animationDelay: '10s' }}></div>
      <div className="gradient-blob w-44 h-44 bg-plum/14 top-20 left-1/2 animate-blob" style={{ animationDelay: '11s' }}></div>
      <div className="gradient-blob w-68 h-68 bg-coral/16 top-12 right-1/4 animate-blob" style={{ animationDelay: '15s' }}></div>
      <div className="gradient-blob w-40 h-40 bg-plum/12 top-24 right-1/3 animate-blob" style={{ animationDelay: '16s' }}></div>

      {/* Middle section blobs */}
      <div className="gradient-blob w-48 h-48 bg-coral/15 top-1/3 right-1/3 animate-blob" style={{ animationDelay: '1s' }}></div>
      <div className="gradient-blob w-72 h-72 bg-teal/12 top-1/2 left-16 animate-blob" style={{ animationDelay: '5s' }}></div>
      <div className="gradient-blob w-56 h-56 bg-plum/15 top-2/3 right-24 animate-blob" style={{ animationDelay: '3s' }}></div>
      <div className="gradient-blob w-88 h-88 bg-teal/8 top-1/4 left-1/3 animate-blob" style={{ animationDelay: '7s' }}></div>
      <div className="gradient-blob w-60 h-60 bg-coral/14 top-1/2 right-1/4 animate-blob" style={{ animationDelay: '17s' }}></div>
      <div className="gradient-blob w-76 h-76 bg-plum/11 top-2/5 left-2/3 animate-blob" style={{ animationDelay: '18s' }}></div>

      {/* Bottom section blobs */}
      <div className="gradient-blob w-96 h-96 bg-plum/10 bottom-24 left-1/4 animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="gradient-blob w-32 h-32 bg-plum/20 bottom-1/3 right-8 animate-blob" style={{ animationDelay: '8s' }}></div>
      <div className="gradient-blob w-60 h-60 bg-coral/16 bottom-8 right-1/4 animate-blob" style={{ animationDelay: '12s' }}></div>
      <div className="gradient-blob w-28 h-28 bg-teal/22 bottom-4 right-1/3 animate-blob" style={{ animationDelay: '13s' }}></div>
      <div className="gradient-blob w-48 h-48 bg-plum/12 bottom-20 right-1/2 animate-blob" style={{ animationDelay: '14s' }}></div>
      <div className="gradient-blob w-84 h-84 bg-teal/10 bottom-16 left-1/3 animate-blob" style={{ animationDelay: '19s' }}></div>
      <div className="gradient-blob w-52 h-52 bg-coral/13 bottom-32 left-1/2 animate-blob" style={{ animationDelay: '20s' }}></div>

      {/* Additional scattered blobs for more coverage */}
      <div className="gradient-blob w-40 h-40 bg-coral/10 bottom-16 right-1/4 animate-blob" style={{ animationDelay: '6s' }}></div>
      <div className="gradient-blob w-64 h-64 bg-teal/14 top-3/4 left-8 animate-blob" style={{ animationDelay: '21s' }}></div>
      <div className="gradient-blob w-36 h-36 bg-plum/16 bottom-2/3 right-16 animate-blob" style={{ animationDelay: '22s' }}></div>
      <div className="gradient-blob w-72 h-72 bg-coral/9 top-1/6 right-8 animate-blob" style={{ animationDelay: '23s' }}></div>
      <div className="gradient-blob w-44 h-44 bg-teal/17 bottom-1/2 left-4 animate-blob" style={{ animationDelay: '24s' }}></div>
      <div className="gradient-blob w-56 h-56 bg-plum/13 top-5/6 right-1/6 animate-blob" style={{ animationDelay: '25s' }}></div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6 text-charcoal transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${nameTransform}px)` }}
          >
            Vibhasri Kandukuri
          </h1>
          <div 
            className="h-1 w-24 bg-gradient-to-r from-coral to-plum mx-auto mb-8 rounded-full transition-opacity duration-300"
            style={{ opacity: barOpacity }}
          ></div>
          <p 
            className="text-xl md:text-2xl text-plum font-light mb-6 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${taglineTransform}px)` }}
          >
            Computer Science @ Purdue | ML & SWE | Building Tech for Good
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto mb-12 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${descriptionTransform}px)` }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate Computer Science student at Purdue University with a focus on Machine Learning 
            and Systems. I build innovative solutions that make a positive impact on society through 
            thoughtful engineering and data-driven insights.
          </p>
        </div>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${buttonsTransform}px)` }}
        >
          <Button 
            size="lg" 
            onClick={handleViewResume}
            className="sparkle-btn bg-gradient-to-r from-coral to-coral/80 hover:from-coral/90 hover:to-coral/70 text-white px-8 py-3 text-lg font-medium rounded-2xl shadow-glow transition-all duration-300 hover:scale-105"
          >
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleContactMe}
            className="sparkle-btn glass-card border-2 border-teal/30 text-teal hover:bg-teal/10 hover:text-teal hover:scale-105 px-8 py-3 text-lg font-medium rounded-2xl transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Enhanced decorative floating elements */}
      <div className="floating-decoration top-32 right-16 w-4 h-4 bg-coral/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="floating-decoration bottom-32 left-16 w-3 h-3 bg-teal/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="floating-decoration top-1/2 right-8 w-2 h-2 bg-plum/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-decoration bottom-1/4 left-1/4 w-3 h-3 bg-coral/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

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
