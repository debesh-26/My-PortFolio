import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <div className="mb-6">
            <span className="inline-block text-primary font-medium text-lg mb-2">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">
                Software Developer
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with 1+ years of expertise in modern web technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 rounded-lg-custom glow transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg-custom transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com/debesh-26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/debesh-mohapatra-650070205/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:dmohapatra291@gmail.com"
              className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;