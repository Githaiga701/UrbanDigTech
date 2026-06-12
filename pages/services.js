import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTABand from '../components/CTABand'
import services from '../data/services'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Urban Digital Technologies</title>
        <meta name="description" content="Hardware solutions, cloud services, cybersecurity, networking, managed services, and AV & ELV solutions from Urban Digital Technologies." />
      </Head>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Enterprise technology, delivered end to end"
          subtitle="Choose a service line to explore capabilities, our delivery process, and the products we support."
          image="/gallery/15.jpeg"
          imageAlt="Managed technology services"
          compact
          primaryCta={{ label: 'Request a Quote', href: '/contact' }}
          secondaryCta={{ label: 'View Products', href: '/products' }}
        />

        <section className="py-16">
          <div className="container-max">
            <SectionHeader
              eyebrow="Service lines"
              title="What we provide"
              copy="Each service opens a dedicated page with full details and product listings."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} featured />
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
