import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import CTABand from '../components/CTABand'
import services from '../data/services'
import products from '../data/products'

const featuredBrands = ['HP', 'Dell', 'Lenovo', 'NetApp', 'Synology', 'Microsoft', 'Apple', 'Cisco']

const highlights = [
  ['End-to-end delivery', 'From assessment and procurement to deployment and ongoing support.'],
  ['Enterprise partnerships', 'Authorized supply and support across leading hardware and software brands.'],
  ['SLA-driven support', 'Clear response times, AMC options, and accountable service delivery.']
]

const processSteps = [
  ['Discover', 'Understand your goals, environment, and constraints.'],
  ['Design', 'Recommend the right services, products, and architecture.'],
  ['Deliver', 'Procure, deploy, and configure with minimal disruption.'],
  ['Support', 'Monitor, maintain, and improve over time.']
]

const featuredProducts = products.slice(0, 4)

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Digital Technologies | Hardware, Cloud, Cybersecurity & Managed IT</title>
        <meta name="description" content="Hardware solutions, cloud services, cybersecurity, networking, managed services, and AV & ELV solutions for growing organizations." />
        <meta property="og:title" content="Urban Digital Technologies | Hardware, Cloud, Cybersecurity & Managed IT" />
        <meta property="og:description" content="Enterprise hardware, cloud modernization, cybersecurity, networking, and smart office solutions." />
        <meta property="og:image" content="/gallery/19.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main>
        <PageHero
          eyebrow="Urban Digital Technologies"
          title="Technology that connects your business to the future."
          subtitle="Hardware, cloud, cybersecurity, networking, managed services, and smart office solutions — delivered with clarity and accountability."
          image="/gallery/19.jpeg"
          imageAlt="Professional workstation"
          primaryCta={{ label: 'Request a Quote', href: '/contact' }}
          secondaryCta={{ label: 'Explore Services', href: '/services' }}
        />

        <section className="section-band py-8">
          <div className="container-max">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {featuredBrands.map((brand) => (
                <div key={brand} className="rounded-md border border-slate-700/60 bg-slate-950/30 px-3 py-3 text-center text-sm font-semibold text-slate-300">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max">
            <SectionHeader
              eyebrow="Services"
              title="Six service lines. One trusted partner."
              copy="Each service has its own detail page with capabilities, process, and related products."
              action={{ label: 'View all services', href: '/services' }}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} featured />
              ))}
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeader
              eyebrow="Why Urban Digital"
              title="Built for businesses that need reliability, not complexity."
            />
            <div className="grid gap-4">
              {highlights.map(([title, copy]) => (
                <article key={title} className="glass-panel rounded-lg p-5">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-max">
            <SectionHeader
              eyebrow="Products"
              title="Featured solutions"
              copy="A sample of the hardware, cloud, and workplace technology we supply."
              action={{ label: 'Browse full catalog', href: '/products' }}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-band py-20">
          <div className="container-max">
            <SectionHeader eyebrow="Process" title="How we work with you" />
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {processSteps.map(([title, copy], index) => (
                <article key={title} className="glass-panel rounded-lg p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 font-bold text-cyan-100">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </>
  )
}
