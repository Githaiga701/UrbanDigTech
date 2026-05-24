import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Cybersecurity(){
  return (
    <>
      <Head>
        <title>Managed Cybersecurity — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Managed Cybersecurity Services</h1>
          <p className="mt-4 text-gray-700">Security is at the core of our services — from SOC and threat monitoring to incident response and compliance.</p>

          <section className="mt-6 bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Security Services</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600">
              <li>Security Operations Center (SOC) and threat detection</li>
              <li>Endpoint protection and Microsoft Defender integration</li>
              <li>Vulnerability assessments and penetration testing</li>
              <li>Incident response and compliance support</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
