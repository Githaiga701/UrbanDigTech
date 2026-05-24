import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CloudServices(){
  return (
    <>
      <Head>
        <title>Cloud Management — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Cloud Management Services</h1>
          <p className="mt-4 text-gray-700">We help businesses deploy, migrate, and optimize cloud environments across Azure, AWS, GCP and private clouds.</p>

          <section className="mt-6 bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Capabilities</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600">
              <li>Cloud infrastructure deployment and migration</li>
              <li>Cloud monitoring, optimization and cost control</li>
              <li>Multi-cloud management and security</li>
              <li>Backup, DR and compliance support</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
