import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found</title>
      </Head>
      <Header />
      <main className="py-20">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="mt-4 text-gray-600">The page you are looking for cannot be found.</p>
          <Link href="/" className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
