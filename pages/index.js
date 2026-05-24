import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const heroPanels = [
  {
    key: 'it',
    label: 'Managed IT',
    title: 'Managed technology operations',
    copy: 'Proactive monitoring, endpoint support, cybersecurity, backup planning, and cloud management for growing teams.',
    metric: '24/7',
    metricLabel: 'Monitoring'
  },
  {
    key: 'apple',
    label: 'Apple Supply',
    title: 'Imported Apple products',
    copy: 'Sourcing and supply support for MacBook, iPhone, iPad, Apple Watch, accessories, and business device rollouts.',
    metric: 'Global',
    metricLabel: 'Sourcing'
  },
  {
    key: 'import',
    label: 'Importing',
    title: 'Importing services',
    copy: 'Procurement coordination, supplier follow-up, shipment planning, documentation guidance, and delivery updates.',
    metric: 'End to end',
    metricLabel: 'Import support'
  }
]

const serviceCards = [
  ['MS', 'Managed Services', 'Proactive IT operations, monitoring, patching, support, and infrastructure care.'],
  ['CS', 'Cybersecurity', 'Threat monitoring, endpoint protection, identity controls, and incident response.'],
  ['AP', 'Apple Product Supply', 'Imported Apple devices, accessories, sourcing, procurement, and business-ready supply.'],
  ['IM', 'Importing Services', 'Supplier coordination, purchase support, shipment tracking, and import planning.']
]

const featured = ['MacBook', 'iPhone', 'iPad', 'Apple Watch', 'Microsoft 365', 'Azure', 'AWS', 'Endpoint Security']

const appleProducts = [
  ['MacBook Supply', 'Business laptops, creative workstations, and executive devices sourced to order.'],
  ['iPhone & iPad', 'Mobile devices for teams, executives, field operations, and personal supply requests.'],
  ['Accessories', 'Chargers, cases, keyboards, mice, adapters, displays, and device add-ons.'],
  ['Business Rollouts', 'Device sourcing paired with setup planning, user onboarding, and IT support.']
]

const importSteps = [
  ['Source', 'Identify the required product, specification, quantity, and supplier path.'],
  ['Confirm', 'Validate pricing, availability, timing, and delivery requirements before purchase.'],
  ['Coordinate', 'Support procurement, shipping updates, import planning, and communication.'],
  ['Deliver', 'Track arrival, handover, setup needs, and after-sale support requests.']
]

const testimonials = [
  ['Operations Lead', 'Urban Digital helped us bring support, sourcing, and technology reporting into one clear process.'],
  ['Business Buyer', 'The Apple supply support made procurement easier because sourcing, timing, and communication were handled clearly.'],
  ['IT Coordinator', 'Their managed services gave our internal team breathing room while improving response times for users.']
]

const workflowItems = [
  ['Employee Onboarding', 'Prepare accounts, devices, access, and policies so new team members are ready faster.'],
  ['Apple Device Requests', 'Plan imported product requests with specifications, timing, and delivery expectations.'],
  ['Central IT Management', 'Track infrastructure health, support activity, risks, assets, and improvement priorities.'],
  ['Real-time Support', 'Give users a clear route to help when work is blocked by IT or device issues.']
]

