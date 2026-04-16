import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Seed-Endpoint ist nur in der Entwicklungsumgebung erlaubt
export async function GET(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed in production." }, { status: 403 });
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.SEED_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    await client.createOrReplace({ _id: "homePage", _type: "homePage", heroBadge: "KI-GESTÜTZTE PRÄZISION", heroTitle: "Die Zukunft der Bau-Gutachten.", heroSubtext: "Automatisieren Sie Ihre Dokumentationsprozesse mit künstlicher Intelligenz.", heroPrimaryButton: "Jetzt kostenlos testen", heroSecondaryButton: "Demo vereinbaren" });

    return NextResponse.json({ success: true, message: "Seed erfolgreich." });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
