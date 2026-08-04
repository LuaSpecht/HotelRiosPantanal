import SectionTitle from '../components/SectionTitle'
import Seo from '../components/Seo'

const comodidadesGerais = [
  'Ar-condicionado split',
  'TV 32"',
  'Frigobar',
  'Wi-Fi gratuito',
  'Banheiro privativo',
]

const quartos = [
  {
    title: 'Apartamento Individual',
    capacidade: '1 hóspede',
    img: '/quarto-individual.jpeg',
    text: 'Ideal para quem viaja sozinho, oferecendo conforto, praticidade e toda a estrutura do hotel para uma estadia tranquila.',
  }, 
  {
    title: 'Apartamento Duplo',
    capacidade: 'até 2 hóspedes',
    img: '/quarto-duplo.jpeg',
    text: 'Ideal para amigos, colegas de trabalho ou familiares, oferecendo conforto, praticidade e toda a estrutura do hotel.',
  },
  {
    title: 'Apartamento Casal',
    capacidade: 'até 2 hóspedes',
    img: '/quarto-casal.jpeg',
    text: 'Amplo e confortável, ideal para casais, com toda a estrutura do hotel incluída na hospedagem.',
  },  
  {
    title: 'Apartamento Triplo',
    capacidade: 'até 3 hóspedes',
    img: '/quarto-triplo.jpeg',
    text: 'Perfeito para famílias pequenas ou grupos de amigos, oferecendo conforto, espaço e praticidade durante toda a estadia.',
  },
  {
    title: 'Apartamento Família',
    capacidade: 'até 4 hóspedes',
    img: '/quarto-familia.jpeg',
    text: 'Pensado para famílias, com espaço confortável para todos durante a estadia.',
  },
]

export default function Quartos() {
  return (
    <div className="pt-24">
      <Seo
        title="Quartos e Apartamentos"
        description="Apartamentos amplos com ar-condicionado split, TV 32'', frigobar e Wi-Fi gratuito. Categorias para casais, grupos e famílias no Rios do Pantanal Hotel."
        path="/quartos"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <SectionTitle
          as="h1"
          eyebrow="Acomodações"
          title="Apartamentos amplos e confortáveis"
          subtitle="Todos os apartamentos contam com ar-condicionado split, TV de 32'', frigobar e Wi-Fi gratuito — além de café da manhã incluso na hospedagem."
        />
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {comodidadesGerais.map((c) => (
            <li
              key={c}
              className="rounded-full bg-pantanal-100 px-4 py-1.5 text-sm font-medium text-pantanal-800"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          {quartos.map((q) => (
            <div key={q.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pantanal-800/5">
              <img src={q.img} alt={q.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-dourado-500">
                  {q.capacidade}
                </span>
                <h3 className="font-display mt-1 text-xl text-pantanal-950">{q.title}</h3>
                <p className="mt-2 text-sm text-pantanal-800/80">{q.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
