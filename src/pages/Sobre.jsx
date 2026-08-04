import SectionTitle from '../components/SectionTitle'
import Seo from '../components/Seo'

const valores = [
  { title: 'Localização privilegiada do Pantanal', text: 'No centro de Ladário, a 3 km de Corumbá e 8 km da fronteira Brasil/Bolívia, para uma experiência única de proximidade com este bioma único latino-americano.' },
  { title: 'Hospitalidade genuína', text: 'Recepção 24 horas para receber você a qualquer hora do dia ou da noite.' },
  { title: 'Conforto sem complicação', text: 'Apartamentos amplos, café da manhã farto e estacionamento gratuito inclusos na hospedagem.' },
]

const facilidades = [
  {
    title: 'Piscina e Área de Descanso',
    img: '/pool.jpeg',
    text: 'Piscina ao ar livre cercada por jardim e coqueiros, ideal para relaxar entre um passeio e outro.',
    icon: '🏊',
  },
  {
    title: 'Café da Manhã Incluso',
    img: '/breakfeast-4.jpeg',
    text: 'Café da manhã bem farto, com frutas, bolos, pães, tortas, sucos naturais, frios e muito mais.',
    icon: '🍽️',
  },
  {
    title: 'Wi-Fi Gratuito',
    img: '/quarto-duplo.jpeg',
    text: 'Internet wireless liberada em todo o hotel, sem custo adicional.',
    icon: '📶',
  },
  {
    title: 'Recepção 24 Horas',
    img: '/reception.jpeg',
    text: 'Equipe disponível a qualquer hora para o que você precisar durante a estadia.',
    icon: '🛎️',
  },
  {
    title: 'Estacionamento Gratuito',
    img: '/garage.jpeg',
    text: 'Vaga garantida e sem custo para hóspedes que chegam de carro.',
    icon: '🅿️',
  },
  {
    title: 'Localização Privilegiada',
    img: '/pantanal-hero.webp',
    text: 'Experiência única de proximidade com o Pantanal Sul Mato-grossense.',
    icon: '🌅',
  },
]

export default function Sobre() {
  return (
    <div className="pt-24">
      <Seo
        title="Sobre o Hotel"
        description="Conheça o Rios do Pantanal Hotel: localização privilegiada em Ladário, estrutura completa e hospitalidade pantaneira a poucos minutos de Corumbá."
        path="/sobre"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <img
          src="/logo-horizontal.png"
          alt="Rios do Pantanal Hotel"
          className="mx-auto mb-8 h-24 w-auto"
        />
        <SectionTitle
          as="h1"
          eyebrow="Quem somos"
          title="No coração de Ladário, perto das belezas do Pantanal"
          subtitle="O Hotel Rios do Pantanal está localizado em uma região privilegiada de Ladário, a apenas 3 km do centro de Corumbá e 8 km da fronteira entre Brasil e Bolívia. Próximo ao Pantanal Sul-Mato-Grossense, oferecemos conforto, praticidade e hospitalidade para que cada estadia seja uma verdadeira extensão do seu lar."
        />
      </section>

      <section className="bg-dourado-100 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img
            src="/pool.jpeg"
            alt="Fachada e piscina do hotel"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <h3 className="font-display text-2xl text-pantanal-950">Conforto para toda a estadia</h3>
            <p className="mt-4 text-pantanal-800/80">
              Nossos apartamentos são amplos e confortáveis, equipados com
              ar-condicionado split, TV de 32" e frigobar. Em todo o hotel
              você tem acesso gratuito à internet por wi-fi.
            </p>
            <p className="mt-4 text-pantanal-800/80">
              O café da manhã está incluído na hospedagem e é bem farto, com
              frutas, bolos, pães, tortas, sucos naturais, frios e muito
              mais. Contamos ainda com área de descanso com piscina,
              recepção 24 horas e estacionamento gratuito.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Por que se hospedar aqui" title="O que guia nossa hospitalidade" />
        <div className="grid gap-6 sm:grid-cols-3">
          {valores.map((v) => (
            <div key={v.title} className="rounded-2xl border border-pantanal-800/10 p-6">
              <h4 className="font-display text-lg text-pantanal-950">{v.title}</h4>
              <p className="mt-2 text-sm text-pantanal-800/80">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dourado-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Estrutura"
            title="Facilidades para sua estadia"
            subtitle="Tudo incluso na hospedagem, para você aproveitar o Pantanal sem se preocupar com o resto."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilidades.map((f) => (
              <div key={f.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pantanal-800/5">
                <img src={f.img} alt={f.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <div className="text-2xl">{f.icon}</div>
                  <h3 className="font-display mt-2 text-lg text-pantanal-950">{f.title}</h3>
                  <p className="mt-2 text-sm text-pantanal-800/80">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
