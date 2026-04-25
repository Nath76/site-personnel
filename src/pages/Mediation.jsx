const concepts = [
  {
    title: "Dispositif infocommunicationnel",
    text: "Les dispositifs organisent la circulation du sens, configurent les médiations et rendent certaines formes de connaissance visibles ou actionnables.",
  },
  {
    title: "Cognition distribuée",
    text: "La pensée ne réside pas seulement dans les sujets ; elle se déploie dans des agencements faits d’artefacts, d’instruments et de chaînes sociotechniques.",
  },
  {
    title: "Artefact",
    text: "Cartes, écritures, graphes, plateformes ou agents IA peuvent être appréhendés comme des artefacts opérant un travail sur le sens.",
  },
  {
    title: "Connaissance actionnable",
    text: "Comment transformer l’information en prise pour l’action ? Cette question traverse mes recherches sur veille, dispositifs et apprentissages organisationnels.",
  },
];

export default function Mediation() {
  return (
    <main className="page-main section mediation-page-v2">
      <section className="mediation-top">
        <div>
          <p className="eyebrow">Axe 2</p>
          <h1>Médiation & dispositifs</h1>
          <p>
              Une réflexion sur l’enquête de terrain, la sécurité urbaine et les
  dispositifs qui transforment l’observation en connaissance partageable.
          </p>
        </div>

        <div className="network-visual" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </section>

      <section className="urban-security-teaching">
  <div className="teaching-copy">
    <p className="section-label">Enseignement</p>

    <h2>Enseigner la sécurité urbaine par l’enquête de terrain</h2>

    <p className="meta">
      Politecnico di Milano — Faculté d’architecture<br />
      Atelier d’enquête urbaine, octobre–décembre 2009
    </p>

    <p>
      Cet enseignement proposait aux étudiants d’architecture et d’urbanisme
      d’aborder la sécurité urbaine non comme une question strictement
      policière, mais comme une expérience située des espaces publics :
      usages ordinaires, signes de dégradation, perceptions habitantes,
      conflits d’appropriation et conditions de coprésence.
    </p>

    <p>
      L’enquête de terrain devenait un outil pédagogique central : observer,
      catégoriser, cartographier puis discuter les situations urbaines afin de
      transformer des indices dispersés en diagnostic partageable.
    </p>

    <div className="teaching-points">
      <div>
        <strong>Observer</strong>
        <span>les usages, les présences et les vulnérabilités ordinaires.</span>
      </div>

      <div>
        <strong>Qualifier</strong>
        <span>les signes faibles : dégradation, abandon, conflits d’usage.</span>
      </div>

      <div>
        <strong>Cartographier</strong>
        <span>les situations pour rendre visibles des dynamiques locales.</span>
      </div>

      <div>
        <strong>Problématiser</strong>
        <span>la sécurité comme relation entre espace, usages et vigilance.</span>
      </div>
    </div>

    <div className="tags compact-tags">
      <span className="tag">Sécurité urbaine</span>
      <span className="tag">Jane Jacobs</span>
      <span className="tag">Eyes on the street</span>
      <span className="tag">Observation</span>
      <span className="tag">Cartographie</span>
      <span className="tag">Pédagogie de terrain</span>
    </div>
  </div>

  <div className="teaching-visual">
    <img
      src="/site-personnel/images/cormano-map.jpg"
      alt="Carte d’analyse urbaine produite par les étudiants à Cormano"
    />
  </div>
</section>

        <div className="part-image">
          <img
            src="/site-personnel/images/cormano-map.jpg"
            alt="Carte produite par les étudiants à Cormano"
          />
        </div>

        <div className="part-content">
          <h2>Transmettre par l’enquête</h2>

          <p className="meta">
            Politecnico di Milano — Faculté d’architecture<br />
            Atelier d’enquête urbaine, octobre–décembre 2009
          </p>

          <p>
            Expérience pédagogique conduite avec des étudiants architectes autour de l’observation
            des espaces urbains ordinaires, des perceptions de sécurité publique et des conditions
            sociales de l’urbanité.
          </p>

          <div className="point">
            <strong>Sécurité publique et usages ordinaires de l’espace</strong>
            <p>
              Observer les configurations spatiales susceptibles de favoriser présence,
              vigilance mutuelle ou vulnérabilité.
            </p>
          </div>

          <div className="point">
            <strong>Référence à Jane Jacobs</strong>
            <p>
              La notion de <em>eyes on the street</em> comme point d’appui pour penser
              les conditions relationnelles de la sûreté urbaine.
            </p>
          </div>

          <div className="point">
            <strong>Dispositif interdisciplinaire</strong>
            <p>
              Croiser regard sociologique, cartographie, observation de terrain,
              entretiens et productions étudiantes.
            </p>
          </div>

          <div className="tags compact-tags">
            <span className="tag">Jane Jacobs</span>
            <span className="tag">Sécurité publique</span>
            <span className="tag">Observation</span>
            <span className="tag">Cartographie</span>
            <span className="tag">Pédagogie de terrain</span>
          </div>
        </div>
      </section>

      <section className="mediation-part part-two">
        <div className="part-number">2</div>

        <div className="thinking-text">
          <h2>Penser les dispositifs</h2>
          <p>
            Les dispositifs ne sont pas de simples supports : ils organisent la circulation du sens,
            configurent les médiations et rendent certaines formes de connaissance visibles ou
            actionnables.
          </p>
          <p>
            Cette réflexion s’appuie notamment sur deux mémoires de master consacrés aux
            dispositifs numériques, à la connaissance et aux médiations techniques.
          </p>
        </div>

        <div className="concept-map">
          {concepts.map((concept, index) => (
            <article className={`concept-bubble bubble-${index + 1}`} key={concept.title}>
              <h3>{concept.title}</h3>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mediation-part part-three">
        <div className="part-number">3</div>
        <h2>Mémoires de master</h2>

        <div className="memoire-row">
          <article className="memoire-card">
            <img
              src="/site-personnel/images/memoire-mavinum.jpg"
              alt="Page de titre du mémoire MAVINUM"
            />
            <div>
              <h3>
                Management de la connaissance, apprentissage organisationnel et intelligence
                stratégique : quelle contribution à la formation en travail social ?
              </h3>
              <p>Master 2 MAVINUM — Université Paul Valéry Montpellier 3, 2025</p>
            </div>
          </article>

          <article className="memoire-card">
            <img
              src="/site-personnel/images/memoire-2.jpg"
              alt="Page de titre du second mémoire"
            />
            <div>
              <h3>
                De la veille aux connaissances actionnables : quelle infovisualisation en appui
                aux politiques publiques ?
              </h3>
              <p>Université Paul-Valéry Montpellier 3, juin 2023</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mediation-final-quote">
        <p>
          Les techniques n’encapsulent pas la connaissance ; elles contribuent à la produire,
          la distribuer et parfois à la transformer en capacité d’agir.
        </p>
      </section>
    </main>
  );
}
