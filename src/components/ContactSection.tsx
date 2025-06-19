
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-margin section-padding relative">
      {/* Background decoration */}
      <div className="gradient-blob w-80 h-80 bg-teal/10 top-10 left-1/4 animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-coral to-teal mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <Card className="glass-card shadow-glow max-w-2xl mx-auto hover:scale-[1.01] transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-serif font-medium text-charcoal">
              Ready to collaborate?
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:vibhasrik@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-coral/10 to-coral/20 hover:from-coral/20 hover:to-coral/30 rounded-2xl transition-all duration-300 group hover:scale-105"
              >
                <Mail className="w-5 h-5 text-coral group-hover:scale-110 transition-transform" />
                <span className="text-charcoal font-medium">vibhasrik@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com/in/vibhasrik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-teal/10 to-teal/20 hover:from-teal/20 hover:to-teal/30 rounded-2xl transition-all duration-300 group hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                <span className="text-charcoal">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/vibhasrik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-plum/10 to-plum/20 hover:from-plum/20 hover:to-plum/30 rounded-2xl transition-all duration-300 group hover:scale-105"
              >
                <Github className="w-5 h-5 text-plum group-hover:scale-110 transition-transform" />
                <span className="text-charcoal">GitHub</span>
              </a>
            </div>

            <div className="text-center pt-6 border-t border-white/30">
              <Button 
                onClick={scrollToTop}
                variant="outline"
                className="sparkle-btn glass-card border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:text-charcoal hover:scale-105 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 pt-8 border-t border-white/30">
          <p className="text-sm text-muted-foreground">
            © 2024 Vibhasri Kandukuri. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
