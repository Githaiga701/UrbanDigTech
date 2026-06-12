import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import SectionHeader from '../../components/SectionHeader'
import ProductCard from '../../components/ProductCard'
import CTABand from '../../components/CTABand'
import services, { getServiceBySlug, getAllServiceSlugs } from '../../data/services'
import { getProductsByService } from '../../data/products'

export default function ServiceDetail({ service }) {
  const products = getProductsByService(service.slug)
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Head>
        <title>{service.title} | Urban Digital Technologies</title>
        <meta name="description" content={service.copy} />
      </Head>
      <Header />
      <main>
        <PageHero
          eyebrow={service.title}
          title={service.tagline}
          subtitle={service.overview}
          image={service.heroImage}
          imageAlt={service.title}
          compact
          primaryCta={{ label: 'Request a Quote', href: '/contact' }}
          secondaryCta={{ label: 'View Products', href: `/products?service=${service.slug}` }}
        />

        <section className="py-16">
          <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Capabilities"
                title="What we deliver"
                copy="Structured services designed for reliability, security, and measurable outcomes."
              />
              <div className="mt-8 grid gap-3">
                {service.capabilities.map((item) => (
                  <div key={item} className="glass-panel rounded-lg px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Process" title="How we work" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.process.map(([title, copy], index) => (
                  <article key={title} className="glass-panel rounded-lg p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-band py-16">
          <div className="container-max">
            <SectionHeader
              eyebrow="Products"
              title={`Solutions within ${service.title}`}
              copy="Browse the products and platforms we supply, deploy, and support under this service line."
              action={{ label: 'View all products', href: `/products?service=${service.slug}` }}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-max">
            <SectionHeader eyebrow="Related" title="Explore other services" />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {otherServices.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="glass-panel rounded-lg p-5 transition hover:border-cyan-300/40">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{item.code}</div>
                  <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title={`Plan your ${service.title.toLowerCase()} engagement`}
          copy="Share your requirements and we will recommend the right products, timeline, and support model."
          secondaryLabel="All Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllServiceSlugs().map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return { notFound: true }
  }

  return { props: { service } }
}
