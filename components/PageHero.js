import Link from 'next/link'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  compact = false,
  primaryCta = { label: 'Request a Quote', href: '/contact' },
  secondaryCta = null
}) {
  return (
    <section className={`relative overflow-hidden bg-[#020817] ${compact ? 'min-h-[42vh]' : 'min-h-[58vh] lg:min-h-[68vh]'}`}>
      {image && (
        <img
          src={image}
          alt={imageAlt || ''}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020817_0%,rgba(2,8,23,0.88)_40%,rgba(2,8,23,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020817] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.12),transparent_28rem)]" />

      <div className={`container-max relative z-10 flex items-center ${compact ? 'py-16' : 'py-20 lg:py-28'}`}>
        <div className="motion-rise max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">{eyebrow}</p>
          )}
          <h1 className={`mt-4 font-extrabold leading-tight text-white ${compact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="rounded-md bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-200"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-md border border-slate-500/60 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
