import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/quartos', label: 'Quartos' },
  { to: '/galeria', label: 'Galeria' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
      isActive ? 'text-dourado-700' : 'text-rio-950 hover:text-dourado-700'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
        <NavLink to="/" className="flex items-center">
          <img src="/logo-horizontal.png" alt="Rios do Pantanal Hotel" className="h-12 w-auto md:h-14" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/reserva"
            className="ml-2 rounded-full bg-dourado-500 px-5 py-2 text-sm font-semibold text-pantanal-950 transition hover:bg-dourado-400"
          >
            Faça sua Reserva
          </NavLink>
        </nav>

        <button
          className="md:hidden text-rio-950 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col bg-white px-4 pb-4 gap-1 border-t border-pantanal-800/10">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/reserva"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-dourado-500 px-5 py-2 text-center text-sm font-semibold text-pantanal-950"
          >
            Faça sua Reserva
          </NavLink>
        </nav>
      )}
    </header>
  )
}
