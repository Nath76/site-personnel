export default function Contact() {
  return (
    <main className="page-main section">
      <div className="panel" style={{maxWidth:"760px"}}>
        <p className="eyebrow">Contact</p>

        <h1>Échanger</h1>

        <p>
          Pour des échanges autour de travaux, publications,
          dispositifs ou projets de recherche :
        </p>

        <p>
          <strong>Email :</strong>{" "}
          <a href="mailto:nkakpo@hotmail.com">
            nkakpo@hotmail.com
          </a>
        </p>
      </div>
    </main>
  )
}

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
