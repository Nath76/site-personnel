import { useState } from 'react'
import Home from './pages/Home'
import Sociologie from './pages/Sociologie'
import Mediation from './pages/Mediation'
import Veille from './pages/Veille'
import About from './pages/About'
import Contact from './pages/Contact'

const pages = {
  home: Home,
  sociologie: Sociologie,
  mediation: Mediation,
  veille: Veille,
  about: About,
  contact: Contact,
}

export default function App() {
  const [page, setPage] = useState('home')
  const CurrentPage = pages[page]

  const navItems = [
    ['home', 'Accueil'],
    ['sociologie', 'Sociologie urbaine'],
    ['mediation', 'Médiation & dispositifs'],
    ['veille', 'Veille stratégique'],
    ['about', 'À propos'],
    ['contact', 'Contact'],
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setPage('home')}>
          <span className="brand-name">NATHALIE KA</span>
          <span className="brand-divider" />
          <span className="brand-tagline">Médiation, dispositifs et action publique</span>
        </button>

        <nav className="nav">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={`nav-link ${page === id ? 'active' : ''}`}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <CurrentPage go={setPage} />
    </div>
  )
}
