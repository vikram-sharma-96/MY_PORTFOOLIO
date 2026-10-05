import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Local, frame-throttled pointer effects; no React renders on pointer movement.
function attachPointerEffect(surface, target, magnetic = false) {
  let frame = 0;
  let bounds;
  let x = 0;
  let y = 0;
  function move(event) {
    if (event.pointerType === "touch") return;
    bounds = surface.getBoundingClientRect();
    x = event.clientX - bounds.left;
    y = event.clientY - bounds.top;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const nx = clamp(x / bounds.width - 0.5, -0.5, 0.5);
      const ny = clamp(y / bounds.height - 0.5, -0.5, 0.5);
      target.style.setProperty("--pointer-x", `${x}px`);
      target.style.setProperty("--pointer-y", `${y}px`);
      target.style.setProperty("--tilt-x", `${-ny * 9 + 3}deg`);
      target.style.setProperty("--tilt-y", `${nx * 10}deg`);
      if (magnetic)
        target.style.transform = `translate(${nx * 12}px, ${ny * 9}px)`;
      surface.classList.add("pointer-active");
      frame = 0;
    });
  }
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    surface.classList.remove("pointer-active");
    ["--pointer-x", "--pointer-y", "--tilt-x", "--tilt-y"].forEach((property) =>
      target.style.removeProperty(property),
    );
    if (magnetic) target.style.transform = "";
  }
  surface.addEventListener("pointermove", move);
  surface.addEventListener("pointerleave", reset);
  surface.addEventListener("pointercancel", reset);
  window.addEventListener("blur", reset);
  return () => {
    reset();
    surface.removeEventListener("pointermove", move);
    surface.removeEventListener("pointerleave", reset);
    surface.removeEventListener("pointercancel", reset);
    window.removeEventListener("blur", reset);
  };
}

function attachScenePointer(hero, visual) {
  let frame = 0;
  let x = 0;
  let y = 0;
  function move(event) {
    const bounds = hero.getBoundingClientRect();
    x = clamp((event.clientX - bounds.left) / bounds.width, 0, 1);
    y = clamp((event.clientY - bounds.top) / bounds.height, 0, 1);
    if (frame) return;
    frame = requestAnimationFrame(() => {
      hero.style.setProperty("--light-x", `${x * 100}%`);
      hero.style.setProperty("--light-y", `${y * 100}%`);
      visual.style.setProperty("--scene-rotate-x", `${(0.5 - y) * 7}deg`);
      visual.style.setProperty("--scene-rotate-y", `${(x - 0.5) * 10}deg`);
      frame = 0;
    });
  }
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    hero.style.removeProperty("--light-x");
    hero.style.removeProperty("--light-y");
    visual.style.removeProperty("--scene-rotate-x");
    visual.style.removeProperty("--scene-rotate-y");
  }
  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", reset);
  window.addEventListener("blur", reset);
  return () => {
    reset();
    hero.removeEventListener("pointermove", move);
    hero.removeEventListener("pointerleave", reset);
    window.removeEventListener("blur", reset);
  };
}

export default function useMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let cleanup = () => {};
    function configure() {
      cleanup();
      if (preference.matches) return;
      const root = document.documentElement;
      const hero = document.querySelector(".hero");
      const visual = document.querySelector(".developer-visual");
      const timeline = document.querySelector(".timeline");
      const progress = document.querySelector(".reading-progress");
      const pointerCleanups = [];
      const active = new Set();
      let frame = 0;
      let pageVisible = !document.hidden;
      root.classList.add("motion-enabled");
      const reveals = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              reveals.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((element) => reveals.observe(element));
      const codeLines = [...document.querySelectorAll(".code-body > div")];
      codeLines.forEach((line, index) =>
        line.style.setProperty("--line-index", index),
      );
      function updateScroll() {
        frame = 0;
        const distance = root.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${distance > 0 ? clamp(window.scrollY / distance, 0, 1) : 0})`;
        if (active.has(timeline)) {
          const rect = timeline.getBoundingClientRect();
          timeline.style.setProperty(
            "--journey-progress",
            clamp((window.innerHeight * 0.72 - rect.top) / rect.height, 0, 1),
          );
        }
        if (pointer.matches && active.has(visual))
          visual.style.translate = `0 ${clamp(-hero.getBoundingClientRect().top * 0.07, 0, 30)}px`;
      }
      function schedule() {
        if (!frame && pageVisible) frame = requestAnimationFrame(updateScroll);
      }
      const visibility = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.add(entry.target);
          else active.delete(entry.target);
          entry.target.classList.toggle(
            "visual-active",
            entry.isIntersecting && pageVisible,
          );
        });
        schedule();
      });
      [hero, visual, timeline].forEach((element) => {
        if (element) visibility.observe(element);
      });
      function pageVisibility() {
        pageVisible = !document.hidden;
        active.forEach((element) =>
          element.classList.toggle("visual-active", pageVisible),
        );
        if (!pageVisible) {
          cancelAnimationFrame(frame);
          frame = 0;
        } else schedule();
      }
      // Show a card immediately when reached with the keyboard.
      function revealFocused(event) {
        const element = event.target.closest(".reveal");
        if (element) {
          element.classList.add("is-visible");
          reveals.unobserve(element);
        }
      }
      if (pointer.matches) {
        if (hero && visual)
          pointerCleanups.push(attachScenePointer(hero, visual));
        document
          .querySelectorAll(".project-shell")
          .forEach((shell) =>
            pointerCleanups.push(
              attachPointerEffect(shell, shell.querySelector(".project-card")),
            ),
          );
        document
          .querySelectorAll(".skill-card, .certificate-card")
          .forEach((card) =>
            pointerCleanups.push(attachPointerEffect(card, card)),
          );
        document
          .querySelectorAll(".magnetic")
          .forEach((button) =>
            pointerCleanups.push(attachPointerEffect(button, button, true)),
          );
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      document.addEventListener("visibilitychange", pageVisibility);
      document.addEventListener("focusin", revealFocused);
      schedule();
      cleanup = () => {
        reveals.disconnect();
        visibility.disconnect();
        cancelAnimationFrame(frame);
        pointerCleanups.forEach((dispose) => dispose());
        root.classList.remove("motion-enabled");
        [hero, visual, timeline].forEach((element) =>
          element?.classList.remove("visual-active"),
        );
        visual.style.translate = "";
        timeline.style.removeProperty("--journey-progress");
        progress.style.transform = "";
        codeLines.forEach((line) => line.style.removeProperty("--line-index"));
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("visibilitychange", pageVisibility);
        document.removeEventListener("focusin", revealFocused);
      };
    }
    configure();
    preference.addEventListener("change", configure);
    pointer.addEventListener("change", configure);
    return () => {
      cleanup();
      preference.removeEventListener("change", configure);
      pointer.removeEventListener("change", configure);
    };
  }, []);
}
