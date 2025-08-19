import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/MusicApplication.png";
import project2 from "@/assets/Parking.png";
import project3 from "@/assets/Social.png";
import project4 from "@/assets/Urlshortner.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Music Web App",
      description:
        "A web app that allows users to create and manage their music playlists, featuring a sleek UI and real-time updates.",
      image: project1,
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      category: "Web App",
      demoLink: "https://studio.hallelujah.today/",
    },
    {
      id: 2,
      title: "Parking Management Application",
      description:
        "Web app for managing parking spaces, with features like entry, exit, Mapping of there own slots, lanes etc., and real-time availability, Team management and more.",
      image: project2,
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Web App",
      demoLink: "https://www.parking-slots.callvcal.com/",
    },
    {
      id: 3,
      title: "Social Media Application",
      description:
        "A modern social media platform with features like user profiles, posts, comments, and real-time notifications.",
      image: project3,
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Website",
      demoLink: "https://social-media-puce-eta.vercel.app/",
      githubLink: "https://github.com/debesh-26/SocialMedia",
    },
    {
      id: 4,
      title: "URL Shortener",
      description:
        "A simple URL shortener service that allows users to create short links for long URLs, with analytics and tracking features.",
      image: project4,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "Web App",
      demoLink: "https://url-shortner-nine-woad.vercel.app/",
      githubLink: "https://github.com/debesh-26/UrlShortner"
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Website"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-section bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of recent work demonstrating expertise across different
              technologies and domains
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter size={20} className="text-primary mt-1" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg-custom transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-primary text-primary-foreground glow"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card-glass rounded-lg-custom overflow-hidden hover:shadow-glow transition-all duration-300 group scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-dark"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </Button>
                      {project.githubLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() =>
                            window.open(project.githubLink, "_blank")
                          }
                        >
                          <Github size={16} className="mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg-custom"
              onClick={() =>window.open("https://github.com/debesh-26/", "_blank")}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
