"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Theme wechseln"
      className="w-9 h-9 flex items-center justify-center rounded-lg border-technical hover:bg-[#272A31] dark:hover:bg-[#272A31] light:hover:bg-[#E4E1DA] transition-colors"
      title={dark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
    >
      <span className="material-symbols-outlined text-xl text-[#E0C0B3] dark:text-[#E0C0B3]">
        {dark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
