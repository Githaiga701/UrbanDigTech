import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">Comprehensive managed IT, cloud, cybersecurity, and infrastructure services tailored to your business needs.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/managed-it"><a className="block p-6 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold">Managed IT Services</h3>
              <p className="mt-2 text-sm text-gray-600">Proactive monitoring, helpdesk, patching and continuity services.</p>
            </a></Link>

            <Link href="/services/cloud"><a className="block p-6 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold">Cloud Management</h3>
              <p className="mt-2 text-sm text-gray-600">Cloud migration, optimization and multi-cloud management.</p>
            </a></Link>

            <Link href="/services/cybersecurity"><a className="block p-6 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold">Cybersecurity</h3>
              <p className="mt-2 text-sm text-gray-600">SOC, endpoint protection, compliance and incident response.</p>
            </a></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
