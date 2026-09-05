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
        <header>
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight flex items-center gap-2">
              yo, i&apos;m harshit chakrawal
              {/* <svg
                aria-label="verified"
                viewBox="0 0 24 24"
                className="size-6 sm:size-7 shrink-0 fill-[#1d9bf0]"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg> */}
            </h1>
            <p className="text-sm sm:text-base text-(--c-muted)">21y &bull; developer &bull; curious</p>
          </div>
        </header>

        <p>
          i build{" "}
          <span className="relative inline-block font-semibold text-white whitespace-nowrap">
            full-stack products
            <svg
              aria-hidden
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full text-(--c-muted)"
            >
              <path
                d="M3 8.5c40-2.5 80-3.5 120-3 25 .3 50 .8 74 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M8 9.8c45-2 90-2.6 130-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="opacity-50"
              />
            </svg>
          </span>
          , break things, fix them, and ship them — crafting clean backends, sharp UIs, and solving
          problems that keep me curious.
        </p>

        <div className="space-y-1">
          <p>
            here are my <span className="font-semibold text-white">socials</span>
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
        </div>

        <p>yeah, that&apos;s it.</p>
      </div>
    </main>
  );
}
