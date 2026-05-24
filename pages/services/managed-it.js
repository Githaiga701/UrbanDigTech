import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ManagedIT(){
  return (
    <>
      <Head>
        <title>Managed IT Services — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Managed IT Services</h1>
          <p className="mt-4 text-gray-700">Our Managed IT Services deliver proactive, secure, and scalable technology operations to streamline IT, reduce downtime, and improve performance.</p>

          <section className="mt-6 bg-white p-6 rounded-lg shadow transform transition hover:scale-105 duration-200">
            <h3 className="font-semibold">What We Provide</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600">
              <li>24/7 IT monitoring and support</li>
              <li>Network and endpoint management</li>
              <li>System maintenance, patching and optimization</li>
              <li>User support and helpdesk services</li>
              <li>Disaster recovery and business continuity</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
