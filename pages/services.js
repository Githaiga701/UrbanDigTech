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
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Urban Digital Technologies</title>
        <meta name="description" content="Managed IT, cloud, cybersecurity, and infrastructure services from Urban Digital Technologies." />
      </Head>
      <Header />
      <main>
        <section className="tech-grid py-20">
          <div className="container-max">
            <div className="motion-rise max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Services</p>
              <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Managed technology services for secure business operations.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">We combine infrastructure support, cloud operations, and cybersecurity into practical services that reduce downtime and improve visibility.</p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-max grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span key={point} className="rounded-md border border-slate-600/70 bg-slate-950/30 px-3 py-1 text-xs text-slate-300">{point}</span>
                  ))}
                </div>
                <div className="mt-6 text-sm font-semibold text-cyan-200">View details</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
