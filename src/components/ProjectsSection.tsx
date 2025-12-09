import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EAMCET College Predictor",
      year: "2025",
      description:
        "A prediction tool for eligible colleges based on rank, category, and preferences. Converted Excel → JSON, implemented buffer logic, dynamic queries, and CORS handling.",
      tech: ["Node.js", "Express", "MongoDB", "HTML/CSS/JS"],
      liveUrl: "https://eamcet-college-predictor-chi.vercel.app/",
      githubUrl: "https://github.com/Saikiran-Sugurthi/Eamcet-College-Predictor",
    },
    {
      title: "InfiniTalk — Real-Time Chat App",
      year: "2025",
      description:
        "Full-stack real-time chat app using WebSockets (Socket.io). Features JWT authentication + protected routes with a responsive UI.",
      tech: ["MERN", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://infini-talk.vercel.app/",
      githubUrl: "https://github.com/Saikiran-Sugurthi/InfiniTalk",
    },
    {
      title: "CodeJunction",
      year: "2024",
      description:
        "Learning platform for C & Web Dev fundamentals. Designed mobile-friendly interfaces with structured learning modules.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://github.com/Saikiran-Sugurthi/CodeJunction.dev",
      githubUrl: "https://code-junction-dev.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          A selection of my recent work and side projects
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-lavender flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button variant="lavender" size="sm" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
