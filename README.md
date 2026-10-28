# Portfolio Website

A premium, responsive, dark/light portfolio built with HTML5, CSS3, vanilla JavaScript, **Tailwind CSS v4 (browser CDN)**, Google Fonts (Space Grotesk + Inter) and Lucide icons. No build step, no contact form — visitors reach you through direct email, phone, WhatsApp and social links.

## Run locally

You need an internet connection (fonts, Tailwind and Lucide load from CDNs).

```bash
cd portfolio
python3 -m http.server 8000      # or: npx serve .
```

Then open http://localhost:8000. (Opening `index.html` directly also works, but a local server is recommended.)

## Personalize (one place)

Open `js/script.js` and edit the **`PORTFOLIO`** object at the top. Everything is there:

- name, initials, title, tagline
- hero headline, animated roles, description, availability badge, profile image
- about text, focus cards, stats, résumé path
- skills, projects (with filter categories and links), experience & education
- certifications & achievements
- email, phone, WhatsApp, LinkedIn, GitHub, Instagram, location
- accent color and default theme

Anything left as `""` or `[]` is hidden automatically: empty contact methods, missing project links, empty sections, and stats. Content marked `SAMPLE` is placeholder text, and `hello@example.com` is a placeholder email, so replace both.

Also update the `<title>` and meta description in `index.html` for SEO (the title updates automatically from your name once the page loads).

## Assets you need to supply

| File | Purpose |
|------|---------|
| `assets/images/profile.jpg` | Hero portrait (square, ~800×800) — set `hero.image` |
| `assets/images/project-*.png` | Project screenshots (16:10, ~1280×800) — set each project's `image` |
| `assets/resume.pdf` | Résumé — set `about.resume` |

Without images, the site shows an initials avatar and a neutral project placeholder, so nothing breaks.

## Contact link formats

- Email: `mailto:you@domain.com`
- Phone: `tel:+919876543210`
- WhatsApp: `https://wa.me/919876543210?text=...` (number in international format, digits only)
- Profiles: full URLs, opened with `target="_blank" rel="noopener noreferrer"`

## Deploying

Upload the `portfolio/` folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For a production build you can later swap the Tailwind CDN for the official Tailwind CLI. Choose one approach, don't mix them.

## Structure

```
portfolio/
├── index.html
├── css/style.css      design tokens, themes, components, animations
├── js/script.js       config + rendering + interactions
└── assets/            images, icons, resume.pdf
```
