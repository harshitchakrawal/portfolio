"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ProjectLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-zinc-500 hover:text-(--c-text) transition-colors"
  >
    {label}
    <ArrowUpRightIcon />
  </a>
);

const projects = [
  {
    name: "TriggerInsta",
    tagline: "Flows That Move At the Speed of Thought.",
    description:
      "Instagram automation tool that converts comments into DMs. Define keywords on any post or reel — when someone comments, TriggerFlow fires a public reply and a private DM instantly, at scale.",
    tags: ["Next.js", "Instagram Graph API", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/harshitchakrawal/triggerflow",
    live: "https://triggerflow-nine.vercel.app/",
    image: "/TriggerInsta.png",
  },
  {
    name: "Liquid",
    tagline: "Every drink. One platform.",
    description:
      "Full-stack e-commerce app built for beverage lovers. Browse, search, and order soft drinks, juices, and energy drinks — with auth, cart, and order management all wired up end-to-end.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/tushar-1226/Production_H",
    live: "",
    image: "/liquid.png",
  },
];

const stack = [
  { id: "javascript",  title: "JavaScript",  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", themed: false },
  { id: "typescript",  title: "TypeScript",  href: "https://www.typescriptlang.org/",                         themed: false },
  { id: "react",       title: "React",       href: "https://react.dev/",                                      themed: false },
  { id: "nextjs",      title: "Next.js",     href: "https://nextjs.org/",                                     themed: true  },
  { id: "tailwindcss", title: "Tailwind CSS",href: "https://tailwindcss.com/",                                themed: false },
  { id: "nodejs",      title: "Node.js",     href: "https://nodejs.org/",                                     themed: false },
  { id: "expressjs",   title: "Express.js",  href: "https://expressjs.com/",                                  themed: true  },
  { id: "mongodb",     title: "MongoDB",     href: "https://www.mongodb.com/",                                themed: false },
  { id: "postgresql",  title: "PostgreSQL",  href: "https://www.postgresql.org/",                             themed: false },
  { id: "prisma",      title: "Prisma",      href: "https://www.prisma.io/",                                  themed: true  },
  { id: "redux",       title: "Redux",       href: "https://redux.js.org/",                                   themed: false },
  { id: "supabase",    title: "Supabase",    href: "https://supabase.com/",                                   themed: false },
  { id: "shadcn-ui",   title: "shadcn/ui",   href: "https://ui.shadcn.com/",                                  themed: true  },
  { id: "figma",       title: "Figma",       href: "https://www.figma.com/",                                  themed: false },
  { id: "git",         title: "Git",         href: "https://git-scm.com/",                                    themed: false },
];

const footerSocials = [
  { label: "X.com", handle: "@callmehxrshit", href: "https://x.com/callmehxrshit" },
  {
    label: "LinkedIn",
    handle: "@harshitchakrawal",
    href: "https://www.linkedin.com/in/harshit-chakrawal-09876636b/",
  },
  { label: "GitHub", handle: "@harshitchakrawal", href: "https://github.com/harshitchakrawal" },
];

const roles = [
  "Full-Stack Developer",
  "Building real production-level projects",
  "Love to find & squash bugs",
  "Problem solver at heart",
  "MERN Stack enthusiast",
  "Turning ideas into working products",
];

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState<{
    contributions: ContributionDay[];
    total: Record<string, number>;
  } | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/harshitchakrawal?y=${currentYear}`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, [currentYear]);

  if (!data || data.contributions.length === 0) return null;

  const days = data.contributions.filter((d) => {
    const yr = new Date(d.date).getFullYear();
    return yr === currentYear;
  });
  const totalCount = data.total[currentYear] ?? 0;

  const firstDow = new Date(days[0].date).getDay();
  const padded: (ContributionDay | null)[] = [...Array(firstDow).fill(null), ...days];
  while (padded.length % 7 !== 0) padded.push(null);

  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

  const monthLabels: (string | null)[] = [];
  const seenMonths = new Set<string>();
  weeks.forEach((week) => {
    const first = week.find((d) => d !== null);
    if (!first) { monthLabels.push(null); return; }
    const d = new Date(first.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (!seenMonths.has(key)) {
      seenMonths.add(key);
      monthLabels.push(d.toLocaleString("default", { month: "short" }));
    } else {
      monthLabels.push(null);
    }
  });

  const cellColor = (level: 0 | 1 | 2 | 3 | 4) => `var(--cell-${level})`;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[500px]">
        <div className="flex w-full gap-0.5 mb-1">
          {weeks.map((_, i) => (
            <div key={i} className="flex-1 min-w-0" style={{ fontSize: 13, color: "#FAFAFA" }}>
              {monthLabels[i] ?? ""}
            </div>
          ))}
        </div>
        <div className="flex w-full gap-0.5">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex-1 flex flex-col gap-0.5 min-w-0">
              {week.map((day, di) => (
                <div
                  key={di}
                  className="w-full aspect-square"
                  style={{
                    borderRadius: 2,
                    backgroundColor: day ? cellColor(day.level) : "transparent",
                  }}
                  title={day ? `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}` : ""}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-zinc-500">
            {totalCount} contributions in {currentYear} on{" "}
            <a
              href="https://github.com/harshitchakrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-600 hover:text-zinc-300"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-zinc-500 mr-0.5">Less</span>
            {([0, 1, 2, 3, 4] as const).map((l) => (
              <div key={l} style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: cellColor(l) }} />
            ))}
            <span className="text-xs text-zinc-500 ml-0.5">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n.toLocaleString() + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/harshitchakrawal-portfolio/visits")
      .then((r) => r.json())
      .then((d) => setVisitorCount(d.value))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const tick = () =>
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const fontSize = 14;
    const chars = "01アイウエオカキクケコ0123456789ABCDEF∑∆πΩ";
    let cols = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(cols).fill(1);

    function draw() {
      ctx!.fillStyle = "rgba(0,0,0,0.05)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      cols = Math.floor(canvas!.width / fontSize);
      if (drops.length !== cols) drops = Array(cols).fill(1);
      for (let i = 0; i < drops.length; i++) {
        const opacity = Math.random() * 0.4 + 0.05;
        ctx!.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx!.font = `${fontSize}px monospace`;
        ctx!.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 40);
    window.addEventListener("resize", resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-(--c-bg)">
      {/* Matrix rain background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: theme === "dark" ? 0.07 : 0, zIndex: 0 }}
      />

      {/* Sticky navbar */}
      <header
        className="sticky top-0 z-50 border-b border-(--c-border) backdrop-blur-md"
        style={{ backgroundColor: "var(--c-nav-bg)" }}
      >
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            {(["About", "Projects", "Skills", "Contact"] as const).map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm text-(--c-muted) hover:text-(--c-text) transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-24 space-y-20">

        {/* ── Hero / About ── */}
        <section id="about">
          {/* Banner */}
          <div className="relative mb-6 h-36 sm:h-48 rounded-2xl overflow-hidden border border-(--c-border)">
            <Image
              src="/banner.jpg"
              alt=""
              fill
              preload
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          </div>

          {/* Name + role inline */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/john.jpg"
              alt="Harshit Chakrawal"
              width={70}
              height={70}
              className="rounded-full object-cover object-center shrink-0"
              style={{ width: 70, height: 70 }}
              priority
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-bold text-(--c-text) tracking-tight leading-snug">
                Harshit Chakrawal
              </h1>
              <p
                key={roleIndex}
                className="text-[16px] text-zinc-500"
                style={{
                  animation: `${visible ? "roleIn" : "roleOut"} 0.35s ease forwards`,
                }}
              >
                {roles[roleIndex]}
              </p>
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] text-(--c-muted) leading-normal mb-4">
            yo, I&apos;m Harshit — a{" "}
            <span className="text-(--c-text)">developer and builder</span> from India, passionate
            about creating products, <span className="text-(--c-text)">developer tools</span>, and
            scalable web applications.
          </p>

          <p className="text-[16px] sm:text-[18px] text-(--c-muted) leading-normal mb-4">
            I enjoy turning ideas into real products, exploring new technologies, and sharing what I
            learn along the way. From crafting polished{" "}
            <span className="text-(--c-text)">frontends</span> to building robust{" "}
            <span className="text-(--c-text)">backend systems</span>, I&apos;m always looking for
            ways to build better, faster, and smarter.
          </p>

          <p className="text-[16px] sm:text-[18px] text-(--c-muted) leading-normal mb-8">
            Currently learning, building, and shipping — one project at a time.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/harshitchakrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-chakrawal-09876636b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://x.com/callmehxrshit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <XIcon /> Twitter
            </a>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects">
          <h2 className="text-[13px] font-mono text-zinc-500 uppercase tracking-widest underline underline-offset-4 decoration-zinc-700 mb-3">
            Projects
          </h2>
          <div className="space-y-7">
            {projects.map((p) => (
              <div key={p.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] font-semibold text-(--c-text)">{p.name}</h3>
                  <div className="flex items-center gap-4 shrink-0 text-[14px]">
                    {p.live && <ProjectLink href={p.live} label="Website" />}
                    {p.github && <ProjectLink href={p.github} label="GitHub" />}
                  </div>
                </div>
                <p className="mt-1.5 text-sm sm:text-[17px] text-(--c-muted) leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section id="skills" className="-mb-10">
          <h2 className="text-[13px] font-mono text-zinc-500 uppercase tracking-widest underline underline-offset-4 decoration-zinc-700 mb-6">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap gap-2 select-none">
            {stack.map((tech) => (
              <li key={tech.id}>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-(--c-pill) px-2 py-1 font-mono text-(--c-muted) ring-1 ring-(--c-border) transition-colors duration-300 hover:bg-(--c-pill-hover) hover:text-(--c-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--c-border-strong)"
                >
                  <Image
                    src={tech.themed ? `/${tech.id}-${theme}.svg` : `/${tech.id}.svg`}
                    alt={`${tech.title} logo`}
                    width={16}
                    height={16}
                    unoptimized
                    aria-hidden="true"
                  />
                  <span className="text-sm">{tech.title}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* GitHub contribution graph */}
          <div className="mt-10">
            <h2 className="text-[13px] font-mono text-zinc-500 uppercase tracking-widest underline underline-offset-4 decoration-zinc-700 mb-4">
              Performance
            </h2>
            <GitHubContributions />
          </div>

          {/* Education */}
          <div className="mt-10">
            <h2 className="text-[13px] font-mono text-zinc-500 uppercase tracking-widest underline underline-offset-4 decoration-zinc-700 mb-5">
              Education
            </h2>
            <div className="space-y-3">

              {/* B.Tech */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 pt-4 pb-1 border-t border-(--c-border)">
                <div>
                  <p className="text-[16px] font-semibold text-(--c-text) mb-0.5">B.Tech — Information Technology</p>
                  <p className="text-sm text-(--c-muted)">Madan Mohan Malaviya University of Technology</p>
                  <p className="text-sm text-zinc-500 mt-1">2nd Year · CGPA 8.5</p>
                </div>
                <span className="text-sm text-zinc-500 sm:shrink-0">2025 – 2029</span>
              </div>
              <div className="border-t border-(--c-border) mt-1" />

            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="border-t border-(--c-border) pt-14">
          <h2 className="text-[13px] font-mono text-zinc-500 uppercase tracking-widest underline underline-offset-4 decoration-zinc-700 mb-4">
            Connect with me
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="mailto:chakrawalharshit@gmail.com"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <MailIcon /> <span className="hidden sm:inline">chakrawalharshit@gmail.com</span><span className="sm:hidden">Email</span>
            </a>
            <a
              href="https://github.com/harshitchakrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-chakrawal-09876636b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://x.com/callmehxrshit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--c-border) text-(--c-muted) hover:text-(--c-text) hover:border-(--c-border-strong) transition-colors text-sm"
            >
              <XIcon /> Twitter
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-(--c-border) max-w-3xl mx-auto px-6 pt-10 pb-6 overflow-hidden">
        <div className="flex flex-col gap-2 mb-10">
          {footerSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-(--c-border) bg-(--c-surface) px-4 py-3 hover:border-(--c-border-strong) hover:bg-(--c-surface-hover) transition-colors"
            >
              <span className="text-sm text-(--c-text)">{s.label}</span>
              <span className="flex-1 border-t border-dashed border-(--c-border-strong)" />
              <span className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-(--c-muted) transition-colors">
                {s.handle}
                <ArrowUpRightIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              Local Time
            </p>
            <p className="text-sm text-(--c-text) tabular-nums">{localTime ?? "—"}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              Version
            </p>
            <p className="text-sm text-(--c-text)">{new Date().getFullYear()} &copy; Edition</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          {visitorCount !== null && (
            <p className="text-xs text-zinc-500">
              You&apos;re the {ordinal(visitorCount)} visitor
            </p>
          )}
          <p className="text-xs text-zinc-600">
            Built by Harshit. The source code is available on{" "}
            <a
              href="https://github.com/harshitchakrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
