import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import GalleryGrid from '../components/GalleryGrid'
import CTABand from '../components/CTABand'
import galleryImages from '../data/gallery'

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Urban Digital Technologies</title>
        <meta name="description" content="Browse the Urban Digital Technologies product and solution gallery." />
      </Head>
      <Header />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Our technology catalog"
          subtitle="Hardware, devices, workstations, and smart office solutions we supply and support."
          image="/gallery/07.jpeg"
          imageAlt="Technology gallery"
          compact
          primaryCta={{ label: 'Request a Quote', href: '/contact' }}
          secondaryCta={{ label: 'View Products', href: '/products' }}
        />

        <section className="py-16">
          <div className="container-max">
            <SectionHeader
              eyebrow="Showcase"
              title="Product and solution imagery"
              copy="Click any image to view it in full size."
            />
            <div className="mt-10">
              <GalleryGrid images={galleryImages} />
            </div>
          </div>
        </section>

        <CTABand
          title="Found something you need?"
          copy="Share the product or solution you are interested in and we will follow up with availability and pricing."
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  )
}
