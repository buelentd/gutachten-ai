"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Theme wechseln"
      className="w-9 h-9 flex items-center justify-center rounded-lg border-[0.5px] border-[#2A3344] hover:bg-[#272A31] transition-colors"
    >
      <span className="material-symbols-outlined text-[#E0C0B3] text-xl">
        {dark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
