import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TYPED_STRINGS = [
  "Front-End Developer",
  "React Specialist",
  "AI Tools Expert",
  "Freelance Ready",
];

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPED_STRINGS[typedIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTypedIndex((i) => (i + 1) % TYPED_STRINGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typedIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulse: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const opacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.72 0.22 215 / ${opacity})`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `oklch(0.72 0.22 215 / ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Availability badge */}
          <div className="inline-flex mb-6 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Open to Freelance & Full-Time Roles
            </Badge>
          </div>

          {/* Name */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-none mb-4 animate-fade-up">
            <span className="block text-foreground">M.</span>
            <span className="block gradient-text">ISMAIL</span>
          </h1>

          {/* Typewriter */}
          <div className="h-12 flex items-center justify-center lg:justify-start mb-4 animate-fade-up-delay-1">
            <span className="font-display text-xl sm:text-2xl font-semibold text-primary">
              {typedText}
              <span className="inline-block w-0.5 h-6 ml-0.5 bg-primary animate-pulse" />
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-up-delay-2">
            Expert in HTML, CSS, JavaScript, React, and all essential front-end
            technologies. Leveraging AI tools to build{" "}
            <span className="text-foreground font-medium">
              innovative, future-ready
            </span>{" "}
            digital experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up-delay-3">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              data-ocid="hero.primary_button"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              See My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              data-ocid="hero.secondary_button"
              className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 font-semibold px-8 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 justify-center lg:justify-start mt-12 animate-fade-up-delay-3">
            {[
              { value: "6+", label: "Projects Built" },
              { value: "9+", label: "AI Tools Used" },
              { value: "100%", label: "Client Focused" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-xl animate-glow-pulse" />
            <div className="absolute -inset-2 rounded-full border border-primary/20" />

            {/* Circle frame — no overflow-hidden so overlay text is not clipped */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/30 shadow-glow">
              {/* Photo — clipped to circle independently */}
              <img
                src="/assets/generated/profile-placeholder.dim_400x400.png"
                alt="M. ISMAIL"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />

              {/* Dark gradient overlay — bottom-half fade for text legibility */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.80) 100%)",
                }}
              />

              {/* Name & title text — centered at bottom inside the circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-7 z-10 px-4">
                <span
                  className="block font-display font-extrabold text-sm sm:text-base tracking-widest leading-tight text-center"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                  }}
                >
                  M. ISMAIL
                </span>
                <span
                  className="block font-body text-xs sm:text-sm font-semibold tracking-wide mt-0.5 text-center"
                  style={{
                    color: "oklch(0.72 0.22 215)",
                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                  }}
                >
                  Front-End Developer
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-card border border-primary/30 rounded-2xl px-3 py-2 shadow-card flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-foreground">
                Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("about")}
        data-ocid="hero.button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
