import { Code, Rocket, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and exceptional user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Leading teams and mentoring developers to achieve outstanding results"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-section bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over decades of experience in software development, I've helped countless 
              organizations transform their digital presence and achieve their technology goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">
                Passionate about building exceptional software
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey began in the early days of web development, and I've continuously 
                evolved with the industry. From backend architectures to modern frontend 
                frameworks, I bring comprehensive expertise to every project.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in writing code that not only works but tells a story. Every line 
                should be purposeful, readable, and maintainable for the next developer who 
                encounters it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="card-glass p-6 rounded-lg-custom hover:shadow-glow transition-all duration-300 group scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <highlight.icon size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block card-glass px-8 py-4 rounded-lg-custom">
              <p className="text-2xl font-bold gradient-text">1+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;