import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  GitBranch,
  Cloud,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React","JavaScript", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "Express", "GraphQL"],
      color: "text-green-400"
    },
    // {
    //   title: "UI/UX Design",
    //   icon: Palette, 
    //   skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"],
    //   color: "text-purple-400"
    // },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["REST APIs", "GraphQL", "WebSocket", "PWA", "SEO", "Performance"],
      color: "text-orange-400"
    },
    // {
    //   title: "Mobile Development",
    //   icon: Smartphone,
    //   skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    //   color: "text-pink-400"
    // },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Git", "Docker", "CI/CD", "Webpack", "Vite"],
      color: "text-cyan-400"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS", "Vercel", "Netlify","Firebase", "Heroku"],
      color: "text-indigo-400"
    },
    {
      title: "Security & Best Practices",
      icon: Shield,
      skills: ["Authentication", "HTTPS", "Code Reviews", "Testing"],
      color: "text-red-400"
    }
  ];

  return (
    <section id="skills" className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the full development stack, from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="card-glass p-6 rounded-lg-custom hover:shadow-glow transition-all duration-300 group scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <category.icon size={32} className={`${category.color} mr-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded hover:bg-muted/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;