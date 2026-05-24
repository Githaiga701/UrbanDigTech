import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const serviceCards = [
  ['MS', 'Managed Services', 'Proactive IT operations, monitoring, patching, support, and infrastructure care.'],
  ['HD', 'IT Support', 'Responsive helpdesk coverage that keeps users productive and systems available.'],
  ['CS', 'Cybersecurity', 'Threat monitoring, endpoint protection, identity controls, and incident response.'],
  ['CL', 'Cloud Services', 'Cloud migration, hybrid management, backup, governance, and cost optimization.']
]

const featured = ['Microsoft 365', 'Azure', 'AWS', 'Google Cloud', 'Defender', 'Power BI', 'SharePoint', 'Endpoint Security']

const testimonials = [
  ['Operations Lead', 'Urban Digital helped us bring support, monitoring, and security reporting into one clear process.'],
  ['Finance Director', 'The biggest improvement was predictability. We know what is being managed, what needs attention, and what comes next.'],
  ['IT Coordinator', 'Their managed services gave our internal team breathing room while improving response times for users.']
]

const benefits = [
  'Predictable managed service coverage.',
  'Responsive support for teams and devices.',
  'Security controls built into daily operations.',
  'Cloud and hybrid systems managed from one plan.',
  'Backup, recovery, and continuity planning.',
  'Reporting that keeps leadership informed.'
]

const workflowItems = [
  ['Employee Onboarding', 'Prepare accounts, devices, access, and policies so new team members are ready faster.'],
  ['Central IT Management', 'Track infrastructure health, support activity, risks, assets, and improvement priorities.'],
  ['Strategic IT Projects', 'Plan migrations, office moves, compliance work, and system upgrades with a managed partner.'],
  ['Real-time Support', 'Give users a clear route to help when work is blocked by IT issues.']
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Digital Technologies | Managed IT, Cloud & Cybersecurity</title>
        <meta name="description" content="Professional managed IT, cloud, cybersecurity, and infrastructure services for growing organizations." />
        <meta property="og:title" content="Urban Digital Technologies | Managed IT, Cloud & Cybersecurity" />
        <meta property="og:description" content="Secure, scalable, and proactive technology operations for modern businesses." />
        <meta property="og:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main>
        <section className="tech-grid relative overflow-hidden">
          <div className="container-max grid min-h-[calc(100vh-141px)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div className="motion-rise max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">You request. We plan. We deliver.</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Managed IT services for companies that need dependable technology.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Get proactive support, cloud management, cybersecurity, backup planning, and infrastructure oversight from one accountable technology partner.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="rounded-md bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-200">
                  Request a Consultation
                </Link>
                <Link href="/services" className="rounded-md border border-slate-500/60 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="motion-rise-delay">
              <div className="glass-panel motion-float pulse-line rounded-lg p-5">
                <div className="rounded-md border border-cyan-300/20 bg-slate-950/60 p-5">
                  <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                    <div>
                      <div className="text-sm text-slate-400">Managed Services Dashboard</div>
                      <div className="mt-1 text-xl font-semibold text-white">Live Operations Snapshot</div>
                    </div>
                    <div className="rounded-md bg-emerald-300/12 px-3 py-1 text-sm font-semibold text-emerald-200">Online</div>
                  </div>

                  <div className="mt-5 grid gap-4">
                    {[
                      ['Support response', 'Active', 'bg-cyan-300'],
                      ['Threat monitoring', '24/7', 'bg-emerald-300'],
                      ['Backup checks', 'Verified', 'bg-blue-300']
                    ].map(([label, value, color]) => (
                      <div key={label} className="rounded-md border border-slate-700/60 bg-slate-900/70 p-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">{label}</span>
                          <span className="font-semibold text-white">{value}</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                          <div className={`h-full w-4/5 rounded-full ${color}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3 text-center">
                    {serviceCards.map(([code, title]) => (
                      <Link key={title} href="/services" className="rounded-md border border-slate-700/60 bg-slate-900/50 px-2 py-4 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-extrabold text-cyan-100">{code}</div>
                        <div className="mt-3 text-xs font-semibold text-slate-300">{title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band py-8">
          <div className="container-max">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Technology platforms we support</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {featured.map((item) => (
                <div key={item} className="rounded-md border border-slate-700/60 bg-slate-950/30 px-3 py-3 text-center text-sm font-semibold text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Better IT starts here</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Keep your systems secure, streamlined, and profitable.</h2>
              <p className="mt-4 text-slate-400">We help teams remove technology friction with managed support, cloud governance, security operations, and continuity planning.</p>
              <Link href="/services" className="mt-8 inline-block rounded-md border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20">
                View Services
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {serviceCards.map(([code, title, copy]) => (
                <article key={title} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-extrabold text-cyan-100">{code}</div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Real clients. Real operations.</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Support that gives leadership and users more confidence.</h2>
              <p className="mt-4 text-slate-400">These examples show the outcomes our managed services are designed to support.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(([role, quote]) => (
                <article key={role} className="glass-panel rounded-lg p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{role}</div>
                  <p className="mt-4 leading-7 text-slate-300">"{quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">What you get</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Managed services built around uptime, response, and visibility.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 text-sm text-slate-300">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white">Service metrics</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ['24/7', 'Monitoring'],
                  ['15 min', 'Priority response target'],
                  ['4', 'Core service lines'],
                  ['1', 'Accountable partner']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-slate-700/60 bg-slate-950/30 p-4">
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Power up your workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Real-time IT support for your team.</h2>
              <p className="mt-4 text-slate-400">Stay focused on the business while recurring IT operations, support, projects, and security tasks are managed in the background.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {workflowItems.map(([title, copy]) => (
                <article key={title} className="glass-panel rounded-lg p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max">
            <div className="glass-panel rounded-lg p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact us anywhere, anytime</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">Talk to a human about your IT needs.</h2>
                  <p className="mt-3 leading-7 text-slate-400">Use the chat button, call button, text tab, or contact form. We will help map the right support, cloud, and cybersecurity plan for your organization.</p>
                  <div className="mt-6 grid gap-2 text-sm text-slate-300">
                    <a href="tel:+254711000000" className="transition hover:text-cyan-100">Sales: +254 711 000 000</a>
                    <a href="tel:+254722000000" className="transition hover:text-cyan-100">Support: +254 722 000 000</a>
                    <a href="mailto:info@urbandigitaltech.example" className="transition hover:text-cyan-100">info@urbandigitaltech.example</a>
                  </div>
                </div>

                <form className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="First Name" />
                    <input className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Last Name" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="email" className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Email" />
                    <input className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Phone Number" />
                  </div>
                  <input className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Company Name" />
                  <textarea rows={5} className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="How can we help?" />
                  <Link href="/contact" className="rounded-md bg-cyan-300 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200">
                    Continue to Contact Page
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
