import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";

export default function App() {
  const { theme, toggle } = useTheme();

  // Apply dark class by default on mount
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("light") && !root.classList.contains("dark")) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
            color: "oklch(var(--foreground))",
          },
        }}
      />
    </div>
  );
}
