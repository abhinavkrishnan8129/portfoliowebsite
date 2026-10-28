/* ==========================================================
   PORTFOLIO — script.js
   1) PORTFOLIO config  ← edit ONLY this block to personalize
   2) Rendering helpers
   3) Interactions (nav, theme, reveal, filters, etc.)
   ========================================================== */

/* ----------------------------------------------------------
   1) CONFIG — all editable content lives here.
   Everything marked "SAMPLE" is placeholder text. Replace it
   with your real details. Leave a value as "" (or [] for lists)
   to hide that item/section automatically.
   ---------------------------------------------------------- */
const PORTFOLIO = {
  name: "Abhinav Krishnan M",                       // SAMPLE
  initials: "YN",                          // SAMPLE (shown in logo + avatar fallback)
  title: "Data analyst",           // SAMPLE
  tagline: "Building thoughtful digital products.", // SAMPLE (footer)
  siteDescription: "",                     // optional: updates <meta description> if set

  theme: {
    default: "dark",                       // "dark" | "light" (used until the visitor chooses)
    accent: "",                            // optional override, e.g. "#7c9cff" (applies to dark + light)
    accentContrast: "",                    // optional text color on accent buttons, e.g. "#0b0d12"
  },

  hero: {
    headline: "I build thoughtful digital products.",   // SAMPLE
    roles: ["Full Stack Developer", "Problem Solver", "Lifelong Learner"], // animated role text (1+ items)
    description:
      "I am a hardworking and enthusiastic learner who enjoys exploring new technologies and improving my technical skills. I believe in continuous learning, teamwork, and using my knowledge to solve real-world problems.",
    availability: "Available for new opportunities",    // set "" to hide the badge
    image: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-311.jpg",                                          // e.g. "assets/images/profile.jpg" ("" = initials avatar)
    imageAlt: "Portrait of Your Name",
  },

  about: {
    paragraphs: [
      "SAMPLE: Introduce yourself — who you are, where you're based, and what you enjoy building.",
      "SAMPLE: Describe your background and career journey in a few honest sentences.",
    ],
    focus: [                                // specialization / approach cards (hidden if empty)
      { icon: "layers", title: "Specialization", text: "SAMPLE: Your main areas of expertise." },
      { icon: "puzzle", title: "Problem solving", text: "SAMPLE: How you approach and break down problems." },
      { icon: "target", title: "Goals", text: "SAMPLE: What you want to work on next." },
      { icon: "heart", title: "Interests", text: "SAMPLE: What you enjoy outside of work." },
    ],
    // Only add stats you can verify. Empty list hides the block.
    stats: [
      // { value: "3+", label: "Years of experience" },
      // { value: "12", label: "Projects completed" },
    ],
    resume: "",                             // e.g. "assets/resume.pdf" ("" hides the button)
  },

  skills: [                                 // categories with no items are hidden
    { title: "Frontend",  icon: "layout-dashboard", items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"] },   // SAMPLE
    { title: "Backend",   icon: "server",           items: ["Node.js", "Express"] },                           // SAMPLE
    { title: "Databases", icon: "database",         items: ["MongoDB", "PostgreSQL"] },                        // SAMPLE
    { title: "Tools & Platforms", icon: "wrench",   items: ["Git", "GitHub", "VS Code", "Figma"] },            // SAMPLE
  ],

  projects: [                               // empty list hides the section's cards
    // category is used for the filter buttons. Links left "" are not rendered.
    {
      title: "healthcare",          // SAMPLE
      category: "Web Development",
      description: "Developed a Healthcare Management System using Next.js, React, Tailwind CSS, and Appwrite. The application allows patients to register, book appointments, and receive appointment updates. It also provides an admin dashboard to manage appointments, schedule consultations, and handle cancellations.",
      image: "", imageAlt: "Screenshot of Sample Project One", // e.g. "assets/images/project-1.png"
      tech: ["JavaScript", "Tailwind CSS"],
      features: ["SAMPLE: Key feature or problem solved", "SAMPLE: Another highlight"],
      live: "", code: "", caseStudy: "",
    },
    {
      title: "movie ticket booking",          // SAMPLE
      category: "Data Analytics",
      description: "Developed a Movie Booking System that allows users to browse movies, view showtimes, select seats, and book movie tickets online. The system provides a simple and user-friendly interface for managing movie bookings and improving the ticket booking experience.",
      image: "", imageAlt: "Screenshot of Sample Project Two",
      tech: ["Python", "SQL"],
      features: ["SAMPLE: Key insight or result"],
      live: "", code: "", caseStudy: "",
    },
    {
      title: "blood bank",        // SAMPLE
      category: "Web Development",
      description: "SAMPLE: Describe the stack, your role, and what made it interesting.",
      image: "", imageAlt: "Screenshot of Sample Project Three",
      tech: ["Node.js", "MongoDB"],
      features: ["SAMPLE: Notable feature"],
      live: "", code: "", caseStudy: "",
    },
  ],

  experience: [                             // work, internships, freelance, education, training…
    {
      type: "Education",                    // shown as a small tag
      title: "SAMPLE: Degree / Qualification",
      org: "SAMPLE: Institution Name",
      start: "Year", end: "Year",
      points: ["SAMPLE: Relevant coursework, achievements or projects."],
      tech: [],
    },
    {
      type: "Experience",
      title: "SAMPLE: Job Title",
      org: "SAMPLE: Company Name",
      start: "Month Year", end: "Present",
      points: ["SAMPLE: A responsibility or achievement.", "SAMPLE: Another one."],
      tech: ["JavaScript"],
    },
  ],

  achievements: [                           // certifications, awards, hackathons… ([] hides the section)
    // { icon: "award", title: "Certification name", issuer: "Issuer", date: "2026", link: "" },
  ],

  contact: {
    intro: "Hi, I'm an aspiring Data Analyst passionate about working with data and finding useful insights. I have skills in Excel, SQL, Python, and Power BI. I enjoy learning new technologies, solving problems, and working on real-world projects. My goal is to grow as a Data Analyst and build my career in the field of data analytics.",
    email: "abhikrishnan8129@gmail.com",             // SAMPLE — replace with your real email
    phone: "8129291513",                              // e.g. "+91 98765 43210"  (spaces/dashes are fine)
    whatsapp: "8129291513",                           // international number, e.g. "919876543210"
    whatsappMessage: "Hi! I found your portfolio and would like to connect.",
    linkedin: "",                           // full URL
    github: "",                             // full URL
    instagram: "",                          // full URL
    location: "kasaragod",                           // e.g. "Kochi, Kerala, India"
  },
};

/* ----------------------------------------------------------
   2) HELPERS
   ---------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const has = (v) => typeof v === "string" ? v.trim() !== "" : Array.isArray(v) ? v.length > 0 : Boolean(v);
function icon(name, cls = "h-5 w-5") {
  return `<i data-lucide="${esc(name)}" class="${cls}" aria-hidden="true"></i>`;
}
function isSafeUrl(url) {
  return /^(https?:\/\/|\.{0,2}\/|assets\/)/i.test(String(url || "").trim());
}
const EXT = 'target="_blank" rel="noopener noreferrer"';

/* ----------------------------------------------------------
   3) RENDER
   ---------------------------------------------------------- */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function socialLinks() {
  const c = PORTFOLIO.contact;
  const list = [];
  if (has(c.github) && isSafeUrl(c.github)) list.push({ label: "GitHub", icon: "github", href: c.github });
  if (has(c.linkedin) && isSafeUrl(c.linkedin)) list.push({ label: "LinkedIn", icon: "linkedin", href: c.linkedin });
  if (has(c.instagram) && isSafeUrl(c.instagram)) list.push({ label: "Instagram", icon: "instagram", href: c.instagram });
  if (has(c.email)) list.push({ label: "Email", icon: "mail", href: `mailto:${c.email.trim()}`, internal: true });
  return list;
}

function renderSocials(target) {
  if (!target) return;
  const items = socialLinks();
  target.innerHTML = items.map((s) => `
    <li><a class="social-link" href="${esc(s.href)}" aria-label="${esc(s.label)}" ${s.internal ? "" : EXT}>${icon(s.icon)}</a></li>
  `).join("");
  target.hidden = items.length === 0;
}

function renderNav() {
  const desktop = $("#nav-desktop");
  const mobile = $("#nav-mobile");
  const footer = $("#footer-nav");
  const link = (n) => `<li><a class="nav-link" href="#${n.id}" data-nav-link data-section="${n.id}">${esc(n.label)}</a></li>`;
  if (desktop) desktop.innerHTML = NAV_ITEMS.map(link).join("");
  if (mobile) mobile.innerHTML = NAV_ITEMS.map(link).join("");
  if (footer) footer.innerHTML = NAV_ITEMS.map((n) => `<li><a href="#${n.id}" data-nav-link>${esc(n.label)}</a></li>`).join("");
}

function renderIdentity() {
  const p = PORTFOLIO;
  document.title = `${p.name} | ${p.title} Portfolio`;
  if (has(p.siteDescription)) {
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.siteDescription);
  }
  const og = $('meta[property="og:title"]');
  if (og) og.setAttribute("content", `${p.name} | ${p.title}`);

  const set = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  set("#logo-text", p.initials);
  set("#hero-initials", p.initials);
  set("#footer-name", p.name);
  set("#footer-copy-name", p.name);
  set("#footer-tagline", p.tagline);
  set("#hero-greeting", `Hi, I'm ${p.name}`);
  set("#hero-headline", p.hero.headline);
  set("#hero-role", p.hero.roles?.[0] || p.title);
  set("#hero-description", p.hero.description);
  set("#contact-intro", p.contact.intro);

  const badge = $("#hero-availability");
  if (badge) {
    badge.hidden = !has(p.hero.availability);
    set("#hero-availability-text", p.hero.availability);
  }

  const img = $("#hero-image");
  const fallback = $("#hero-initials");
  if (img && fallback && has(p.hero.image)) {
    img.src = p.hero.image;
    img.alt = p.hero.imageAlt || `Portrait of ${p.name}`;
    img.hidden = false;
    fallback.hidden = true;
    img.addEventListener("error", () => { img.hidden = true; fallback.hidden = false; }, { once: true });
  }

  const { accent, accentContrast } = p.theme;
  if (has(accent)) document.documentElement.style.setProperty("--accent", accent);
  if (has(accent)) document.documentElement.style.setProperty("--accent-strong", accent);
  if (has(accentContrast)) document.documentElement.style.setProperty("--accent-contrast", accentContrast);
}

