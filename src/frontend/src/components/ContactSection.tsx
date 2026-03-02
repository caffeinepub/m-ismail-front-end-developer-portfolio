import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactMessage } from "@/hooks/useQueries";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const { mutateAsync: submitMessage, isPending } = useSubmitContactMessage();

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to send message. Please try again or email me directly.",
      );
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg accents */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-xs font-medium">
            Contact
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together!</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Whether you have a project in mind or just want to connect — my
            inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div ref={infoRef} className="section-reveal lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:mannafabdul461@gmail.com"
                  className="flex items-start gap-4 glass-card rounded-xl p-4 border border-border hover:border-primary/40 transition-all group card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                      mannafabdul461@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 glass-card rounded-xl p-4 border border-border border-dashed opacity-70">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      LinkedIn
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Coming soon — verified account
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card rounded-xl p-5 border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to freelance projects, contract roles, and full-time
                positions. Average response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div ref={formRef} className="section-reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-2xl p-6 sm:p-8 border border-border"
            >
              <div className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={`bg-muted/50 border-border focus:border-primary/60 focus:ring-primary/20 transition-colors ${
                      errors.name
                        ? "border-destructive focus:border-destructive"
                        : ""
                    }`}
                    disabled={isPending}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={`bg-muted/50 border-border focus:border-primary/60 focus:ring-primary/20 transition-colors ${
                      errors.email
                        ? "border-destructive focus:border-destructive"
                        : ""
                    }`}
                    disabled={isPending}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`bg-muted/50 border-border focus:border-primary/60 focus:ring-primary/20 transition-colors resize-none ${
                      errors.message
                        ? "border-destructive focus:border-destructive"
                        : ""
                    }`}
                    disabled={isPending}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
