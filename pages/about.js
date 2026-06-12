import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CTABand from '../components/CTABand'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Urban Digital Technologies</title>
        <meta name="description" content="Learn about Urban Digital Technologies and its managed technology approach." />
      </Head>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          title="A technology partner focused on resilience and growth"
          subtitle="We align hardware, cloud, security, and support to the way your business actually runs."
          image="/gallery/16.jpeg"
          imageAlt="Modern office technology"
          compact
          primaryCta={{ label: 'Work With Us', href: '/contact' }}
          secondaryCta={{ label: 'Our Services', href: '/services' }}
        />

        <section className="py-16">
          <div className="container-max grid gap-5 md:grid-cols-2">
            <section className="glass-panel rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">Mission</h2>
              <p className="mt-3 leading-7 text-slate-400">To empower clients through reliable technology services, trusted product sourcing, and practical support that improves growth and resilience.</p>
            </section>
            <section className="glass-panel rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">Vision</h2>
              <p className="mt-3 leading-7 text-slate-400">To become a trusted technology partner delivering hardware, cloud, cybersecurity, networking, managed services, and AV & ELV solutions for modern organizations.</p>
            </section>
          </div>
        </section>

        <section className="section-band py-16">
          <div className="container-max">
            <SectionHeader eyebrow="Approach" title="How we work" copy="Clear assessment, practical implementation, continuous monitoring, and improvements leadership can measure." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ['Operational reliability', 'Structured management that reduces outages and improves support response.'],
                ['Security at the core', 'Protection, access, backup, and response practices built into every service line.'],
                ['Hardware and AV expertise', 'Enterprise hardware supply and smart office solutions delivered with clear communication.']
              ].map(([title, copy]) => (
                <div key={title} className="glass-panel rounded-lg p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand title="Let's build your technology roadmap" secondaryLabel="View Products" secondaryHref="/products" />
      </main>
      <Footer />
    </>
  )
}
