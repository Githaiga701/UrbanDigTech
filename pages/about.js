import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-4xl font-semibold">About Urban Digital Technologies</h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Urban Digital Technologies provides end-to-end IT management and digital transformation services for organizations seeking reliable, secure, and scalable technology solutions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-gray-600">
                To empower businesses through reliable, secure, and innovative technology solutions that support growth, resilience, and digital transformation.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-gray-600">
                To become a trusted technology partner delivering world-class managed IT, cloud, and cybersecurity services for modern organizations.
              </p>
            </section>
          </div>

          <section className="mt-10 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li>Proactive managed IT and infrastructure support</li>
              <li>Cloud-first strategies with security at the core</li>
              <li>Transparent communication and responsive service</li>
              <li>Business continuity, compliance, and performance optimization</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
