const concepts = [
  {
    title: 'Dispositifs infocommunicationnels',
    text: 'Étude des formes qui organisent la production, la circulation et la visibilité de l’information.',
  },
  {
    title: 'Cognition distribuée',
    text: 'Les techniques et les machines contribuent à la fabrication de notre rapport au monde.',
  },
  {
    title: 'Techniques et médiations',
    text: 'Écriture, numérique, algorithmes et visualisations comme opérateurs de sens.',
  },
  {
    title: 'Connaissance et circulation',
    text: 'Quels formats, quelles plateformes, quelles économies de l’attention et quelles conséquences ?',
  },
]

export default function Mediation() {
  return (
    <main className="page-main section">
      <div className="page-head">
        <p className="eyebrow">Axe transversal</p>
        <h1>Médiation & dispositifs</h1>
        <p>
          Les dispositifs infocommunicationnels et les techniques ne se contentent pas d’encapsuler
          la connaissance : ils structurent en profondeur son traitement, sa circulation et son
          appréhension.
        </p>
      </div>

      <section className="concept-grid">
        {concepts.map((concept) => (
          <article key={concept.title} className="panel concept-panel">
            <h2>{concept.title}</h2>
            <p>{concept.text}</p>
          </article>
        ))}
      </section>

      <section className="panel quote-panel">
        <p>
          C’est à la lumière de ces notions que j’aborde les intelligences artificielles et les
          transformations contemporaines de l’espace public informationnel.
        </p>
      </section>
    </main>
  )
}
