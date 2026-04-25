const publications = [
{
title:"L’islam des filles",
image:"/site-personnel/images/article-islam-filles.jpg",
link:"https://www.persee.fr/doc/diver_1769-8502_2005_num_142_1_2459",
type:"Article · Diversité"
},

{
title:"Relégation scolaire et recherche de requalification par l'islam",
image:"/site-personnel/images/article-relegation-islam.jpg",
link:"https://shs.cairn.info/revue-societes-contemporaines-2005-3-page-139?lang=fr",
type:"Article · Sociétés contemporaines"
},

{
title:"Ségrégation(s), culture et socialisation",
image:"/site-personnel/images/article-segregations.jpg",
link:"https://www.persee.fr/doc/diver_1769-8502_2011_num_164_1_3394",
type:"Article · Diversité"
},

{
title:"Lyon metropolis: economic development and social division of space",
image:"/site-personnel/images/article-territorio.jpg",
link:"#",
type:"Article · Territorio"
}
]

const chapitres = [
{
title:"Émeutes urbaines et protestations",
image:"/site-personnel/images/ouvrage-emeutes.jpg"
},

{
title:"Communauté d'expérience et diversité des trajectoires",
image:"/site-personnel/images/ouvrage-acteurs-faibles.jpg"
}
]

export default function Sociologie() {
return (

<main className="page-main section">

<div className="page-head">
<p className="eyebrow">Axe 1</p>

<h1>Sociologie urbaine</h1>

<p>
Travaux sur ségrégation, socialisations urbaines, migrations,
religion et espaces populaires.
</p>

<div className="tags">
{[
"Villes & sécurités",
"Migrations",
"Islam en France",
"Ségrégation",
"Politiques urbaines"
].map(tag=>(
<span key={tag} className="tag">{tag}</span>
))}
</div>

</div>


<section className="panel book-panel">

<h2>Monographie</h2>

<div className="book-feature">

<img
src="/site-personnel/images/livre-islam-jeunes.jpg"
alt="Couverture du livre"
/>

<div className="book-copy">

<h3>
L’islam, un recours pour les acteurs faibles ?
</h3>

<p>
Usages du référent religieux par des animateurs de centres sociaux.
</p>

<p className="muted">
Presses de Sciences Po
</p>

<a
href="https://shs.cairn.info/publications-de-nathalie-kakpo--9869?lang=fr"
target="_blank"
rel="noreferrer"
className="card-link"
>
Voir la notice →
</a>

</div>

</div>

</section>


<section className="pub-grid">

{publications.map(pub => (

<article className="publication-card" key={pub.title}>

<img src={pub.image} alt={pub.title} />

<div className="publication-body">

<div className="pub-type">
{pub.type}
</div>

<h3>
{pub.title}
</h3>

<a
href={pub.link}
target="_blank"
rel="noreferrer"
className="card-link"
>
Lire →
</a>

</div>

</article>

))}

</section>


<section className="panel full-width-panel">

<h2>Chapitres d’ouvrages</h2>

<div className="chap-grid">

{chapitres.map(item=>(

<article key={item.title} className="chapter-card">

<img
src={item.image}
alt={item.title}
/>

<h3>
{item.title}
</h3>

</article>

))}

</div>

</section>

</main>

)
}