function renderAbout() {
  const a = PORTFOLIO.about;
  const paras = $("#about-paragraphs");
  if (paras) paras.innerHTML = (a.paragraphs || []).map((t) => `<p>${esc(t)}</p>`).join("");

  const focus = $("#about-focus");
  if (focus) {
    focus.innerHTML = (a.focus || []).map((f) => `
      <div class="card card-hover">
        <span class="icon-chip">${icon(f.icon || "sparkles", "h-5 w-5")}</span>
        <h3 class="mt-3 text-base font-semibold">${esc(f.title)}</h3>
        <p class="mt-1 text-sm leading-relaxed text-muted">${esc(f.text)}</p>
      </div>`).join("");
  }

  const stats = $("#about-stats");
  if (stats) {
    const list = a.stats || [];
    stats.innerHTML = list.map((s) => `
      <div class="card">
        <p class="stat-value">${esc(s.value)}</p>
        <p class="mt-1 text-sm text-muted">${esc(s.label)}</p>
      </div>`).join("");
    const aside = stats.closest("aside");
    if (aside) aside.hidden = list.length === 0;
    // when there are no stats, let the text use the full width
    const grid = aside?.parentElement;
    if (grid && list.length === 0) grid.classList.remove("lg:grid-cols-[1.3fr_0.7fr]");
  }

  const resume = $("#resume-btn");
  if (resume) {
    if (has(a.resume)) { resume.href = a.resume; resume.hidden = false; }
    else resume.hidden = true;
  }
}

