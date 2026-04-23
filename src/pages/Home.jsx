export default function Home({ go }) {
  return (
    <main>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio biographique</p>
          <h1>Médiation, dispositifs et action publique.</h1>
          <p className="lead">
            Des enquêtes ethnographiques sur les mondes urbains aux technologies de veille et
            d’influence, une même question traverse mon parcours : comment des dispositifs
            produisent du sens, organisent des circulations et transforment notre rapport au monde.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => go('about')}>
              Explorer ma trajectoire
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-city.svg" alt="Ville et réseau" />
        </div>
      </section>

      <section className="trajectory section section-card">
        <h2>Une trajectoire traversée par la médiation</h2>
        <div className="trajectory-grid">
          <div className="trajectory-step">
            <div className="step-icon">1</div>
            <h3>Enquêter</h3>
            <p>Comprendre les mondes sociaux, les territoires et leurs transformations.</p>
          </div>
          <div className="trajectory-step">
            <div className="step-icon">2</div>
            <h3>Médier</h3>
            <p>Faciliter l’échange entre des univers disjoints et rendre visibles leurs écarts.</p>
          </div>
          <div className="trajectory-step">
            <div className="step-icon">3</div>
            <h3>Dispositifs</h3>
            <p>Observer comment techniques et formats structurent le traitement de l’information.</p>
          </div>
          <div className="trajectory-step">
            <div className="step-icon">4</div>
            <h3>Influencer</h3>
            <p>Mettre la connaissance au service de l’action publique et des débats contemporains.</p>
          </div>
        </div>
      </section>

      <section className="home-note section section-soft">
        <p>
          Un questionnement ancien sur l’espace public, la religion et les usages sociaux a nourri
          un travail doctoral, puis plus largement une réflexion durable sur la médiation.
        </p>
      </section>

      <section className="cards-row section cards-raised">
        <article className="feature-card" onClick={() => go('sociologie')}>
          <img src="/images/card-socio.svg" alt="Sociologie urbaine" />
          <div className="feature-card-body">
            <h3>1. Sociologie urbaine</h3>
            <p>
              Enquêtes ethnographiques, enseignement et publications sur la ville, les migrations,
              les religions et les politiques urbaines.
            </p>
            <ul>
              <li>Villes & sécurités</li>
              <li>Migrations</li>
              <li>Islam en France</li>
              <li>Ségrégation</li>
              <li>Politiques urbaines</li>
            </ul>
            <span className="card-link">Découvrir mes recherches</span>
          </div>
        </article>

        <article className="feature-card" onClick={() => go('mediation')}>
          <img src="/images/card-mediations.svg" alt="Médiation et dispositifs" />
          <div className="feature-card-body">
            <h3>2. Médiation & dispositifs</h3>
            <p>
              Réflexions sur les dispositifs infocommunicationnels, la cognition distribuée et le
              rôle des techniques dans la production de sens.
            </p>
            <ul>
              <li>Dispositifs infocommunicationnels</li>
              <li>Cognition distribuée</li>
              <li>Techniques et médiations</li>
              <li>Connaissance et circulation de l’information</li>
            </ul>
            <span className="card-link">Explorer les notions</span>
          </div>
        </article>

        <article className="feature-card" onClick={() => go('veille')}>
          <img src="/images/card-veille.svg" alt="Veille stratégique" />
          <div className="feature-card-body">
            <h3>3. Veille, anticipation, influence</h3>
            <p>
              Veille stratégique, analyse des signaux faibles, outils numériques et projets au
              service de l’action publique.
            </p>
            <ul>
              <li>Signaux faibles & anticipation</li>
              <li>Dispositifs numériques</li>
              <li>Influence & débats publics</li>
              <li>Valorisation des travaux du ministère</li>
            </ul>
            <span className="card-link">Découvrir mes projets</span>
          </div>
        </article>
      </section>

      <section className="signature-banner section">
        <p>
          Les dispositifs ne se contentent pas d’encapsuler la connaissance. Ils structurent son
          traitement, sa circulation et son appréhension. La médiation opère toujours un travail sur
          le sens.
        </p>
        <div className="signature">Nathalie Ka</div>
      </section>

      <footer className="footer section">
        <div>nathalie.ka@interieur.gouv.fr</div>
        <div>Paris, France</div>
        <div>linkedin.com/in/nathalieka</div>
      </footer>
    </main>
  )
}
