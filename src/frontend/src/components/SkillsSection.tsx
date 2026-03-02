import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  SiCss3,
  SiFramer,
  SiGit,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface SkillItem {
  name: string;
  level: number;
  Icon?: React.ComponentType<{ className?: string }>;
  color: string;
}

const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML5", level: 98, Icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", level: 95, Icon: SiCss3, color: "text-blue-400" },
  {
    name: "JavaScript (ES6+)",
    level: 93,
    Icon: SiJavascript,
    color: "text-yellow-400",
  },
  { name: "React", level: 90, Icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", level: 82, Icon: SiTypescript, color: "text-blue-500" },
  {
    name: "Tailwind CSS",
    level: 92,
    Icon: SiTailwindcss,
    color: "text-cyan-300",
  },
  { name: "GSAP", level: 75, Icon: SiGreensock, color: "text-green-400" },
  { name: "Framer Motion", level: 80, Icon: SiFramer, color: "text-pink-400" },
  {
    name: "Responsive Design",
    level: 96,
    Icon: undefined,
    color: "text-primary",
  },
  { name: "Git / GitHub", level: 85, Icon: SiGit, color: "text-orange-400" },
];

const AI_TOOLS: Array<{ name: string; desc: string; color: string }> = [
  {
    name: "ChatGPT",
    desc: "Code generation & debugging",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    name: "DeepSeek",
    desc: "Deep code analysis & reasoning",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Gemini 3 Pro",
    desc: "Google's multimodal AI",
    color: "from-primary/20 to-accent/10",
  },
  {
    name: "Gemini 3.1 Pro",
    desc: "Advanced reasoning & code",
    color: "from-primary/20 to-cyan-500/10",
  },
  {
    name: "Claude (Free)",
    desc: "Anthropic's AI assistant",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    name: "Claude (Pro)",
    desc: "Extended context & projects",
    color: "from-amber-600/20 to-orange-600/10",
  },
  {
    name: "Google AI",
    desc: "AI Studio & Vertex AI",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    name: "Hygen AI",
    desc: "Code scaffold generation",
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    name: "Perplexity",
    desc: "AI-powered research & answers",
    color: "from-teal-500/20 to-cyan-500/10",
  },
];

function SkillBar({ skill, index }: { skill: SkillItem; index: number }) {
  const barRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={barRef}
      className="section-reveal"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skill.Icon && <skill.Icon className={`w-4 h-4 ${skill.color}`} />}
          <span className="text-sm font-medium text-foreground">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

function AiToolCard({
  tool,
  index,
}: { tool: (typeof AI_TOOLS)[0]; index: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={cardRef}
      className="section-reveal glass-card rounded-xl p-4 border border-border card-hover group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <SiOpenai className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="font-display font-semibold text-sm text-foreground">
            {tool.name}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{tool.desc}</p>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg accents */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium">
            Skills
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A blend of battle-tested front-end skills and cutting-edge AI
            tooling to build faster and smarter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Front-End Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                <SiReact className="w-5 h-5 text-cyan-400" />
                Front-End Skills
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-5">
              {FRONTEND_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                <SiOpenai className="w-5 h-5 text-primary" />
                Tools & AI Experience
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {AI_TOOLS.map((tool, i) => (
                <AiToolCard key={tool.name} tool={tool} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
