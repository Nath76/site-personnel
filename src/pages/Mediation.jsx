const concepts = [
{
title: 'Dispositif infocommunicationnel',
text: 'Les dispositifs ne sont pas de simples supports : ils organisent la circulation du sens, configurent les médiations et rendent certaines formes de connaissance visibles ou actionnables.'
},
{
title: 'Cognition distribuée',
text: 'La pensée ne réside pas seulement dans les sujets ; elle se déploie dans des agencements faits d’artefacts, d’instruments et de chaînes sociotechniques.'
},
{
title: 'Artefact',
text: 'Cartes, écritures, graphes, plateformes ou agents IA peuvent être appréhendés comme des artefacts opérant un travail sur le sens.'
},
{
title: 'Connaissance actionnable',
text: 'Comment transformer l’information en prise pour l’action ? Cette question traverse mes recherches sur veille, dispositifs et apprentissages organisationnels.'
}
]

export default function Mediation() {
return (
<main className="page-main section">

<section className="page-head">
<p className="eyebrow">Axe 2</p>
<h1>Médiation & dispositifs</h1>
<p>
Une réflexion sur les médiations comme opérations sur le sens, sur les dispositifs
comme agencements sociotechniques et sur leurs usages dans l’enquête, la connaissance
et l’action.
</p>
</section>


<section className="panel full-width-panel">
<h2>Transmettre par l’enquête</h2>

<p>
Expérience pédagogique conduite avec des étudiants architectes autour de l’observation
des espaces urbains ordinaires, des perceptions de sécurité publique et des conditions
sociales de l’urbanité.
</p>

<ul className="simple-list">
<li>
<strong>Sécurité publique et usages ordinaires de l’espace :</strong>
observer les configurations spatiales susceptibles de favoriser présence,
vigilance mutuelle ou vulnérabilité.
</li>

<li>
<strong>Référence à Jane Jacobs :</strong>
la notion de <em>eyes on the street</em> comme point d’appui pour penser les
conditions relationnelles de la sûreté urbaine.
</li>

<li>
<strong>Dispositif interdisciplinaire :</strong>
croiser regard sociologique, cartographie, observation de terrain, entretiens
et productions étudiantes.
</li>
</ul>

<div className="tags">
<span className="tag">Jane Jacobs</span>
<span className="tag">Sécurité publique</span>
<span className="tag">Observation</span>
<span className="tag">Cartographie</span>
<span className="tag">Pédagogie de terrain</span>
</div>

</section>


<section className="full-width-panel">
<div className="page-head">
<h2>Penser les dispositifs</h2>
<p>
Cette réflexion s’appuie notamment sur deux mémoires de master consacrés aux dispositifs
numériques, à la connaissance et aux médiations techniques.
</p>
</div>

<div className="concept-grid">
{concepts.map((concept) => (
<article key={concept.title} className="panel concept-panel">
<h2>{concept.title}</h2>
<p>{concept.text}</p>
</article>
))}
</div>

</section>


<section className="panel full-width-panel">
<h2>Mémoires de master</h2>

<ul className="simple-list">
<li>
<strong>Management de la connaissance, apprentissage organisationnel et intelligence stratégique</strong>
</li>

<li>
<strong>Second mémoire (à intégrer)</strong>
</li>
</ul>

<p className="muted">
Ces recherches constituent un arrière-plan théorique pour l’intérêt porté aujourd’hui
aux graphes, aux dispositifs documentaires et aux intelligences artificielles.
</p>

</section>


<section className="panel quote-panel">
<p>
Les techniques n’encapsulent pas la connaissance ; elles contribuent à la produire,
la distribuer et parfois à la transformer en capacité d’agir.
</p>
</section>

</main>
)
}
