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

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/harshitchakrawal-portfolio/visits")
      .then((r) => r.json())
      .then((d) => setVisitorCount(d.value))
      .catch(() => {});
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

          <p className="text-[17px] sm:text-[19px] text-(--c-muted) leading-normal mb-4">
            I&apos;m Harshit, 21 — I live in the{" "}
            <span className="text-(--c-text)">full stack</span>, which basically means I argue with
            both the backend and the frontend equally. I craft web apps with the{" "}
            <span className="text-(--c-text)">MERN stack</span>, obsessing over clean architecture
            on the server and smooth, pixel-honest experiences on the screen. Shipping something
            real — something people actually use — is the only metric I care about.
          </p>

          <p className="text-[17px] sm:text-[19px] text-(--c-muted) leading-normal mb-8">
            Off the keyboard, I&apos;m diving into{" "}
            <span className="text-(--c-text)">AI&nbsp;&amp;&nbsp;ML</span> — because why just build
            software when you can teach it to think. I grind{" "}
            <span className="text-(--c-text)">LeetCode </span> not for the streaks, but because
            there&apos;s something oddly satisfying about cracking an algorithm at 2am. Problem
            solving isn&apos;t just what I do — it&apos;s how I&apos;m wired.
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
          <div className="space-y-4 sm:-mx-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="border border-(--c-border) bg-(--c-surface) hover:border-(--c-border-strong) hover:bg-(--c-surface-hover) transition-all overflow-hidden rounded-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:h-56">

                  {/* Top/Left — preview */}
                  <div className="relative overflow-hidden bg-black h-36 sm:h-full">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <iframe
                        src={p.live}
                        title={p.name}
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          width: "960px",
                          height: "600px",
                          transform: "translate(-50%, -50%) scale(0.33)",
                          transformOrigin: "center",
                          border: "none",
                        }}
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Bottom/Right — details */}
                  <div className="p-3 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-[16px] font-semibold text-(--c-text)">{p.name}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-(--c-text) transition-colors"
                            aria-label="GitHub"
                          >
                            <GitHubIcon />
                          </a>
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-500 hover:text-(--c-text) transition-colors"
                              aria-label="Live demo"
                            >
                              <ArrowUpRightIcon />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm sm:text-[16px] text-(--c-muted) leading-normal">{p.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-(--c-surface-2) text-(--c-muted) text-[13px] border border-(--c-border)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section id="skills" className="-mb-10">
          <h2 className="text-[13px] font-pixel text-(--c-muted) uppercase tracking-widest mb-6">
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
              GitHub Contributions
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
                  <p className="text-sm text-zinc-500 mt-1">2nd Year · CGPA 8.2</p>
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
      <footer className="relative z-10 border-t border-(--c-border) max-w-3xl mx-auto px-6 py-6 flex flex-col gap-1">
        {visitorCount !== null && (
          <p className="text-xs text-zinc-500">
            You&apos;re the {ordinal(visitorCount)} visitor
          </p>
        )}
        <p className="text-xs text-zinc-600">
          Built by Ratnesh. The source code is available on{" "}
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
      </footer>
    </div>
  );
}
