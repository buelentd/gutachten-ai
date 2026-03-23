export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">KI-gestützte Gutachtenerstellung</span>
            <h1>Professionelle Gutachten in Minuten statt Wochen</h1>
            <p className="hero-sub">
              Gutachter-KI analysiert Immobilien, Schäden und Sachverhalte automatisch
              und erstellt rechtssichere Gutachten nach DIN-Norm und BGH-Standards.
            </p>
            <div className="hero-cta">
              <a href="/kontakt" className="btn-primary">Kostenlos testen</a>
              <a href="/ablauf" className="btn-secondary">Wie es funktioniert</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">70%</span>
              <span className="stat-label">Zeitersparnis</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">&lt; 10h</span>
              <span className="stat-label">Statt wochenlanger Bearbeitung</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">DIN / BGH</span>
              <span className="stat-label">Normkonforme Ausgabe</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">DSGVO-konform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-features">
        <div className="container">
          <h2>Was Gutachter-KI kann</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automatische Analyse</h3>
              <p>Unterlagen, Fotos und Sachverhalte werden automatisch ausgewertet und strukturiert.</p>
            </div>
            <div className="feature-card">
              <h3>Rechtssichere Ausgabe</h3>
              <p>Alle Gutachten entsprechen aktuellen DIN-Normen und BGH-Anforderungen.</p>
            </div>
            <div className="feature-card">
              <h3>Schnelle Bearbeitung</h3>
              <p>Was früher Wochen dauerte, erledigt Gutachter-KI in wenigen Stunden.</p>
            </div>
            <div className="feature-card">
              <h3>Nachvollziehbare Ergebnisse</h3>
              <p>Jede Bewertung wird transparent begründet und ist vollständig prüfbar.</p>
            </div>
            <div className="feature-card">
              <h3>Datenschutz</h3>
              <p>DSGVO-konform, deutsches Rechenzentrum, keine Datenweitergabe an Dritte.</p>
            </div>
            <div className="feature-card">
              <h3>Integration</h3>
              <p>API-Anbindung an bestehende Kanzlei- und Gutachtersoftware möglich.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <h2>Bereit für den nächsten Schritt?</h2>
          <p>Testen Sie Gutachter-KI kostenlos und überzeugen Sie sich selbst.</p>
          <a href="/kontakt" className="btn-primary">Jetzt Zugang anfragen</a>
        </div>
      </section>
    </main>
  );
}
