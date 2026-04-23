export default function Contact() {
  return (
    <main className="page-main section contact-page">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Échanger autour d’un projet, d’une recherche ou d’un dispositif</h1>
          <p>
            Pour toute prise de contact, collaboration ou échange professionnel, vous pouvez me
            joindre via les coordonnées ci-dessous.
          </p>
          <ul className="contact-list">
          <li>https://www.linkedin.com/in/nathaliekakpo</li>
          </ul>
        </div>

        <form className="panel contact-form">
          <label>
            Nom
            <input type="text" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" placeholder="votre@email.com" />
          </label>
          <label>
            Message
            <textarea rows="6" placeholder="Votre message" />
          </label>
          <button type="button" className="primary-btn">
            Envoyer le message
          </button>
        </form>
      </div>
    </main>
  )
}
