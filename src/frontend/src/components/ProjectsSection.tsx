import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts, KPI cards, and live data streams. Built with a focus on performance and clarity.",
    stack: ["React", "Chart.js", "CSS Grid", "TypeScript"],
    image: "/assets/generated/project-mockup-1.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "ShopEase E-Commerce",
    description:
      "Full-featured online store with product filtering, cart management, wishlist, and a smooth multi-step checkout UI experience.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    image: "/assets/generated/project-mockup-2.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-converting SaaS product landing page with scroll-triggered animations, pricing tables, testimonials, and CTA optimization.",
    stack: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "/assets/generated/project-mockup-3.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Interface",
    description:
      "AI-powered chat application UI integrating with language model APIs. Features streaming responses, code highlighting, and conversation history.",
    stack: ["React", "TypeScript", "CSS Modules"],
    image: "/assets/generated/project-mockup-4.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth scrolling, dark mode, and animated section reveals.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/generated/project-mockup-5.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TaskFlow App",
    description:
      "Productivity task manager with drag-and-drop board, priority labels, dark mode, and real-time progress tracking across projects.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/assets/generated/project-mockup-6.dim_800x500.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="section-reveal group glass-card rounded-2xl overflow-hidden border border-border card-hover"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary/90 text-primary-foreground text-xs font-medium">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary border border-primary/20 text-xs font-mono"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-border hover:bg-primary/10 hover:border-primary/40 hover:text-primary text-sm transition-all"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Live Demo
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-border hover:bg-muted/50 text-sm transition-all"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-3.5 h-3.5 mr-1.5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg accents */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium">
            Projects
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A selection of projects showcasing my front-end skills, from
            interactive dashboards to AI-powered interfaces.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            More projects available on request
          </p>
          <Button
            variant="outline"
            className="border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
