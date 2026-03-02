import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "M. ISMAIL delivered a beautifully crafted React dashboard that exceeded our expectations. The code was clean, well-documented, and the animations were absolutely stunning.",
    name: "Sarah K.",
    role: "Product Manager",
    company: "TechVentures Inc.",
    initials: "SK",
    color: "from-primary/20 to-accent/10",
  },
  {
    quote:
      "Working with M. ISMAIL on our e-commerce redesign was a great experience. He leveraged AI tools efficiently and delivered a pixel-perfect, highly performant storefront.",
    name: "James L.",
    role: "CTO",
    company: "ShopWave",
    initials: "JL",
    color: "from-accent/20 to-primary/10",
  },
  {
    quote:
      "Ismail built our SaaS landing page from scratch — responsive, fast, and conversion-focused. His attention to detail and design sense is rare to find in a developer.",
    name: "Priya M.",
    role: "Founder",
    company: "LaunchPad SaaS",
    initials: "PM",
    color: "from-violet-500/15 to-primary/10",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: (typeof TESTIMONIALS)[0]; index: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="section-reveal glass-card rounded-2xl p-6 border border-border card-hover group relative overflow-hidden"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
      />

      <div className="relative z-10">
        {/* Quote icon */}
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Quote className="w-5 h-5 text-primary" />
        </div>

        {/* Quote text */}
        <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
            {testimonial.initials}
          </div>
          <div>
            <p className="font-display font-semibold text-sm text-foreground">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const placeholderRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium">
            Testimonials
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real feedback from clients and collaborators about working with me.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Placeholder notice */}
        <div ref={placeholderRef} className="section-reveal text-center">
          <div className="inline-block glass-card rounded-2xl px-8 py-5 border border-dashed border-primary/30">
            <p className="text-sm text-muted-foreground">
              ⭐ More testimonials coming soon · Currently available for new
              projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
