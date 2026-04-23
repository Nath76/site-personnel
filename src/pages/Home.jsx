export default function Home({ go }) {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <h1>Médiation, dispositifs et action publique.</h1>
          <p>
            Des enquêtes ethnographiques sur les mondes urbains aux technologies
            de veille et d’influence, une même question traverse mon parcours :
            comment les dispositifs produisent du sens, organisent les circulations
            et transforment notre rapport au monde.
          </p>
          <button onClick={() => go("about")}>Explorer la trajectoire</button>
        </div>

        <div className="heroImage" />
      </section>

      <section className="timeline">
        <h2>Une trajectoire traversée par la médiation</h2>
        <div className="steps">
          <div>Enquêter</div>
          <div>Médier</div>
          <div>Dispositifs</div>
          <div>Influencer</div>
        </div>
      </section>

      <section className="mediation-note">
        <p>
          Une expérience fondatrice autour des usages de l’espace public a nourri
          un questionnement durable sur médiation, religion et dispositifs.
        </p>
      </section>

      <section className="cards-raised">
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
