"use strict";

(() => {
  const root = document.documentElement;
  const storageKey = "x0raki:theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // The switch still works for this page when storage is unavailable.
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      isDark ? "#161e25" : "#f6f4f1"
    );

    const switchButton = document.querySelector(".theme-switch");
    if (switchButton) {
      switchButton.setAttribute("aria-pressed", String(isDark));
    }
  }

  applyTheme(savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemTheme.matches ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", () => {
    const switchButton = document.querySelector(".theme-switch");
    applyTheme(root.dataset.theme);
    switchButton?.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      savedTheme = nextTheme;
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        // The chosen theme remains active until the page is closed.
      }
    });
  });

  systemTheme.addEventListener?.("change", (event) => {
    if (savedTheme !== "light" && savedTheme !== "dark") {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
})();
