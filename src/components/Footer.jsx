import { NavLink } from 'react-router-dom'

const MAPS_LINK =
  'https://www.google.com/maps/place/Av.+14+de+Mar%C3%A7o,+1078+-+St.+1,+Lad%C3%A1rio+-+MS,+79370-000/@-19.0021474,-57.6085559,17z/data=!4m5!3m4!1s0x93870a57066a7277:0x5a938c9ea8988805!8m2!3d-19.0025583!4d-57.6076332'
const MAPS_EMBED_SRC = 'https://www.google.com/maps?q=-19.0025583,-57.6076332&z=16&output=embed'

export default function Footer() {
  return (
    <footer className="bg-pantanal-950 text-pantanal-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg text-dourado-500 mb-2">Rios do Pantanal</h3>
          <p className="text-sm text-pantanal-100/80">
            Conforto, hospitalidade e uma localização privilegiada em Ladário, próximo ao Pantanal Sul-Mato-Grossense, para que você se sinta em casa durante toda a sua estadia.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-dourado-400 mb-2">
            Contato
          </h4>
          <ul className="space-y-1 text-sm text-pantanal-100/80 break-words">
            <li>WhatsApp: (67) 99874-0207</li>
            <li>hotelriosdopantanal@hotmail.com</li>
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-dourado-400">
                Av. 14 de Março, 1068 — Ladário-Corumbá/MS, 79370-000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-dourado-400 mb-2">
            Navegação
          </h4>
          <ul className="space-y-1 text-sm text-pantanal-100/80">
            <li><NavLink to="/sobre" className="hover:text-dourado-400">Sobre nós</NavLink></li>
            <li><NavLink to="/quartos" className="hover:text-dourado-400">Quartos</NavLink></li>
            <li><NavLink to="/galeria" className="hover:text-dourado-400">Galeria</NavLink></li>
            <li><NavLink to="/reserva" className="hover:text-dourado-400">Faça sua Reserva</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-dourado-400 mb-2">
            Localização
          </h4>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl ring-1 ring-pantanal-100/10"
          >
            <iframe
              title="Mapa - Rios do Pantanal Hotel"
              src={MAPS_EMBED_SRC}
              className="h-32 w-full grayscale-[30%] pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-pantanal-800 py-4 px-4 mx-auto max-w-6xl flex flex-col gap-2 text-center text-xs text-pantanal-100/60 sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Rios do Pantanal. Todos os direitos reservados.</span>
        <a
          href="https://portfolio-pied-ten-56.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-dourado-400"
        >
          Site desenvolvido por Lua Web Development
        </a>
      </div>
    </footer>
  )
}
