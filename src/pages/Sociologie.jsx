const articles = [
  {
    title: "L’islam des filles",
    image: "/site-personnel/images/article-islam-filles.jpg",
    link: "https://www.persee.fr/doc/diver_1769-8502_2005_num_142_1_2459",
    meta: "Article · Diversité · 2005"
  },
  {
    title: "Relégation scolaire et recherche de requalification par l'islam",
    image: "/site-personnel/images/article-relegation-islam.jpg",
    link: "https://shs.cairn.info/revue-societes-contemporaines-2005-3-page-139?lang=fr",
    meta: "Article · Sociétés contemporaines · 2005"
  },
  {
    title: "Ségrégation(s), culture et socialisation",
    image: "/site-personnel/images/article-segregations.jpg",
    link: "https://www.persee.fr/doc/diver_1769-8502_2011_num_164_1_3394",
    meta: "Article · Diversité · 2011"
  },
  {
    title: "Lyon metropolis: economic development and social division of space",
    image: "/site-personnel/images/article-territorio.jpg",
    link: "#",
    meta: "Article · Territorio"
  }
]

const chapitres = [
  {
    title: "Émeutes urbaines et protestations",
    image: "/site-personnel/images/ouvrage-emeutes.jpg"
  },
  {
    title: "Communauté d'expérience et diversité des trajectoires",
    image: "/site-personnel/images/ouvrage-acteurs-faibles.jpg"
  }
]

const internationalWork = {
  title: "Social Innovations for Social Cohesion",
  subtitle: "Geneva — Introduction",
  imageCover: "/site-personnel/images/social-innovations-cover.jpg",
  imageInside: "/site-personnel/images/geneva-introduction.jpg",
  link: "https://wilcoproject.com/book/chapters/geneva-introduction/"
}

export default function Sociologie() {
  return (
    <main className="page-main section publications-page">

      <div className="page-head publications-head">
        <p className="eyebrow">Axe 1</p>

        <h1>Publications — Sociologie urbaine</h1>

        <p>
          Travaux sur les socialisations urbaines, les espaces populaires,
          les formes de relégation, la religion et les trajectoires de
          requalification.
        </p>

        <div className="tags">
          {[
            "Villes & sécurités",
            "Migrations",
            "Islam en France",
            "Ségrégation",
            "Politiques urbaines"
          ].map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <section className="publication-lead">
        <div className="lead-cover">
          <img
            src="/site-personnel/images/livre-islam-jeunes.jpg"
            alt="Couverture du livre L’islam, un recours pour les jeunes"
          />
        </div>

        <div className="lead-copy">
          <p className="section-label">Monographie</p>

          <h2>L’islam, un recours pour les acteurs faibles ?</h2>

          <p>
            Une enquête sur les usages du référent religieux par des animateurs
            de centres sociaux et sur les formes de requalification symbolique
            dans les espaces populaires.
          </p>

          <p className="muted">Presses de Sciences Po</p>

          <a
            href="https://shs.cairn.info/publications-de-nathalie-kakpo--9869?lang=fr"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            Voir la notice →
          </a>
        </div>
      </section>

      <section className="publication-section">
        <div className="section-title-row">
          <h2>Articles</h2>
        </div>

        <div className="publication-list">
          {articles.map(article => (
            <article className="publication-item" key={article.title}>
              <img src={article.image} alt={article.title} />

              <div>
                <p className="pub-type">{article.meta}</p>

                <h3>{article.title}</h3>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Lire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section book-shelf-section">
        <div className="section-title-row">
          <h2>Chapitres d’ouvrages</h2>
        </div>

               <div className="book-shelf">
          {chapitres.map(item => (
            <article key={item.title} className="book-shelf-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section international-section">
        <div className="section-title-row">
          <h2>Ouvrage international</h2>
        </div>

        <div className="international-work">
          <div className="intl-cover">
            <img
              src={internationalWork.imageCover}
              alt={internationalWork.title}
            />
          </div>

          <div className="intl-copy">
            <p className="section-label">Comparative urban studies</p>

            <h3>{internationalWork.title}</h3>
            <h4>{internationalWork.subtitle}</h4>

            <p>
              Contribution sur Genève dans un ouvrage collectif sur les
              innovations sociales et les dynamiques de cohésion urbaine en
              Europe.
            </p>

            <a
              href={internationalWork.link}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              Consulter le chapitre →
            </a>
          </div>

          <div className="intl-page">
            <img
              src={internationalWork.imageInside}
              alt="Première page Geneva introduction"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
