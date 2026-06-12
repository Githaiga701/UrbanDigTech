import Link from 'next/link'
import services from '../data/services'

const quickLinks = [
  ['Products', '/products'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
  ['Contact', '/contact']
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[#020817]">
      <div className="container-max grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="font-semibold text-slate-100">Urban Digital Technologies</div>
          <p className="mt-2 text-sm leading-6 text-slate-400">Hardware, cloud, cybersecurity, networking, managed services, and AV & ELV solutions.</p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Services</div>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="transition hover:text-cyan-100">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Explore</div>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {quickLinks.map(([label, href]) => (
              <Link key={label} href={href} className="transition hover:text-cyan-100">{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</div>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="tel:+254703437447" className="text-cyan-200 transition hover:text-white">+254 703 437447</a>
            <a href="tel:+971526123126" className="text-cyan-200 transition hover:text-white">+971 52 612 3126</a>
            <a href="mailto:Kevin.musomi@atlantisdubai.com" className="text-cyan-200 transition hover:text-white">Kevin.musomi@atlantisdubai.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
