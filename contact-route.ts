import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { vorname, nachname, email, betreff, nachricht } = body;

    if (!email || !nachricht) {
      return NextResponse.json({ error: "E-Mail und Nachricht sind Pflichtfelder." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API-Konfigurationsfehler." }, { status: 500 });
    }

    const safeVorname   = escapeHtml(String(vorname || ""));
    const safeNachname  = escapeHtml(String(nachname || ""));
    const safeEmail     = escapeHtml(String(email));
    const safeBetreff   = escapeHtml(String(betreff || "Kontaktformular"));
    const safeNachricht = escapeHtml(String(nachricht));

    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ email: safeEmail, attributes: { FIRSTNAME: safeVorname, LASTNAME: safeNachname }, updateEnabled: true }),
    });

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: { name: "gutachten-ai.de", email: "info@gutachten-ai.de" },
        to: [{ email: process.env.CONTACT_EMAIL || "b.duezguen@intersignum.com" }],
        replyTo: { email: safeEmail, name: `${safeVorname} ${safeNachname}`.trim() },
        subject: `Neue Anfrage: ${safeBetreff}`,
        htmlContent: `
          <h2>Neue Anfrage über gutachten-ai.de</h2>
          <p><strong>Name:</strong> ${safeVorname} ${safeNachname}</p>
          <p><strong>E-Mail:</strong> ${safeEmail}</p>
          <p><strong>Betreff:</strong> ${safeBetreff}</p>
          <hr/>
          <p><strong>Nachricht:</strong></p>
          <p>${safeNachricht}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.json();
      console.error("Brevo Fehler:", err);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontakt-Route Fehler:", error);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
