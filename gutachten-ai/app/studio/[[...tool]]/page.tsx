"use client";

import dynamic from "next/dynamic";

const StudioContainer = dynamic(() => import("./StudioContainer"), {
  ssr: false,
  loading: () => <div style={{ padding: "2rem", textAlign: "center" }}>Studio wird geladen…</div>,
});

export default function StudioPage() {
  return <StudioContainer />;
}
