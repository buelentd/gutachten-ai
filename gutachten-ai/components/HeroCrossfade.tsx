"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroCrossfade() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square">
      <Image
        src="/hero.webp"
        alt="Architektur-Blueprint — technische Zeichnung mit orangen Konstruktionslinien für Bausachverständige"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 0px, 50vw"
        className="object-contain rounded-2xl border-[0.5px] border-[#2A3344]"
        style={{ opacity: showSecond ? 0 : 1, transition: "opacity 1.5s ease-in-out" }}
      />
      <Image
        src="/hero-sw.webp"
        alt="Baustellen-Illustration — Gebäude im Rohbau für Bausachverständige"
        fill
        sizes="(max-width: 768px) 0px, 50vw"
        className="object-contain rounded-2xl border-[0.5px] border-[#2A3344]"
        style={{ opacity: showSecond ? 1 : 0, transition: "opacity 1.5s ease-in-out" }}
      />
    </div>
  );
}
