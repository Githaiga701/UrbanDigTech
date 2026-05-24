import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const capabilities = [
  '24/7 IT monitoring and support',
  'Network and endpoint management',
  'System maintenance, patching, and optimization',
  'User support and helpdesk services',
  'Disaster recovery and business continuity'
]

export default function ManagedIT() {
  return (
    <>
      <Head>
        <title>Managed IT Services | Urban Digital Technologies</title>
      </Head>
      <Header />
      <main>
        <section className="tech-grid py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="motion-rise">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Managed IT</p>
              <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Proactive IT operations without the overhead.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">We manage the systems, users, endpoints, and continuity processes that keep your organization productive and resilient.</p>
              <Link href="/contact" className="mt-8 inline-block rounded-md bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Discuss Managed IT</Link>
            </div>
            <div className="glass-panel motion-rise-delay rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">What we provide</h2>
              <div className="mt-5 grid gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="rounded-md border border-slate-700/60 bg-slate-950/30 p-4 text-sm text-slate-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
