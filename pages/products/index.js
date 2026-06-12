import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import SectionHeader from '../../components/SectionHeader'
import ProductCard from '../../components/ProductCard'
import CTABand from '../../components/CTABand'
import services from '../../data/services'
import products from '../../data/products'

export default function ProductsPage() {
  const router = useRouter()
  const activeService = router.isReady && typeof router.query.service === 'string'
    ? router.query.service
    : 'all'
  const filteredProducts = activeService === 'all'
    ? products
    : products.filter((product) => product.service === activeService)

  const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service.title]))

  function setFilter(slug) {
    if (slug === 'all') {
      router.push('/products', undefined, { shallow: true })
      return
    }
    router.push(`/products?service=${slug}`, undefined, { shallow: true })
  }

  return (
    <>
      <Head>
        <title>Products | Urban Digital Technologies</title>
        <meta name="description" content="Browse hardware, cloud, security, networking, managed services, and AV products from Urban Digital Technologies." />
      </Head>
      <Header />
      <main>
        <PageHero
          eyebrow="Products"
          title="Technology products we supply and support"
          subtitle="Filter by service line to explore servers, devices, security tools, networking gear, and smart office solutions."
          image="/gallery/10.jpeg"
          imageAlt="Technology product catalog"
          compact
          primaryCta={{ label: 'Request Pricing', href: '/contact' }}
          secondaryCta={{ label: 'View Services', href: '/services' }}
        />

        <section className="py-16">
          <div className="container-max">
            <SectionHeader
              eyebrow="Catalog"
              title="Browse by service"
              copy="Select a category to narrow the product list, or view everything we offer."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${activeService === 'all' ? 'border-cyan-300/70 bg-cyan-300/15 text-white' : 'border-slate-600/60 text-slate-300 hover:border-cyan-300/50'}`}
              >
                All Products
              </button>
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setFilter(service.slug)}
                  className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${activeService === service.slug ? 'border-cyan-300/70 bg-cyan-300/15 text-white' : 'border-slate-600/60 text-slate-300 hover:border-cyan-300/50'}`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  showServiceLink={activeService === 'all'}
                  serviceTitle={serviceMap[product.service]}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="mt-10 text-center text-slate-400">No products found for this category.</p>
            )}
          </div>
        </section>

        <CTABand
          title="Need a custom configuration?"
          copy="We can source, bundle, deploy, and support products tailored to your environment and budget."
          primaryLabel="Talk to Sales"
          secondaryLabel="View Gallery"
          secondaryHref="/gallery"
        />
      </main>
      <Footer />
    </>
  )
}
