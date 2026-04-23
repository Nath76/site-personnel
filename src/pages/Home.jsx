export default function Home({ go }) {
  return (
    <main>
      <section className="hero section">
        <div className="hero-copy">
          <h1>Médiation, dispositifs et action publique.</h1>

          <p className="lead">
            Des enquêtes ethnographiques sur les mondes urbains aux technologies
            de veille et d’influence, une même question traverse mon parcours :
            comment les dispositifs produisent du sens, organisent les circulations
            et transforment notre rapport au monde.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => go("about")}>
              À propos
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/site-personnel/images/hero-city.jpg" alt="" />
        </div>
      </section>

      <section className="trajectory section section-card">
        <h2>Une trajectoire traversée par la médiation</h2>

        <div className="trajectory-grid">
          <div className="trajectory-step">
            <div className="step-icon">01</div>
            <h3>Enquêter</h3>
            <p>Comprendre les mondes sociaux et leurs transformations.</p>
          </div>

          <div className="trajectory-step">
            <div className="step-icon">02</div>
            <h3>Médier</h3>
            <p>Faciliter l’échange entre des univers disjoints.</p>
          </div>

          <div className="trajectory-step">
            <div className="step-icon">03</div>
            <h3>Dispositifs</h3>
            <p>Concevoir des formes qui structurent le sens.</p>
          </div>

          <div className="trajectory-step">
            <div className="step-icon">04</div>
            <h3>Influencer</h3>
            <p>Éclairer l’action publique et les débats contemporains.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft home-note">
        <p>
          Une expérience fondatrice autour des usages de l’espace public a nourri
          un questionnement durable sur médiation, religion et dispositifs.
        </p>
      </section>

      <section className="cards-raised section">
        <article className="feature-card" onClick={() => go("socio")}>
          <div className="feature-card-body">
            <div className="feature-number">01</div>
            <h3>Sociologie urbaine</h3>
            <p>
              Enquêtes ethnographiques, mondes urbains, migrations et ségrégations.
            </p>
            <span className="card-link">Explorer →</span>
          </div>
        </article>

        <article className="feature-card" onClick={() => go("mediation")}>
          <div className="feature-card-body">
            <div className="feature-number">02</div>
            <h3>Médiation & dispositifs</h3>
            <p>
              Techniques, cognition distribuée et production sociale du sens.
            </p>
            <span className="card-link">Explorer →</span>
          </div>
        </article>

        <article className="feature-card" onClick={() => go("veille")}>
          <div className="feature-card-body">
            <div className="feature-number">03</div>
            <h3>Veille stratégique</h3>
            <p>
              Dispositifs de mise en visibilité de l’action publique et de ses transformations.
            </p>
            <span className="card-link">Explorer →</span>
          </div>
        </article>
      </section>
    </main>
  );
}