function renderSkills() {
  const grid = $("#skills-grid");
  const section = $("#skills");
  const cats = (PORTFOLIO.skills || []).filter((c) => has(c.items));
  if (section) section.hidden = cats.length === 0;
  if (!grid) return;
  grid.innerHTML = cats.map((c) => `
    <article class="card card-hover reveal">
      <div class="flex items-center gap-3">
        <span class="icon-chip">${icon(c.icon || "code-2", "h-5 w-5")}</span>
        <h3 class="text-lg font-semibold">${esc(c.title)}</h3>
      </div>
      <ul class="mt-4 flex flex-wrap gap-2">
        ${c.items.map((i) => `<li class="badge">${esc(i)}</li>`).join("")}
      </ul>
    </article>`).join("");
}

function projectCard(p, index) {
  const thumb = has(p.image)
    ? `<img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" width="640" height="400" loading="${index < 3 ? "eager" : "lazy"}" decoding="async">`
    : `<div class="project-thumb-fallback" role="img" aria-label="${esc(p.title)} preview placeholder">${icon("monitor", "h-10 w-10")}</div>`;

  const links = [];
  if (has(p.live) && isSafeUrl(p.live)) links.push(`<a class="link-inline" href="${esc(p.live)}" ${EXT}>${icon("external-link", "h-4 w-4")} Live Demo<span class="sr-only"> of ${esc(p.title)}</span></a>`);
  if (has(p.code) && isSafeUrl(p.code)) links.push(`<a class="link-inline" href="${esc(p.code)}" ${EXT}>${icon("github", "h-4 w-4")} Source Code<span class="sr-only"> of ${esc(p.title)}</span></a>`);
  if (has(p.caseStudy) && isSafeUrl(p.caseStudy)) links.push(`<a class="link-inline" href="${esc(p.caseStudy)}" ${EXT}>${icon("book-open", "h-4 w-4")} Case Study<span class="sr-only"> for ${esc(p.title)}</span></a>`);

  return `
    <article class="card card-hover project-card reveal" data-category="${esc(p.category || "Other")}">
      <div class="project-thumb">${thumb}</div>
      <div class="project-body">
        <p class="text-xs font-medium text-accent">${esc(p.category || "Other")}</p>
        <h3 class="mt-1 text-xl font-semibold tracking-tight">${esc(p.title)}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">${esc(p.description)}</p>
        ${has(p.features) ? `<ul class="project-features mt-4 space-y-1.5 text-sm text-muted">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        ${has(p.tech) ? `<ul class="mt-4 flex flex-wrap gap-2">${p.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>` : ""}
        ${links.length ? `<div class="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-4">${links.join("")}</div>` : ""}
      </div>
    </article>`;
}

function renderProjects() {
  const projects = PORTFOLIO.projects || [];
  const section = $("#projects");
  const grid = $("#projects-grid");
  const filters = $("#project-filters");
  if (section) section.hidden = projects.length === 0;
  if (!grid) return;
  grid.innerHTML = projects.map(projectCard).join("");

  if (!filters) return;
  const categories = [...new Set(projects.map((p) => p.category || "Other"))];
  // Show filters only when there are enough projects and more than one category
  const showFilters = projects.length >= 3 && categories.length >= 2;
  filters.hidden = !showFilters;
  if (!showFilters) return;
  filters.innerHTML = ["All", ...categories].map((c, i) =>
    `<button type="button" class="filter-btn" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`
  ).join("");
}

function renderExperience() {
  const list = PORTFOLIO.experience || [];
  const section = $("#experience");
  const el = $("#timeline");
  if (section) section.hidden = list.length === 0;
  if (!el) return;
  el.innerHTML = list.map((e) => {
    const dates = [e.start, e.end].filter(has).join(" — ");
    return `
    <li class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <p class="timeline-date">${esc(dates)}</p>
      <div class="card">
        ${has(e.type) ? `<span class="type-tag">${esc(e.type)}</span>` : ""}
        <h3 class="text-lg font-semibold">${esc(e.title)}</h3>
        <p class="text-sm text-accent">${esc(e.org)}</p>
        ${has(e.points) ? `<ul class="project-features mt-3 space-y-1.5 text-sm text-muted">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        ${has(e.tech) ? `<ul class="mt-4 flex flex-wrap gap-2">${e.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>` : ""}
      </div>
    </li>`;
  }).join("");
}

