const dispositifs = [
  {
    title: "Observer, analyser, anticiper",
    kicker: "StoryMap interactive",
    image: "/site-personnel/images/storymap-veille.jpg",
    text:
      "Une exploration internationale des dispositifs publics de veille, pensée pour rendre lisibles leurs périmètres, leurs méthodes et leurs formes de circulation des connaissances.",
    link: "https://nath76.github.io/story-idea/#tab3",
  },
  {
    title: "Relire cinq ans de bulletin de veille",
    kicker: "Tableau de bord réflexif",
    image: "/site-personnel/images/powerbi-bulletin-mensuel.jpg",
    text:
      "Un dispositif de relecture des contenus produits : volumes, thèmes, focus éditoriaux et évolutions d’un bulletin de veille coanimé pendant cinq ans.",
  },
  {
    title: "Visualiser les sujets traités",
    kicker: "Cartographie des contenus",
    image: "/site-personnel/images/powerbi-carte-monde.jpg",
    text:
      "Une carte mondiale permettant d’identifier les espaces, pays et régions associés aux sujets suivis dans le bulletin.",
  },
]

const explorations = [
  {
    title: "Cartographier pour arbitrer",
    kicker: "Carte interactive IGN",
    image: "/site-personnel/images/ign-intelligence-territoriale.jpg",
    text:
      "Une carte narrative sur l’intelligence territoriale, conçue comme support d’exploration, de comparaison et d’aide à la réflexion.",
    link: "https://macarte.ign.fr/carte/XxwGzy/Clinique-de-l-individu-clinique-du-territoire",
  },
]

const formes = [
  {
    title: "Digest de veille",
    kicker: "Application web",
    image: "/site-personnel/images/digest-veille.jpg",
    text:
      "Une forme éditoriale destinée à sélectionner, hiérarchiser et reformuler des signaux pour les rendre exploitables dans une logique d’action.",
  },
  {
    title: "Les îles françaises dans les coopérations de recherche de l’océan Indien",
    kicker: "Analyse courte",
    image: "/site-personnel/images/cep-ocean-indien.jpg",
    text:
      "Une publication synthétique qui présente l’essentiel des réflexions sur les coopérations de recherche agricoles et agroalimentaires dans l’océan Indien, selon une approche prospective, stratégique ou évaluative.",
    link: "https://agriculture.gouv.fr/les-iles-francaises-dans-les-cooperations-de-recherche-de-locean-indien-analyse-ndeg213",
  },
]

export default function Veille() {
  return (
    <main className="page-main section veille-page">
      <section className="veille-hero">
        <div>
          <p className="eyebrow">Axe 3</p>
          <h1>Veille stratégique & anticipation</h1>
          <p className="hero-lead">
            Comment concevoir des dispositifs qui rendent les résultats de la veille
            visibles et intelligibles ?
          </p>
          <p>
            La veille n’est pas seulement une activité de collecte. Elle suppose de
            concevoir des dispositifs capables de rendre des signaux dispersés plus
            lisibles, comparables et exploitables.
          </p>
          <p>
            Mes travaux portent sur cette mise en forme de la veille : dispositifs
            d’exploration, tableaux de bord réflexifs, cartes narratives et formes
            éditoriales pour l’action.
          </p>
        </div>

        <div className="veille-hero-card">
          <img
            src="/site-personnel/images/storymap-veille.jpg"
            alt="Capture de la StoryMap Observer, analyser, anticiper"
          />
        </div>
      </section>

      <section className="veille-section">
        <div className="veille-section-head">
          <p className="section-label">1</p>
          <h2>Concevoir des dispositifs pour rendre intelligibles les résultats de la veille</h2>
          <p>
            Cette première séquence rassemble des dispositifs conçus pour rendre la
            veille lisible : visualiser des contenus, relire des bulletins produits
            dans le temps, comparer des thématiques et donner une forme partageable
            aux résultats de l’observation.
          </p>
        </div>

        <div className="veille-grid">
          {dispositifs.map((item) => (
            <article className="veille-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <p className="project-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Voir le dispositif
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="veille-section">
        <div className="veille-section-head">
          <p className="section-label">2</p>
          <h2>Des dispositifs pour explorer</h2>
          <p>
            Certains dispositifs visuels sont conçus comme des instruments
            d’exploration : ils permettent d’examiner une situation complexe, de
            comparer des configurations et d’ouvrir des pistes d’interprétation.
          </p>
        </div>

        <div className="veille-grid single">
          {explorations.map((item) => (
            <article className="veille-card veille-card-wide" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <p className="project-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Voir la carte
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="veille-section">
        <div className="veille-section-head">
          <p className="section-label">3</p>
          <h2>Des formes éditoriales pour l’action</h2>
          <p>
            La veille devient stratégique lorsqu’elle trouve des formats capables
            d’aider à comprendre, anticiper et agir : digests, notes courtes,
            synthèses problématisées, angles d’exploitation ou analyses
            prospectives.
          </p>
        </div>

        <div className="veille-grid">
          {formes.map((item) => (
            <article className="veille-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <p className="project-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Lire la publication
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="veille-final-quote">
        <p>
          La veille stratégique est une pratique de transformation : convertir des
          signaux dispersés en connaissances visibles, intelligibles et utiles pour
          l’action.
        </p>
      </section>
    </main>
  )
}