export default function Home() {
  const [activePanel, setActivePanel] = useState(heroPanels[0])

  return (
    <>
      <Head>
        <title>Urban Digital Technologies | IT, Apple Supply & Importing Services</title>
        <meta name="description" content="Managed IT, cloud, cybersecurity, imported Apple product supply, and importing services for growing organizations." />
        <meta property="og:title" content="Urban Digital Technologies | IT, Apple Supply & Importing Services" />
        <meta property="og:description" content="Secure technology operations, imported Apple products, and practical importing support." />
        <meta property="og:image" content="/tech-hero.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main>
        <section className="relative min-h-[calc(100vh-141px)] overflow-hidden bg-[#020817]">
          <img
            src="/tech-hero.svg"
            alt="Futuristic laptop with digital globe and connected technology panels"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#020817_0%,rgba(2,8,23,0.92)_30%,rgba(2,8,23,0.54)_58%,rgba(2,8,23,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_52%,rgba(56,189,248,0.18),transparent_28rem)]" />

          <div className="container-max relative z-10 grid min-h-[calc(100vh-141px)] items-center gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="motion-rise max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Technology. Devices. Imports.</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Technology that connects your business to the future.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Urban Digital Technologies delivers managed IT, cybersecurity, cloud support, imported Apple products, and importing services for businesses and professionals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="rounded-md bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-200">
                  Request a Quote
                </Link>
                <a href="tel:+254703437447" className="rounded-md border border-slate-500/60 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100">
                  Call Kenya Line
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroPanels.map((panel) => (
                  <button
                    key={panel.key}
                    type="button"
                    onClick={() => setActivePanel(panel)}
                    className={`rounded-lg border px-4 py-3 text-left transition ${activePanel.key === panel.key ? 'border-cyan-300/70 bg-cyan-300/15 text-white' : 'border-slate-600/60 bg-slate-950/30 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-100'}`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">{panel.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="motion-rise-delay flex min-h-[32rem] items-end justify-center lg:justify-end">
              <div className="glass-panel pulse-line w-full max-w-xl rounded-lg p-5">
                <div className="rounded-md border border-cyan-300/20 bg-slate-950/70 p-5">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-700/60 pb-4">
                    <div>
                      <div className="text-sm text-slate-400">Interactive Service Console</div>
                      <h2 className="mt-1 text-2xl font-semibold text-white">{activePanel.title}</h2>
                    </div>
                    <div className="rounded-md bg-emerald-300/12 px-3 py-2 text-right">
                      <div className="text-sm font-bold text-emerald-200">{activePanel.metric}</div>
                      <div className="text-xs text-emerald-100/70">{activePanel.metricLabel}</div>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-300">{activePanel.copy}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {['Plan', 'Source', 'Support'].map((item) => (
                      <div key={item} className="rounded-md border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-center text-sm font-semibold text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href="tel:+971526123126" className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20">
                      Business: +971 52 612 3126
                    </a>
                    <a href="mailto:Kevin.musomi@atlantisdubai.com" className="rounded-md border border-slate-600/70 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60">
                      Email Kevin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band py-8">
          <div className="container-max">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Technology and product categories</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">What we provide</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">IT services, Apple product supply, and imports under one professional workflow.</h2>
              <p className="mt-4 text-slate-400">Support your operations with managed technology services while also sourcing the devices and products your team needs.</p>
              <Link href="/contact" className="mt-8 inline-block rounded-md border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20">
                Start a Request
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Imported Apple products</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Source premium Apple devices with clearer communication and support.</h2>
              <p className="mt-4 text-slate-400">We help clients request, source, and supply Apple products for personal, executive, and business use. Product availability and pricing depend on supplier confirmation.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {appleProducts.map(([title, copy]) => (
                <article key={title} className="glass-panel rounded-lg p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Importing services</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">A practical path from product request to delivery coordination.</h2>
              <p className="mt-4 text-slate-400">Whether the request is a device, accessory, or business product supply, we help coordinate sourcing and importing steps with better visibility.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {importSteps.map(([title, copy], index) => (
                <article key={title} className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 font-bold text-cyan-100">{index + 1}</div>
                  <h3 className="mt-4 font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Real requests. Real operations.</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Support that gives buyers, leadership, and users more confidence.</h2>
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
          <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Power up your workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Real-time support for your technology and product requests.</h2>
              <p className="mt-4 text-slate-400">Stay focused on the business while recurring IT operations, product requests, imports, and device support are managed with a clearer process.</p>
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

        <section className="section-band py-20">
          <div className="container-max">
            <div className="glass-panel rounded-lg p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact us anywhere, anytime</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">Talk to a human about IT, Apple products, or imports.</h2>
                  <p className="mt-3 leading-7 text-slate-400">Use the chat button, call button, text tab, or contact form. We will help map the right support, supply, or importing path for your request.</p>
                  <div className="mt-6 grid gap-2 text-sm text-slate-300">
                    <a href="tel:+254703437447" className="transition hover:text-cyan-100">Kenya: +254 703 437447</a>
                    <a href="tel:+971526123126" className="transition hover:text-cyan-100">Business: +971 52 612 3126</a>
                    <a href="mailto:Kevin.musomi@atlantisdubai.com" className="transition hover:text-cyan-100">Kevin.musomi@atlantisdubai.com</a>
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
                  <input className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Company or product request" />
                  <textarea rows={5} className="rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" placeholder="Tell us what you need." />
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
