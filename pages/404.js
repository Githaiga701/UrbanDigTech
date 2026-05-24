import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <Header />
      <main className="tech-grid py-24">
        <div className="container-max text-center">
          <div className="mx-auto max-w-xl rounded-lg border border-slate-700/60 bg-slate-950/40 p-8">
            <h1 className="text-5xl font-bold text-white">404</h1>
            <p className="mt-4 text-slate-400">The page you are looking for cannot be found.</p>
            <Link href="/" className="mt-8 inline-block rounded-md bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
