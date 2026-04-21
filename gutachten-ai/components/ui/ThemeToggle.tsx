"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored !== "light";
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
      <Icon name={dark ? "light_mode" : "dark_mode"} size={20} className="icon-gray" />
    </button>
  );
}
