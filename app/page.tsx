const links = [
  { label: "github", href: "https://github.com/harshitchakrawal" },
  { label: "linkedin", href: "https://www.linkedin.com/in/harshit-chakrawal-09876636b/" },
  { label: "x", href: "https://x.com/callmehxrshit" },
  { label: "mail", href: "mailto:chakrawalharshit@gmail.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full space-y-6 text-base sm:text-lg leading-relaxed text-(--foreground)">
        <p>yo, i&apos;m harshit chakrawal</p>

        <p>i spend most of my time building, breaking, and shipping full-stack products.</p>

        <p>
          i live in the MERN stack — clean architecture on the backend, pixel-honest UI on the
          front.
        </p>

        <p>
          lately i&apos;m diving into AI &amp; ML, and still grinding leetcode because cracking an
          algorithm at 2am never gets old.
        </p>

        <p>
          {links.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="underline decoration-(--c-muted) underline-offset-4 hover:text-white transition-colors"
              >
                {link.label}
              </a>
              {i < links.length - 1 && " . "}
            </span>
          ))}
        </p>

        <p>yeah, that&apos;s it.</p>
      </div>
    </main>
  );
}
