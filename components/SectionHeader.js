import Link from 'next/link'

export default function SectionHeader({ eyebrow, title, copy, action = null }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{eyebrow}</p>
        )}
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {copy && <p className="mt-4 text-slate-400">{copy}</p>}
      </div>
      {action && (
        <Link href={action.href} className="shrink-0 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
          {action.label} →
        </Link>
      )}
    </div>
  )
}
