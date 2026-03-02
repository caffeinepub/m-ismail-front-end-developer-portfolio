import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, Code2, Trophy, Zap } from "lucide-react";

const AI_TOOLS = [
  "ChatGPT",
  "DeepSeek",
  "Gemini 3 Pro",
  "Gemini 3.1 Pro",
  "Claude (Free)",
  "Claude (Pro)",
  "Google AI",
  "Hygen AI",
  "Perplexity",
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full-Stack Front-End",
    desc: "Deep mastery of HTML, CSS, JavaScript, React, TypeScript, and modern frameworks.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Dev",
    desc: "Active user of 9+ AI tools to accelerate development and boost code quality.",
  },
  {
    icon: Trophy,
    title: "Google Hackathon",
    desc: 'Participated in Google hackathon projects including "Gemini 3 Pro to Vibe Coding."',
  },
  {
    icon: Zap,
    title: "Freelance Ready",
    desc: "Delivering clean, responsive, and visually stunning websites for clients worldwide.",
  },
];

export function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden section-reveal"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium">
            About Me
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Crafting Experiences,{" "}
            <span className="gradient-text">Not Just Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={imageRef} className="section-reveal">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-card">
                <img
                  src="/assets/generated/profile-placeholder.dim_400x400.png"
                  alt="M. ISMAIL working on a project"
                  className="w-full aspect-square object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {/* Bottom overlay card */}
                <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                  <p className="text-sm text-foreground font-medium">
                    🏆 Google Hackathon Participant
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    "Gemini 3 Pro to Vibe Coding" — 2025
                  </p>
                </div>
              </div>

              {/* Floating skill chips */}
              <div className="absolute -top-4 -right-4 bg-card border border-primary/30 rounded-xl px-3 py-2 shadow-card">
                <span className="text-xs font-mono text-primary font-medium">
                  React + TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="section-reveal">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a passionate Front-End Developer with deep expertise across
              the full front-end stack — HTML, CSS, JavaScript, React, and
              modern frameworks. I actively leverage cutting-edge AI tools to
              build{" "}
              <span className="text-foreground font-medium">
                innovative, future-ready digital experiences
              </span>
              . I've participated in Google hackathon projects including{" "}
              <span className="text-primary font-medium">
                "Gemini 3 Pro to Vibe Coding,"
              </span>{" "}
              bringing creativity and technical precision to every challenge.
              Whether for freelance clients or full-time roles, I deliver clean,
              responsive, and visually stunning websites that make an impact.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass-card rounded-xl p-4 card-hover border border-border hover:border-primary/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-sm text-foreground">
                      {title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Tools */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                AI Tools I Use Daily
              </p>
              <div className="flex flex-wrap gap-2">
                {AI_TOOLS.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-muted hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 text-xs transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
