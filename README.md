# Rios do Pantanal Hotel

SPA institucional do Rios do Pantanal Hotel — hospedagem em Ladário, MS, a
3 km de Corumbá e 8 km da fronteira Brasil/Bolívia, com vista panorâmica para
o Pantanal Sul Mato-grossense. React + Vite + Tailwind CSS v4 + React Router.

Identidade visual baseada na logo oficial: azul-marinho e verde como cores
principais, com marrom e dourado como acentos elegantes.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # testar o build localmente
```

## Estrutura

```
src/
  components/   Header, Footer, WhatsAppButton, SectionTitle, Seo
  pages/        Home, Sobre, Quartos, Reserva
  index.css     tema Tailwind (cores "pantanal" verde, "rio" azul, "marrom", "dourado")
public/
  logo.png             logo original enviada (vertical)
  logo-icon.png        apenas o símbolo (peixe/folha)
  logo-horizontal.png  lockup horizontal oficial (usado no Header e na página Sobre)
  logo-full.png        símbolo + nome empilhado (usado no JSON-LD/OG)
  favicon.png          ícone da aba do navegador
  piscina.jpg          foto real da piscina do hotel
  pantanal-hero.webp   foto aérea real do Pantanal (hero da Home)
  robots.txt           libera indexação para todos os buscadores
  sitemap.xml          lista as 4 páginas do site
```

## SEO

- `src/components/Seo.jsx` centraliza título, meta description, canonical e
  tags Open Graph/Twitter Card de cada página (usa `react-helmet-async`).
- `index.html` tem os dados estruturados (JSON-LD, tipo `Hotel`) com nome,
  endereço, telefone, geolocalização e comodidades reais.
- Cada página tem exatamente um `<h1>` (via prop `as="h1"` no `SectionTitle`).
- Domínio oficial: `hotelriosdopantanal.com`, já configurado em `Seo.jsx`,
  `index.html` (JSON-LD), `robots.txt` e `sitemap.xml`.

## Pendências / próximos passos

- Trocar as imagens de placeholder (picsum.photos) por fotos reais do hotel.
- Confirmar o e-mail de contato (usei `contato@hotelriosdopantanal.com` como
  sugestão, baseado no domínio — ainda não confirmado) no `Footer` e na
  página `Reserva`.
- Cadastrar o site no Google Search Console e enviar o `sitemap.xml` assim que
  estiver no ar, para acelerar a indexação.
