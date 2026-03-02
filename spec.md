# M. ISMAIL – Front-End Developer Portfolio

## Current State
New project with no existing frontend or backend code.

## Requested Changes (Diff)

### Add
- Full single-page portfolio website for M. ISMAIL
- Hero section with name, tagline, professional photo placeholder, and CTA buttons ("See My Work", "Contact Me")
- About Me section (2–4 sentences covering full-stack front-end knowledge, AI tools experience, clean/responsive delivery, freelance readiness)
- Projects section: 4–6 sample projects each with title, description, tech stack tags, mockup placeholder image, live demo and GitHub links
- Skills section split into: Front-End Skills (HTML, CSS, JS, React, frameworks) and Tools & AI Experience (ChatGPT, DeepSeek, Gemini 3 Pro/3.1 Pro, Claude, Google AI, Hygen AI, Perplexity)
- Testimonials section with placeholder cards for future client feedback
- Contact section: email (mannafabdul461@gmail.com), LinkedIn placeholder, contact form (name, email, message), CTA text "Let's build something amazing together!"
- Smooth scroll navigation with mobile hamburger menu
- SEO meta tags (title, description, keywords, og tags)
- Light/Dark mode toggle
- Smooth animations and hover effects throughout

### Modify
- None (new project)

### Remove
- None (new project)

## Implementation Plan
1. Select no special Caffeine components (pure portfolio, contact form stored in backend)
2. Generate Motoko backend with a contact message submission endpoint (stores name, email, message) and a query to list messages (admin use)
3. Build React frontend:
   - App shell with dark/light mode context
   - Navbar with smooth scroll links and theme toggle
   - Hero section
   - About section
   - Projects section (6 sample projects)
   - Skills section (two categories)
   - Testimonials section (3 placeholder cards)
   - Contact section with form wired to backend
   - Footer
4. Generate placeholder images: profile photo and project mockups
5. Add SEO meta tags in index.html
6. Deploy
