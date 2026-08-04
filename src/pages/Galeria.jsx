import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Seo from '../components/Seo'

const fotosQuartos = [
  { src: '/pool.jpeg', alt: 'Piscina e área de descanso do hotel' },
  { src: '/pool-2.jpeg', alt: 'Vista da piscina com espreguiçadeiras' },
  { src: '/room.jpeg', alt: 'Apartamento com ar-condicionado e TV' },
  { src: '/quarto-casal.jpeg', alt: 'Apartamento duplo, ideal para casais' },
  { src: '/quarto-familia.jpeg', alt: 'Apartamento família com camas de casal e solteiro' },
  { src: '/room-4.jpeg', alt: 'Corredor do apartamento com TV e espelho' },
  { src: '/room-6.jpeg', alt: 'Área de trabalho com frigobar' },
  { src: '/room-9.jpeg', alt: 'Detalhe da cama de casal' },
  { src: '/quarto-triplo.jpeg', alt: 'Bancada com TV e frigobar' },
  { src: '/room-2.jpeg', alt: 'Banheiro privativo com box' },
  { src: '/garage.jpeg', alt: 'Estacionamento privado coberto e descoberto' },
  { src: '/reception.jpeg', alt: 'Recepção Hotel Rios do Pantanal' },
]

const fotosCafe = [
  { src: '/breakfeast.jpeg', alt: 'Bancada e louças de café da manhã' },
  { src: '/breakfeast-2.jpeg', alt: 'Queijos, frios e frutas em cubos' },
  { src: '/breakfeast-3.jpeg', alt: 'Bolo de coco' },
  { src: '/breakfeast-5.jpeg', alt: 'Bancada de bolos e tortas' },
  { src: '/breakfeast-6.jpeg', alt: 'Fatias de melancia' },
  { src: '/breakfeast-4.jpeg', alt: 'Bolo de cenoura com cobertura de chocolate' },
  { src: '/breakfeast-7.jpeg', alt: 'Bancada de frutas e iogurtes' },
  { src: '/breakfeast-8.jpeg', alt: 'Biscoitos/Bolachas e quitutes' },
  { src: '/breakfeast-9.jpeg', alt: 'Salão de Café da Manhã' },
  { src: '/breakfeast-10.jpeg', alt: 'Buffet quente com salsicha ao molho calabresa e ovo mexido' },
  { src: '/breakfeast-11.jpeg', alt: 'Placa de sinalização ao refeitório "café da manhã"' },
]

function PhotoGrid({ photos, onOpen }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, i) => (
        <button
          key={photo.src}
          type="button"
          onClick={() => onOpen(photo, i)}
          className="group aspect-square overflow-hidden rounded-xl"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  )
}

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null) // { photos, index }

  function openLightbox(photos, photo) {
    const index = photos.findIndex((p) => p.src === photo.src)
    setLightbox({ photos, index })
  }

  function closeLightbox() {
    setLightbox(null)
  }

  function step(delta) {
    setLightbox((prev) => {
      if (!prev) return prev
      const total = prev.photos.length
      const index = (prev.index + delta + total) % total
      return { ...prev, index }
    })
  }

  const current = lightbox ? lightbox.photos[lightbox.index] : null

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <SectionTitle
          as="h1"
          eyebrow="Galeria"
          title="Conheça o hotel em fotos"
          subtitle="Apartamentos e café da manhã registrados no dia a dia do Rios do Pantanal Hotel."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-2xl text-pantanal-950 mb-6">Quartos e Acomodações</h2>
        <PhotoGrid photos={fotosQuartos} onOpen={(photo) => openLightbox(fotosQuartos, photo)} />
      </section>

      <section className="bg-dourado-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl text-pantanal-950 mb-6">Café da Manhã</h2>
          <img
            src="/cafe.jpg"
            alt="Café da manhã especial, incluso na hospedagem"
            className="mb-6 w-full rounded-2xl object-cover shadow-sm"
          />
          <PhotoGrid photos={fotosCafe} onOpen={(photo) => openLightbox(fotosCafe, photo)} />
        </div>
      </section>

      <Seo
        title="Galeria"
        description="Veja fotos reais dos apartamentos e do café da manhã do Rios do Pantanal Hotel, em Ladário, MS."
        path="/galeria"
      />

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-rio-950/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 text-3xl text-pantanal-100 hover:text-dourado-400"
            aria-label="Fechar"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            className="absolute left-2 text-4xl text-pantanal-100 hover:text-dourado-400 sm:left-6"
            aria-label="Foto anterior"
          >
            ‹
          </button>

          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            className="absolute right-2 text-4xl text-pantanal-100 hover:text-dourado-400 sm:right-6"
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
