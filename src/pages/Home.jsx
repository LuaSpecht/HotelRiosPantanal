import { NavLink } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Seo from '../components/Seo'

const highlights = [
  {
    title: 'Quartos Confortáveis',
    text: 'Apartamentos amplos com ar-condicionado split, TV 32" e frigobar.',
    icon: '🛏️',
  },
  {
    title: 'Piscina e Descanso',
    text: 'Área externa com piscina, ideal para relaxar durante a estadia.',
    icon: '🏊',
  },
  {
    title: 'Café da Manhã Incluso',
    text: 'Café da manhã farto, com frutas, bolos, pães, tortas e sucos naturais.',
    icon: '🍽️',
  },
  {
    title: 'Localização Privilegiada',
    text: 'Proximidade encantadora do Pantanal, perto de Corumbá e da fronteira com a Bolívia.',
    icon: '📍',
  },
]

const stats = [
  { value: '3 km', label: 'Do centro de Corumbá' },
  { value: '8 km', label: 'Da fronteira Brasil/Bolívia' },
  { value: '24h', label: 'Recepção sempre disponível' },
]

export default function Home() {
  return (
    <div>
      <Seo
        title="Hotel em Ladário, MS"
        description="Hospedagem em Ladário, a 3 km de Corumbá e 8 km da fronteira Brasil/Bolívia, com vista panorâmica para o Pantanal Sul Mato-grossense. Apartamentos confortáveis, piscina e café da manhã incluso."
        path="/"
      />
      <section className="relative flex min-h-screen items-start justify-center overflow-hidden bg-pantanal-950 pt-28 text-center md:items-center md:pt-0">
        <img
          src="/pantanal-hero.webp"
          alt="Vista panorâmica do Pantanal Sul Mato-grossense"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pantanal-950 via-pantanal-950/70 to-pantanal-950/30" />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-dourado-400">
            Ladário - Corumbá · Mato Grosso do Sul
          </span>
          <h1 className="font-display mt-4 text-4xl leading-tight text-pantanal-100 md:text-6xl">
            Conforto para você se sentir em casa.
          </h1>
          <p className="mt-6 text-sm text-pantanal-100/85 md:text-lg">
            Localizado em Ladário, a apenas 8 minutos do centro de Corumbá e 8 km da fronteira com a Bolívia, o Hotel Rios do Pantanal une conforto, praticidade e hospitalidade, trabalhando para que cada estadia seja uma verdadeira extensão do seu lar.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <NavLink
              to="/quartos"
              className="rounded-full bg-dourado-500 px-8 py-3 text-sm font-semibold text-pantanal-950 shadow-lg transition hover:bg-dourado-400"
            >
              Ver Quartos
            </NavLink>
            <NavLink
              to="/reserva"
              className="rounded-full border border-pantanal-100/40 px-8 py-3 text-sm font-semibold text-pantanal-100 transition hover:border-dourado-400 hover:text-dourado-400"
            >
              Faça sua Reserva
            </NavLink>
          </div>
        </div>
      </section>

      <section className="bg-dourado-100 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Nossa estrutura"
            title="Tudo que você precisa para uma estadia perfeita"
            subtitle="Conforto e comodidade para famílias, casais e grupos, com a natureza do Pantanal ao redor."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pantanal-800/5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">{h.icon}</div>
                <h3 className="font-display mt-4 text-lg text-pantanal-950">{h.title}</h3>
                <p className="mt-2 text-sm text-pantanal-800/80">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rio-900 py-16 text-pantanal-100">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-dourado-400">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-pantanal-100/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img
            src="/pool.jpeg"
            alt="Piscina e área externa do hotel"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <SectionTitle
              eyebrow="Sobre o hotel"
              title="Conforto e localização privilegiada"
              subtitle={null}
            />
            <p className="text-pantanal-800/80">
              Próximo às belezas do Pantanal Sul-Mato-Grossense, oferecemos apartamentos confortáveis, café da manhã incluso e uma estrutura completa para sua estadia.
            </p>
            <NavLink
              to="/sobre"
              className="mt-6 inline-block rounded-full bg-pantanal-800 px-6 py-3 text-sm font-semibold text-pantanal-100 transition hover:bg-pantanal-700"
            >
              Conheça o hotel
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
