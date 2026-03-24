import { NextRequest, NextResponse } from "next/server";

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

    // 1. Kontakt in Brevo CRM anlegen / aktualisieren
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: vorname || "",
          LASTNAME: nachname || "",
        },
        updateEnabled: true,
      }),
    });

    // 2. Benachrichtigungs-E-Mail senden
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "gutachter-ki.de", email: "info@gutachten-ai.de" },
        to: [{ email: process.env.CONTACT_EMAIL || "b.duezguen@intersignum.com" }],
        replyTo: { email, name: `${vorname} ${nachname}`.trim() },
        subject: `Neue Anfrage: ${betreff || "Kontaktformular"}`,
        htmlContent: `
          <h2>Neue Anfrage über gutachter-ki.de</h2>
          <p><strong>Name:</strong> ${vorname} ${nachname}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Betreff:</strong> ${betreff || "—"}</p>
          <hr/>
          <p><strong>Nachricht:</strong></p>
          <p>${nachricht.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.json();
      console.error("Brevo E-Mail Fehler:", err);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontakt-Route Fehler:", error);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
