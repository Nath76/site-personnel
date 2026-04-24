const concepts = [
  {
    title: "Dispositif infocommunicationnel",
    text: "Les dispositifs organisent la circulation du sens, configurent les médiations et rendent certaines formes de connaissance visibles ou actionnables.",
  },
  {
    title: "Cognition distribuée",
    text: "La pensée se déploie dans des agencements faits d’artefacts, d’instruments et de chaînes sociotechniques.",
  },
  {
    title: "Artefact",
    text: "Cartes, écritures, graphes, plateformes ou agents IA peuvent être appréhendés comme des opérateurs de sens.",
  },
  {
    title: "Connaissance actionnable",
    text: "Transformer l’information en prise pour l’action : telle est la question qui traverse ces recherches.",
  },
];

export default function Mediation() {
  return (
    <main className="page-main section mediation-page">
      <section className="mediation-hero">
        <div>
          <p className="eyebrow">Axe 2</p>
          <h1>Médiation & dispositifs</h1>
          <p>
            Une réflexion sur les médiations comme opérations sur le sens,
            sur les dispositifs comme agencements sociotechniques et sur leurs
            usages dans l’enquête, la connaissance et l’action.
          </p>
        </div>

        <div className="mediation-constellation" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </section>

      <section className="mediation-block transmit-block">
        <div className="block-number">1</div>

        <div className="transmit-image">
          <img
            src="/site-personnel/images/cormano-map.jpg"
            alt="Carte produite par les étudiants dans le cadre de l’atelier de sociologie urbaine"
          />
        </div>

        <div className="transmit-content">
          <h2>Transmettre par l’enquête</h2>

          <p className="teaching-meta">
            Politecnico di Milano — Faculté d’architecture<br />
            Atelier d’enquête urbaine, octobre–décembre 2009
          </p>

          <p>
            Expérience pédagogique conduite avec des étudiants architectes
            autour de l’observation des espaces urbains ordinaires, des
            perceptions de sécurité publique et des conditions sociales de
            l’urbanité.
          </p>

          <div className="teaching-points">
            <div>
              <strong>Sécurité publique et usages ordinaires de l’espace</strong>
              <p>
                Observer les configurations spatiales susceptibles de favoriser
                présence, vigilance mutuelle ou vulnérabilité.
              </p>
            </div>

            <div>
              <strong>Référence à Jane Jacobs</strong>
              <p>
                La notion de <em>eyes on the street</em> comme point d’appui
                pour penser les conditions relationnelles de la sûreté urbaine.
              </p>
            </div>

            <div>
              <strong>Dispositif interdisciplinaire</strong>
              <p>
                Croiser regard sociologique, cartographie, observation de
                terrain, entretiens et productions étudiantes.
              </p>
            </div>
          </div>

          <div className="tags">
            <span className="tag">Jane Jacobs</span>
            <span className="tag">Sécurité publique</span>
            <span className="tag">Observation</span>
            <span className="tag">Cartographie</span>
            <span className="tag">Pédagogie de terrain</span>
          </div>
        </div>
      </section>

      <section className="mediation-block thinking-block">
        <div className="block-number">2</div>

        <div className="thinking-intro">
          <h2>Penser les dispositifs</h2>
          <p>
            Les dispositifs ne sont pas de simples supports : ils organisent la
            circulation du sens, configurent les médiations et rendent certaines
            formes de connaissance visibles ou actionnables.
          </p>
        </div>

        <div className="concept-orbit">
          {concepts.map((concept) => (
            <article key={concept.title} className="concept-node">
              <h3>{concept.title}</h3>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mediation-block masters-block">
        <div className="block-number">3</div>

        <h2>Mémoires de master</h2>

        <div className="master-grid">
          <article className="master-card">
            <img
              src="/site-personnel/images/memoire-mavinum.jpg"
              alt="Mémoire MAVINUM"
            />
            <div>
              <h3>
                Management de la connaissance, apprentissage organisationnel et
                intelligence stratégique
              </h3>
              <p>Master 2 MAVINUM — Université Paul Valéry Montpellier 3, 2025</p>
            </div>
          </article>

          <article className="master-card">
            <img
              src="/site-personnel/images/memoire-2.jpg"
              alt="Second mémoire de master"
            />
            <div>
              <h3>Second mémoire</h3>
              <p>À intégrer</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mediation-quote">
        <p>
          Les techniques n’encapsulent pas la connaissance ; elles contribuent à
          la produire, la distribuer et parfois à la transformer en capacité d’agir.
        </p>
      </section>
    </main>
  );
}
