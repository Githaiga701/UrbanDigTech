import Link from 'next/link'

export default function CTABand({
  title = 'Ready to get started?',
  copy = 'Tell us what you need and we will map the right service, product, and support path.',
  primaryLabel = 'Request a Quote',
  primaryHref = '/contact',
  secondaryLabel = 'View All Services',
  secondaryHref = '/services'
}) {
  return (
    <section className="section-band py-16">
      <div className="container-max">
        <div className="glass-panel rounded-lg p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{copy}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
            <Link href={primaryHref} className="rounded-md bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="rounded-md border border-slate-600/70 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
