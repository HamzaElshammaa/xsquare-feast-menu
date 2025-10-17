import { RefObject, useEffect } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  initialClasses?: string[]; // default: ["opacity-0", "translate-y-8"]
  visibleClasses?: string[]; // default: ["opacity-100", "translate-y-0"]
};

/**
 * Observe [data-reveal] descendants of a container and toggle Tailwind classes on entry.
 * Respects prefers-reduced-motion: shows content immediately.
 */
export function useReveal(containerRef: RefObject<HTMLElement>, options: Options = {}) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const initial = options.initialClasses ?? ["opacity-0", "translate-y-8"];
    const visible = options.visibleClasses ?? ["opacity-100", "translate-y-0"];

    if (reduce) {
      for (const el of targets) {
        el.classList.remove(...initial);
        el.classList.add(...visible);
      }
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add(...visible);
            el.classList.remove(...initial);
            if (options.once !== false) io.unobserve(el);
          }
        }
      },
      {
        root: null,
        rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
        threshold: options.threshold ?? 0.15,
      }
    );

    for (const el of targets) io.observe(el);
    return () => io.disconnect();
  }, [containerRef, options.rootMargin, options.threshold, options.once, options.initialClasses, options.visibleClasses]);
}
