import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Urban Digital Technologies</title>
        <meta name="description" content="Learn about Urban Digital Technologies and its managed technology approach." />
      </Head>
      <Header />
      <main>
        <section className="tech-grid py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="motion-rise">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">About</p>
              <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">A technology partner focused on resilience, security, and growth.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">Urban Digital Technologies provides end-to-end IT management and digital transformation services for organizations that need reliable, secure, and scalable systems.</p>
            </div>

            <div className="glass-panel motion-rise-delay rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">How we work</h2>
              <p className="mt-4 leading-7 text-slate-400">We align technology operations to the way a business actually runs. That means clear assessment, practical implementation, continuous monitoring, and ongoing improvements that leadership can measure.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Proactive support', 'Security-first design', 'Cloud-ready planning', 'Clear reporting'].map((item) => (
                  <div key={item} className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 text-sm font-semibold text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max grid gap-5 md:grid-cols-2">
            <section className="glass-panel rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">Mission</h2>
              <p className="mt-3 leading-7 text-slate-400">To empower businesses through reliable, secure, and innovative technology solutions that support growth, resilience, and digital transformation.</p>
            </section>
            <section className="glass-panel rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">Vision</h2>
              <p className="mt-3 leading-7 text-slate-400">To become a trusted technology partner delivering world-class managed IT, cloud, and cybersecurity services for modern organizations.</p>
            </section>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-white">Why businesses choose Urban Digital Technologies</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ['Operational reliability', 'Structured management that reduces outages and improves support response.'],
                ['Security at the core', 'Protection, access, backup, and response practices built into every service line.'],
                ['Scalable partnerships', 'Flexible managed services that grow with infrastructure, teams, and workloads.']
              ].map(([title, copy]) => (
                <div key={title} className="glass-panel rounded-lg p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
