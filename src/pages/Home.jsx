export default function Home({ go }) {
  return (
    <main>
      <section className="home-hero section">
        <div className="home-hero-copy">
          <h1>Médiation, dispositifs et action publique.</h1>

          <p className="lead">
            Des enquêtes ethnographiques sur les mondes urbains aux technologies
            de veille et d’influence, une même question traverse mon parcours :
            comment les dispositifs produisent du sens, organisent les circulations
            et transforment notre rapport au monde.
          </p>

          <button className="primary-btn" onClick={() => go("about")}>
            À propos
          </button>
        </div>

        <aside className="home-about-card">
          <img src="/site-personnel/images/photo-nathalie.jpg" alt="Nathalie Kakpo" />

          <div>
            <p className="section-label">À propos</p>
            <p>
              Sociologue de formation, j’articule depuis plus de quinze ans
              recherche, médiation et conception de dispositifs au service de
              l’action publique.
            </p>
            <p>
              Mon parcours relie enquêtes de terrain, médiation entre mondes
              professionnels et académiques, et conception d’outils de veille.
            </p>
            <button className="text-btn" onClick={() => go("about")}>
              En savoir plus →
            </button>
          </div>
        </aside>
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
        <article className="feature-card feature-card-split" onClick={() => go("socio")}>
          <div className="feature-card-body">
            <div className="feature-number">01</div>
            <h3>Sociologie urbaine</h3>
            <p>Enquêtes ethnographiques, mondes urbains, migrations et ségrégations.</p>
            <span className="card-link">Explorer →</span>
          </div>
          <img src="/site-personnel/images/hero-city.jpg" alt="" />
        </article>

        <article className="feature-card feature-card-split" onClick={() => go("mediation")}>
          <div className="feature-card-body">
            <div className="feature-number">02</div>
            <h3>Médiation & dispositifs</h3>
            <p>Techniques, cognition distribuée et production sociale du sens.</p>
            <span className="card-link">Explorer →</span>
          </div>
          <img src="/site-personnel/images/mediation-visual.jpg" alt="" />
        </article>

        <article className="feature-card feature-card-split" onClick={() => go("veille")}>
          <div className="feature-card-body">
            <div className="feature-number">03</div>
            <h3>Veille stratégique</h3>
            <p>
              Dispositifs de mise en visibilité de l’action publique et de ses transformations.
            </p>
            <span className="card-link">Explorer →</span>
          </div>
          <img src="/site-personnel/images/world-topics-map.jpg" alt="" />
        </article>
      </section>
    </main>
  );
}
