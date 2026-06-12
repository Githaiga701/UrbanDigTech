import Link from 'next/link'

export default function ProductCard({ product, showServiceLink = false, serviceTitle = '' }) {
  return (
    <article className="glass-panel overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <img src={product.image} alt={product.name} className="h-44 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {product.brands.map((brand) => (
            <span key={brand} className="rounded-md border border-slate-600/70 bg-slate-950/30 px-2 py-0.5 text-xs text-slate-300">
              {brand}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-semibold text-white">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{product.copy}</p>
        {showServiceLink && serviceTitle && (
          <Link href={`/services/${product.service}`} className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200 transition hover:text-cyan-100">
            Part of {serviceTitle}
          </Link>
        )}
        <Link href="/contact" className="mt-4 block text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
          Request pricing →
        </Link>
      </div>
    </article>
  )
}
