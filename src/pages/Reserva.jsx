import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Seo from '../components/Seo'

const WHATSAPP_NUMBER = '5567998740207'

export default function Reserva() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    checkin: '',
    checkout: '',
    hospedes: '2',
    mensagem: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const linhas = [
      'Olá! Vim do site e gostaria de fazer uma reserva no Hotel Rios do Pantanal.',
      '',
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Check-in: ${form.checkin}`,
      `Check-out: ${form.checkout}`,
      `Hóspedes: ${form.hospedes}`,
    ]
    if (form.mensagem.trim()) {
      linhas.push(`Mensagem: ${form.mensagem}`)
    }

    const texto = encodeURIComponent(linhas.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank')
  }

  return (
    <div className="pt-24">
      <Seo
        title="Faça sua Reserva"
        description="Reserve sua estadia no Rios do Pantanal Hotel, em Ladário, MS. Envie os dados da sua reserva direto pelo WhatsApp."
        path="/reserva"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <SectionTitle
          as="h1"
          eyebrow="Reserva"
          title="Faça sua reserva"
          subtitle="Preencha o formulário e finalize direto pelo WhatsApp. Respondemos em até 24h."
        />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pantanal-800/5">
            <div>
              <label className="mb-1 block text-sm font-medium text-pantanal-950">Nome</label>
              <input
                required
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-pantanal-950">E-mail</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
                placeholder="voce@email.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-pantanal-950">Check-in</label>
                <input
                  required
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-pantanal-950">Check-out</label>
                <input
                  required
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-pantanal-950">Hóspedes</label>
              <input
                required
                type="number"
                name="hospedes"
                min="1"
                value={form.hospedes}
                onChange={handleChange}
                className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-pantanal-950">Mensagem</label>
              <textarea
                rows={3}
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                className="w-full rounded-lg border border-pantanal-800/20 px-4 py-2 outline-none focus:border-dourado-500"
                placeholder="Alguma preferência de quarto ou observação?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-dourado-500 px-6 py-3 text-sm font-semibold text-pantanal-950 transition hover:bg-dourado-400"
            >
              Enviar pedido pelo WhatsApp
            </button>
            <p className="text-xs text-pantanal-800/60">
              Ao enviar, o WhatsApp abrirá com sua mensagem pronta para
              confirmarmos a reserva.
            </p>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-pantanal-950 p-6 text-pantanal-100">
              <h3 className="font-display text-lg text-dourado-400">Fale direto conosco</h3>
              <ul className="mt-4 space-y-2 text-sm text-pantanal-100/85">
                <li>WhatsApp: (67) 99874-0207</li>
                <li>E-mail: contato@hotelriosdopantanal.com</li>
                <li>Av. 14 de Março, 1068 — Ladário, MS, 79370-000</li>
                <li>Atendimento: todos os dias, 8h às 20h</li>
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/pantanal-hero.webp"
                alt="Pantanal ao entardecer"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
