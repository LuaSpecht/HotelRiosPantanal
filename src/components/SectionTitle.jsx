export default function SectionTitle({ eyebrow, title, subtitle, light = false, as = 'h2' }) {
  const Heading = as

  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-dourado-400' : 'text-dourado-500'}`}>
          {eyebrow}
        </span>
      )}
      <Heading className={`font-display text-3xl md:text-4xl mt-2 ${light ? 'text-pantanal-100' : 'text-pantanal-950'}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? 'text-pantanal-100/80' : 'text-pantanal-800/80'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
