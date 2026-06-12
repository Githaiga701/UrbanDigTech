import Link from 'next/link'

export default function ServiceCard({ service, featured = false }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`glass-panel group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 ${featured ? '' : ''}`}
    >
      <img
        src={service.heroImage}
        alt={service.title}
        className={`w-full object-cover transition duration-500 group-hover:scale-105 ${featured ? 'h-48' : 'h-40'}`}
      />
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs font-extrabold text-cyan-100">
            {service.code}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-xs text-cyan-200/80">{service.tagline}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">{service.copy}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.points.slice(0, 3).map((point) => (
            <span key={point} className="rounded-md border border-slate-600/70 bg-slate-950/30 px-2 py-1 text-xs text-slate-300">
              {point}
            </span>
          ))}
        </div>
        <div className="mt-5 text-sm font-semibold text-cyan-200">Explore service →</div>
      </div>
    </Link>
  )
}
