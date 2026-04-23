const articles = [
  'L’islam des filles',
  'La ville et ses marges',
  'Jeunes musulmans en ville',
]

const chapitres = [
  'Les politiques de la reconnaissance : le cas des musulmans en France',
  'La ville comme épreuve',
]

export default function Sociologie() {
  return (
    <main className="page-main section">
      <div className="page-head">
        <p className="eyebrow">Axe 1</p>
        <h1>Sociologie urbaine</h1>
        <p>
          Enseignante et chercheure contractuelle · Enquêtes ethnographiques · Publications
          scientifiques.
        </p>
        <div className="tags">
          {['Villes & sécurités', 'Migrations', 'Islam en France', 'Ségrégation', 'Politiques urbaines'].map(
            (tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>

      <section className="page-grid page-grid-two">
        <article className="panel book-panel">
          <h2>Monographie</h2>
          <div className="book-layout">
            <div className="book-cover">Livre</div>
            <div>
              <h3>L’islam, un recours pour les jeunes</h3>
              <p>Entre socialisations religieuses et rapports à la ville.</p>
              <p className="muted">Presses de Sciences Po, 2007</p>
            </div>
          </div>
        </article>

        <article className="panel">
          <h2>Articles récents</h2>
          <ul className="simple-list">
            {articles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel full-width-panel">
        <h2>Chapitres d’ouvrages</h2>
        <ul className="simple-list">
          {chapitres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