function renderAchievements() {
  const list = PORTFOLIO.achievements || [];
  const section = $("#achievements");
  const grid = $("#achievements-grid");
  if (section) section.hidden = list.length === 0;
  if (!grid) return;
  grid.innerHTML = list.map((a) => {
    const meta = [a.issuer, a.date].filter(has).join(" · ");
    const inner = `
      <span class="icon-chip">${icon(a.icon || "award", "h-5 w-5")}</span>
      <h3 class="mt-3 text-base font-semibold">${esc(a.title)}</h3>
      ${has(meta) ? `<p class="mt-1 text-sm text-muted">${esc(meta)}</p>` : ""}`;
    return has(a.link) && isSafeUrl(a.link)
      ? `<a class="card card-hover reveal block" href="${esc(a.link)}" ${EXT}>${inner}</a>`
      : `<div class="card card-hover reveal">${inner}</div>`;
  }).join("");
}

function renderContact() {
  const c = PORTFOLIO.contact;
  const grid = $("#contact-grid");
  if (!grid) return;
  const cards = [];

  if (has(c.email)) {
    cards.push({ icon: "mail", label: "Email", value: c.email.trim(), href: `mailto:${c.email.trim()}`, external: false });
  }
  if (has(c.phone)) {
    const tel = c.phone.replace(/[^\d+]/g, "");
    if (tel) cards.push({ icon: "phone", label: "Phone", value: c.phone.trim(), href: `tel:${tel}`, external: false });
  }
  if (has(c.whatsapp)) {
    const num = c.whatsapp.replace(/\D/g, "");
    if (num) {
      const text = has(c.whatsappMessage) ? `?text=${encodeURIComponent(c.whatsappMessage)}` : "";
      cards.push({ icon: "message-circle", label: "WhatsApp", value: "Message me directly", href: `https://wa.me/${num}${text}`, external: true });
    }
  }
  if (has(c.linkedin) && isSafeUrl(c.linkedin)) cards.push({ icon: "linkedin", label: "LinkedIn", value: "Connect professionally", href: c.linkedin, external: true });
  if (has(c.github) && isSafeUrl(c.github)) cards.push({ icon: "github", label: "GitHub", value: "Browse my code", href: c.github, external: true });
  if (has(c.instagram) && isSafeUrl(c.instagram)) cards.push({ icon: "instagram", label: "Instagram", value: "Follow along", href: c.instagram, external: true });

  const linkCards = cards.map((m) => `
    <a class="contact-card reveal" href="${esc(m.href)}" ${m.external ? EXT : ""} aria-label="${esc(m.label)}: ${esc(m.value)}">
      <span class="icon-chip">${icon(m.icon)}</span>
      <span class="min-w-0">
        <span class="contact-label block">${esc(m.label)}</span>
        <span class="contact-value block">${esc(m.value)}</span>
      </span>
      ${icon(m.external ? "arrow-up-right" : "arrow-right", "arrow h-5 w-5")}
    </a>`);

  if (has(c.location)) {
    linkCards.push(`
      <div class="contact-card reveal">
        <span class="icon-chip">${icon("map-pin")}</span>
        <span class="min-w-0">
          <span class="contact-label block">Location</span>
          <span class="contact-value block">${esc(c.location)}</span>
        </span>
      </div>`);
  }
  grid.innerHTML = linkCards.join("");
}

