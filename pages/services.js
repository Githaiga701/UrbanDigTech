import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  {
    href: '/services/managed-it',
    title: 'Managed IT Services',
    copy: 'Proactive monitoring, helpdesk, patching, asset management, continuity planning, and day-to-day IT operations.',
    points: ['24/7 monitoring', 'Endpoint management', 'User support']
  },
  {
    href: '/services/cloud',
    title: 'Cloud Management',
    copy: 'Cloud migration, resource governance, backup, security, and optimization across public, private, and hybrid platforms.',
    points: ['Migration planning', 'Multi-cloud management', 'Cost control']
  },
  {
    href: '/services/cybersecurity',
    title: 'Cybersecurity',
    copy: 'Threat monitoring, endpoint protection, vulnerability management, access controls, and incident response.',
    points: ['Threat detection', 'Identity controls', 'Response planning']
  },
  {
    href: '/contact',
    title: 'Imported Apple Products',
    copy: 'Sourcing and supply support for MacBook, iPhone, iPad, Apple Watch, accessories, and business device requests.',
    points: ['MacBook', 'iPhone and iPad', 'Accessories']
  },
  {
    href: '/contact',
    title: 'Importing Services',
    copy: 'Product sourcing, procurement coordination, supplier follow-up, shipment planning, and import communication.',
    points: ['Source', 'Confirm', 'Coordinate']
  },
  {
    href: '/services',
    title: 'Infrastructure & Hosting',
    copy: 'Server, network, storage, virtualization, hosting, backup, and business continuity support.',
    points: ['Hosting', 'Backup', 'Continuity']
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Urban Digital Technologies</title>
        <meta name="description" content="Managed IT, cloud, cybersecurity, imported Apple products, and importing services from Urban Digital Technologies." />
      </Head>
      <Header />
      <main>
        <section className="tech-grid py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="motion-rise max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Services</p>
              <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Technology services, Apple supply, and imports in one business workflow.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">We combine infrastructure support, cloud operations, cybersecurity, Apple product sourcing, and importing support into practical services for modern teams.</p>
            </div>
            <div className="glass-panel motion-rise-delay rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">Quick contact</h2>
              <div className="mt-5 grid gap-3 text-sm">
                <a href="tel:+254703437447" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 text-cyan-100 transition hover:border-cyan-300/50">Kenya: +254 703 437447</a>
                <a href="tel:+971526123126" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 text-cyan-100 transition hover:border-cyan-300/50">Business: +971 52 612 3126</a>
                <a href="mailto:Kevin.musomi@atlantisdubai.com" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 text-cyan-100 transition hover:border-cyan-300/50">Kevin.musomi@atlantisdubai.com</a>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-max grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span key={point} className="rounded-md border border-slate-600/70 bg-slate-950/30 px-3 py-1 text-xs text-slate-300">{point}</span>
                  ))}
                </div>
                <div className="mt-6 text-sm font-semibold text-cyan-200">{service.href === '/contact' ? 'Start request' : 'View details'}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
