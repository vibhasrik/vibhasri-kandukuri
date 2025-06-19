
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-margin section-padding bg-white/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-coral mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <Card className="bg-white/80 border-2 border-teal/20 shadow-lg max-w-2xl mx-auto">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-medium text-charcoal">
              Ready to collaborate?
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:vibhasrik@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-coral/10 hover:bg-coral/20 rounded-lg transition-all duration-300 group"
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
                className="flex items-center justify-center gap-3 p-3 bg-teal/10 hover:bg-teal/20 rounded-lg transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                <span className="text-charcoal">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/vibhasrik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 bg-plum/10 hover:bg-plum/20 rounded-lg transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-plum group-hover:scale-110 transition-transform" />
                <span className="text-charcoal">GitHub</span>
              </a>
            </div>

            <div className="text-center pt-6 border-t border-muted">
              <Button 
                onClick={scrollToTop}
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground">
            © 2024 Vibhasri Kandukuri. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