function renderAll() {
  renderNav();
  renderIdentity();
  renderSocials($("#hero-socials"));
  renderSocials($("#footer-socials"));
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderAchievements();
  renderContact();
  if (window.lucide?.createIcons) window.lucide.createIcons();
}

/* ----------------------------------------------------------
   4) INTERACTIONS
   ---------------------------------------------------------- */

/* --- Theme ------------------------------------------------ */
function initTheme() {
  const root = document.documentElement;
  const btn = $("#theme-toggle");
  const meta = $('meta[name="theme-color"]');

  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }
  const initial = saved === "light" || saved === "dark" ? saved : (PORTFOLIO.theme.default === "light" ? "light" : "dark");

  function apply(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0d12" : "#fafaf9");
    if (btn) btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (persist) { try { localStorage.setItem("theme", theme); } catch (e) { /* ignore */ } }
  }
  apply(initial, false);
  btn?.addEventListener("click", () => {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });
}

/* --- Header, mobile menu, smooth scroll ------------------- */
function initNavigation() {
  const header = $("#site-header");
  const toggle = $("#menu-toggle");
  const menu = $("#mobile-menu");

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };
  const isOpen = () => toggle?.getAttribute("aria-expanded") === "true";

  toggle?.addEventListener("click", () => setMenu(!isOpen()));

  document.addEventListener("click", (e) => {
    if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  // Smooth scroll for every in-page link (delegated => no duplicate listeners)
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id || a.classList.contains("skip-link")) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    if (menu && !menu.hidden) setMenu(false);
  });

  // Border on scroll
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* --- Active section tracking ------------------------------ */
function initActiveNav() {
  const links = $$(".nav-link[data-section]");
  const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter((s) => s && !s.hidden);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    links.forEach((l) => {
      const on = l.dataset.section === id;
      l.classList.toggle("is-active", on);
      if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
    });
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach((s) => io.observe(s));
  setActive("home");
}

