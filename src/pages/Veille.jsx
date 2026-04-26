const dispositifs = [
{
title:"Observer, analyser, anticiper",
kicker:"StoryMap interactive",
image:"/site-personnel/images/storymap-veille.jpg",
imageClass:"image-contain",
text:"Une exploration internationale des dispositifs publics de veille, pensée pour rendre lisibles leurs périmètres, leurs méthodes et leurs formes de circulation des connaissances.",
link:"https://nath76.github.io/story-idea/#tab3",
linkLabel:"Voir le dispositif",
},
{
title:"Relire cinq ans de bulletin de veille",
kicker:"Tableau de bord réflexif",
image:"/site-personnel/images/powerbi-bulletin-mensuel.jpg",
imageClass:"image-contain",
text:"Un dispositif de relecture des contenus produits : volumes, thèmes, focus éditoriaux et évolutions d’un bulletin de veille coanimé pendant cinq ans.",
link:"https://app.powerbi.com/view?r=eyJrIjoiZGU0MzgyNGEtOWM0My00OGVkLTgyYTItMmJiMTAzZDk3NWIwIiwidCI6ImI1ZWNkMTJhLTQ5YzAtNGQ2MC04OTI5LWZjOTQwMzA1MGRkMyJ9",
linkLabel:"Explorer le tableau de bord",
},
{
title:"Visualiser les sujets traités",
kicker:"Cartographie des contenus",
image: "/site-personnel/images/world-topics-map.jpg",
imageClass:"image-contain",
text:"Une carte mondiale permettant d’identifier les espaces, pays et régions associés aux sujets suivis dans le bulletin.",
link:"https://app.powerbi.com/view?r=eyJrIjoiZGU0MzgyNGEtOWM0My00OGVkLTgyYTItMmJiMTAzZDk3NWIwIiwidCI6ImI1ZWNkMTJhLTQ5YzAtNGQ2MC04OTI5LWZjOTQwMzA1MGRkMyJ9",
linkLabel:"Explorer la cartographie",
}
]

const explorations = [
{
title:"Cartographier pour arbitrer",
kicker:"Carte interactive IGN",
image:"/site-personnel/images/ign-intelligence-territoriale.jpg",
imageClass:"image-contain",
text:"Une carte narrative sur l’intelligence territoriale, conçue comme support d’exploration, de comparaison et d’aide à la réflexion.",
link:"https://macarte.ign.fr/carte/XxwGzy/Clinique-de-l-individu-clinique-du-territoire",
linkLabel:"Voir la carte"
}
]

const formes = [
{
title:"Digest de veille",
kicker:"Application web",
image:"/site-personnel/images/digest-veille.jpg",
imageClass:"image-contain",
text:"Une forme éditoriale destinée à sélectionner, hiérarchiser et reformuler des signaux pour les rendre exploitables."
},
{
title:"Les îles françaises dans les coopérations de recherche de l’océan Indien",
kicker:"Analyse courte",
image:"/site-personnel/images/cep-ocean-indien.jpg",
imageClass:"image-contain",
text:"Une publication synthétique sur les coopérations de recherche agricoles et agroalimentaires dans l’océan Indien.",
link:"https://agriculture.gouv.fr/les-iles-francaises-dans-les-cooperations-de-recherche-de-locean-indien-analyse-ndeg213",
linkLabel:"Lire la publication"
}
]

function ProjectCard({item,wide=false}){

return(
<article className={`veille-card ${wide ? "veille-card-wide":""}`}>
<div className="veille-image-frame">
<img
src={item.image}
alt={item.title}
className={item.imageClass}
/>
</div>

<div className="veille-card-body">
<p className="project-kicker">{item.kicker}</p>
<h3>{item.title}</h3>
<p>{item.text}</p>

{item.link && (
<a href={item.link} target="_blank" rel="noreferrer">
{item.linkLabel}
</a>
)}

</div>
</article>
)

}

export default function Veille(){

return(

<main className="page-main section veille-page">

<section className="veille-hero">

<div className="veille-hero-copy">

<p className="eyebrow">Axe 3</p>

<h1>Veille stratégique & anticipation</h1>

<p className="hero-lead">
Comment concevoir des dispositifs qui rendent les résultats de la veille visibles et intelligibles ?
</p>

<p>
La veille suppose de concevoir des dispositifs capables de rendre des signaux plus lisibles, comparables et exploitables.
</p>

</div>

<div className="veille-hero-card">
<img
src="/site-personnel/images/storymap-veille.jpg"
alt="StoryMap"
/>
</div>

</section>

<section className="veille-section">
<div className="veille-section-head">
<p className="section-label">Dispositifs de veille</p>
<h2>Concevoir des dispositifs</h2>
</div>

<div className="veille-grid">
{dispositifs.map(item=>(
<ProjectCard item={item} key={item.title}/>
))}
</div>

</section>

<section className="veille-section">
<div className="veille-section-head">
<p className="section-label">Exploration</p>
<h2>Des dispositifs pour explorer</h2>
</div>

<div className="veille-grid single">
{explorations.map(item=>(
<ProjectCard item={item} key={item.title} wide/>
))}
</div>

</section>

<section className="veille-section">
<div className="veille-section-head">
<p className="section-label">Formes éditoriales</p>
<h2>Des formes éditoriales pour l’action</h2>
</div>

<div className="veille-grid">
{formes.map(item=>(
<ProjectCard item={item} key={item.title}/>
))}
</div>

</section>

</main>

)

}
