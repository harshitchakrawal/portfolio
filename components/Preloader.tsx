"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GREETINGS = ["Hello", "おい", "Bonjour", "Hola", "Ciao"];
const NAME = "Harshit";
const AVATAR = "/john.jpg";

const STORAGE_KEY = "preloader-seen";
const GREETING_MS = 250;
const CYCLE_MS = GREETINGS.length * GREETING_MS;
const IDENTITY_HOLD_MS = 600;
const EXIT_MS = 900;
const REDUCED_EXIT_MS = 320;
/** Longest the intro will wait for the page to load before revealing anyway. */
const MAX_HOLD_MS = 6000;

/**
 * Runs before hydration so the overlay is either locked in (first visit) or
 * hidden by CSS (already seen) on the very first paint — no flash either way.
 * It also stamps the clock the greeting cycle animates against, so the rest of
 * the sequence lines up with CSS even when hydration lands late.
 */
const BOOT_SCRIPT = `try{var r=document.documentElement;r.dataset.preloaderStart=String(Math.round(performance.now()));r.dataset.preloader=sessionStorage.getItem(${JSON.stringify(
  STORAGE_KEY
)})?"done":"active"}catch(e){document.documentElement.dataset.preloader="active"}`;

/**
 * The greeting cycle runs on CSS so it starts at first paint instead of waiting
 * for hydration — a blocked main thread would otherwise hold the first greeting
 * on screen and then burst through the rest. Keyframes are derived from
 * GREETINGS so the array stays the single source of truth.
 */
function cycleKeyframes(count: number) {
  const slot = 100 / count; // share of the timeline per greeting
  const slide = slot * 0.25; // transition takes the first quarter of a slot
  const offset = 100 / count; // one line, as a share of the strip
  const move = ["0%{transform:translateY(0)}"];
  const fade = ["0%{opacity:1}"];

  for (let i = 1; i < count; i++) {
    const at = i * slot;
    move.push(`${at}%{transform:translateY(${-offset * (i - 1)}%)}`);
    move.push(`${at + slide}%{transform:translateY(${-offset * i}%)}`);
    fade.push(`${at}%{opacity:1}`);
    fade.push(`${at + slide / 2}%{opacity:0.35}`);
    fade.push(`${at + slide}%{opacity:1}`);
  }
  move.push(`100%{transform:translateY(${-offset * (count - 1)}%)}`);
  fade.push("100%{opacity:1}");

  return `@keyframes preloaderCycle{${move.join("")}}@keyframes preloaderCycleFade{${fade.join("")}}`;
}

const CYCLE_KEYFRAMES = cycleKeyframes(GREETINGS.length);

type Phase = "cycle" | "identity" | "exit" | "exit-reduced" | "done";

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>("cycle");

  useEffect(() => {
    const root = document.documentElement;

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      // storage blocked — play the intro rather than fail
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const unbind: (() => void)[] = [];
    const cleanup = () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      unbind.forEach((off) => off());
      root.dataset.preloader = "done";
    };

    // The CSS greeting cycle is timed from the pre-hydration stamp, not from
    // whenever this effect happens to run.
    const stampedAt = Number(root.dataset.preloaderStart);
    const sinceStart = () =>
      Number.isFinite(stampedAt) ? performance.now() - stampedAt : 0;

    const wait = (ms: number, run: () => void) =>
      timers.push(
        setTimeout(() => {
          if (!cancelled) run();
        }, ms)
      );

    // Chain off a real paint so a stalled main thread delays the next step
    // instead of collapsing several of them into one frame.
    const afterPaint = (run: () => void) =>
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (!cancelled) run();
        })
      );

    // Already hidden by the boot script; drop it from the tree on the next tick.
    if (seen) {
      root.dataset.preloader = "done";
      wait(0, () => setPhase("done"));
      return cleanup;
    }

    root.dataset.preloader = "active";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      root.dataset.preloader = "done";
      setPhase("done");
    };

    const exit = () => {
      setPhase(reduced ? "exit-reduced" : "exit");
      afterPaint(() => wait(reduced ? REDUCED_EXIT_MS : EXIT_MS, finish));
    };

    // Hold the intro until the page behind it has finished loading, so the
    // reveal never uncovers half-painted content. Capped, so one stalled asset
    // can't keep the overlay up indefinitely.
    const whenLoaded = (run: () => void) => {
      if (document.readyState === "complete") {
        run();
        return;
      }
      let fired = false;
      const go = () => {
        window.removeEventListener("load", go);
        if (fired || cancelled) return;
        fired = true;
        run();
      };
      window.addEventListener("load", go);
      unbind.push(() => window.removeEventListener("load", go));
      wait(Math.max(0, MAX_HOLD_MS - sinceStart()), go);
    };

    const identity = () => {
      setPhase("identity");
      afterPaint(() => wait(IDENTITY_HOLD_MS, () => whenLoaded(exit)));
    };

    // Pick up where the CSS cycle is, not where hydration happens to land.
    wait(Math.max(0, CYCLE_MS - sinceStart()), identity);

    return cleanup;
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "exit" || phase === "exit-reduced";
  const showIdentity = phase === "identity" || exiting;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <style dangerouslySetInnerHTML={{ __html: CYCLE_KEYFRAMES }} />
      <noscript>
        <style>{`#preloader{display:none}`}</style>
      </noscript>

      <div
        id="preloader"
        aria-hidden
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#0a0a0a] ${
          phase === "exit"
            ? "preloader-exit"
            : phase === "exit-reduced"
              ? "preloader-exit-reduced"
              : ""
        }`}
      >
        <div className="preloader-mask px-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
          {showIdentity ? (
            <div className="preloader-row preloader-reveal">
              <Image
                src={AVATAR}
                alt=""
                width={56}
                height={56}
                className="rounded-full object-cover object-center"
                style={{ width: "1.15em", height: "1.15em" }}
                preload
              />
              <span>I&apos;m {NAME}</span>
            </div>
          ) : (
            <div
              className="preloader-cycle"
              style={{ animationDuration: `${CYCLE_MS}ms` }}
            >
              {GREETINGS.map((greeting) => (
                <div className="preloader-row" key={greeting}>
                  <span className="preloader-dot" />
                  <span>{greeting}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Warm the avatar up during the greeting cycle so the reveal never
            lands on an empty circle. */}
        {phase === "cycle" && (
          <Image
            src={AVATAR}
            alt=""
            width={56}
            height={56}
            preload
            className="pointer-events-none absolute h-0 w-0 opacity-0"
          />
        )}

        {/* Curved bottom edge that flattens as the overlay lifts away. */}
        {phase === "exit" && (
          <svg
            className="preloader-curve"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path fill="#0a0a0a" d="M0 0 Q50 0 100 0 L100 0 L0 0 Z">
              <animate
                attributeName="d"
                dur="0.9s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;0.4;1"
                keySplines="0.33 0 0.67 1;0.76 0 0.24 1"
                values="M0 0 Q50 0 100 0 L100 0 L0 0 Z;M0 0 Q50 150 100 0 L100 0 L0 0 Z;M0 0 Q50 0 100 0 L100 0 L0 0 Z"
              />
            </path>
          </svg>
        )}
      </div>
    </>
  );
}
