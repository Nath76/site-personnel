import "./Home.css";

export default function Home() {
  const steps = [
    {
      number: "01",
      title: "Enquêter",
      text: "Comprendre les mondes sociaux et leurs transformations.",
      icon: "⌕",
    },
    {
      number: "02",
      title: "Médier",
      text: "Faciliter l’échange entre des univers disjoints.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Dispositifs",
      text: "Concevoir des formes qui structurent le sens.",
      icon: "▦",
    },
    {
      number: "04",
      title: "Influencer",
      text: "Éclairer l’action publique et les débats contemporains.",
      icon: "↗",
    },
  ];

  const axes = [
    {
      number: "01",
      title: "Sociologie urbaine",
      text: "Enquêtes ethnographiques, mondes urbains et transformations sociales.",
      image: "/site-personnel/images/hero-city.jpg",
      alt: "Paysage urbain",
    },
    {
      number: "02",
      title: "Médiation & dispositifs",
      text: "Techniques, cognition distribuée et production sociale du sens.",
      image: "/site-personnel/images/mediation-visual.jpg",
      alt: "Visualisation autour de la médiation",
    },
    {
      number: "03",
      title: "Veille stratégique",
      text: "Dispositifs numériques, cartographies et savoirs opératoires pour l’action publique.",
      image: "/site-personnel/images/world-topics-map.jpg",
      alt: "Carte du monde avec points",
    },
  ];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-kicker">Recherche · médiation · action publique</p>

          <h1>Médiation, dispositifs et action publique.</h1>
        </div>

        <div className="home-hero-image">
          <img
            src="/site-personnel/images/hero-city.jpg"
            alt="Vue urbaine"
          />
        </div>
      </section>

      <section className="home-manifesto">
        <p className="section-kicker">Fil directeur</p>

        <h2>Équipement cognitif des politiques publiques</h2>

        <p>
          Mon travail participe à l’équipement cognitif des politiques publiques.
          La veille y est conçue comme une activité d’interprétation, de mise en
          relation et de problématisation orientée vers l’action.
        </p>

        <p>
          Elle s’appuie sur des dispositifs numériques — cartographies, tableaux
          de bord, outils de veille, formes éditoriales — conçus comme des
          équipements cognitifs rendant les phénomènes plus visibles, comparables
          et discutables.
        </p>
      </section>

      <section className="trajectory-card">
        <div className="trajectory-intro">
          <p className="section-kicker">Trajectoire</p>

          <h2>Une trajectoire traversée par la médiation</h2>
        </div>

        <div className="trajectory-steps">
          {steps.map((step) => (
            <article className="trajectory-step" key={step.number}>
              <div className="step-icon">{step.icon}</div>

              <div>
                <p className="step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-soft-band">
        <p>
          Une expérience fondatrice autour des usages de l’espace public a nourri
          un questionnement durable sur médiation, religion et dispositifs.
        </p>
      </section>

      <section className="home-axes">
        {axes.map((axis) => (
          <article className="axis-card" key={axis.number}>
            <div className="axis-image">
              <img src={axis.image} alt={axis.alt} />
            </div>

            <div className="axis-content">
              <p>{axis.number}</p>
              <h3>{axis.title}</h3>
              <span>{axis.text}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
