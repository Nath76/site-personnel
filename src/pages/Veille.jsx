const projects = [
  'Observer, analyser, anticiper — StoryMap interactive',
  'Intelligence territoriale — Carte interactive IGN',
  'Rapport Power BI — Portrait social des quartiers',
  'Digest de veille — Application web',
]

export default function Veille() {
  return (
    <main className="page-main section">
      <div className="page-head">
        <p className="eyebrow">Axe 2</p>
        <h1>Veille stratégique & influence</h1>
        <p>
          Expertise en veille · Cheffe de projet politique publique · IHEMI, ministère de l’Intérieur.
        </p>
        <div className="tags">
          {['Signaux faibles', 'Anticipation', 'Action publique', 'Dispositifs numériques', 'Influence'].map(
            (tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>

      <section className="project-grid">
        {projects.map((project) => (
          <article key={project} className="panel project-panel">
            <div className="project-thumb" />
            <h2>{project}</h2>
            <p>Projet, réalisation ou dispositif mobilisé au service de l’action publique.</p>
          </article>
        ))}
      </section>
    </main>
  )
}