/* --- Scroll reveal ---------------------------------------- */
function initReveal() {
  const items = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el, i) => {
    // light stagger for siblings in the same grid
    el.style.transitionDelay = `${Math.min((i % 6) * 60, 300)}ms`;
    io.observe(el);
  });
}

/* --- Project filtering ------------------------------------ */
function initFilters() {
  const bar = $("#project-filters");
  const grid = $("#projects-grid");
  const empty = $("#projects-empty");
  if (!bar || !grid || bar.hidden) return;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.dataset.filter;
    $$(".filter-btn", bar).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    let visible = 0;
    $$(".project-card", grid).forEach((card) => {
      const show = filter === "All" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) { visible++; card.classList.add("is-visible"); }
    });
    if (empty) empty.hidden = visible > 0;
  });
}

/* --- Animated role text ----------------------------------- */
function initRoleTyper() {
  const el = $("#hero-role");
  const roles = (PORTFOLIO.hero.roles || []).filter(has);
  const caret = $(".caret");
  if (!el || roles.length === 0) return;
  if (roles.length === 1 || prefersReducedMotion) {
    el.textContent = roles[0];
    if (caret) caret.style.display = "none";
    return;
  }
  let roleIdx = 0, charIdx = roles[0].length, deleting = true;
  const TYPE = 70, DELETE = 38, HOLD = 1700, GAP = 350;

  function tick() {
    const word = roles[roleIdx];
    if (deleting) {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx <= 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; return setTimeout(tick, GAP); }
      return setTimeout(tick, DELETE);
    }
    charIdx++;
    el.textContent = roles[roleIdx].slice(0, charIdx);
    if (charIdx >= roles[roleIdx].length) { deleting = true; return setTimeout(tick, HOLD); }
    setTimeout(tick, TYPE);
  }
  setTimeout(tick, HOLD);
}

/* --- Back to top + year ----------------------------------- */
function initBackToTop() {
  const btn = $("#back-to-top");
  if (!btn) return;
  btn.hidden = false;
  const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 600);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

function initYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

/* --- Boot ------------------------------------------------- */
function init() {
  initTheme();
  renderAll();
  initNavigation();
  initActiveNav();
  initReveal();
  initFilters();
  initRoleTyper();
  initBackToTop();
  initYear();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
