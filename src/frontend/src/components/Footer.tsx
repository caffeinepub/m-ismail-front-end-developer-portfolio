import { Code2, Heart } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg gradient-text">
                M. ISMAIL
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Front-End Developer expert in HTML, CSS, JavaScript, React, and AI
              tools. Building beautiful, performant digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:mannafabdul461@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  mannafabdul461@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground italic">
                LinkedIn — Coming Soon
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {year} M. ISMAIL. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border hover:border-primary/30 transition-all"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <button
              type="button"
              aria-label="LinkedIn Profile (Coming Soon)"
              disabled
              className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground border border-border opacity-50 cursor-not-allowed"
            >
              <SiLinkedin className="w-4 h-4" />
            </button>
          </div>

          {/* Caffeine attribution */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
