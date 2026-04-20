"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
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
