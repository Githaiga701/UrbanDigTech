import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'Hardware Solutions', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
//Githaiga created this
    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      let recaptchaToken = null

      if (siteKey && typeof window !== 'undefined' && window.grecaptcha) {
        recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'contact' })
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken })
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', service: 'Hardware Solutions', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    if (siteKey) {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Contact | Urban Digital Technologies</title>
        <meta name="description" content="Contact Urban Digital Technologies for hardware, cloud, cybersecurity, networking, managed services, and AV solutions." />
      </Head>
      <Header />
      <main>
        <section className="tech-grid py-20">
          <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="motion-rise">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact</p>
              <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Request a quote or technical consultation.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">Tell us what you need to procure, deploy, secure, or manage. We will respond with practical next steps.</p>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <a href="tel:+254703437447" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 transition hover:border-cyan-300/50 hover:text-cyan-100">Kenya: +254 703 437447</a>
                <a href="tel:+971526123126" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 transition hover:border-cyan-300/50 hover:text-cyan-100">Business: +971 52 612 3126</a>
                <a href="mailto:Kevin.musomi@atlantisdubai.com" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 transition hover:border-cyan-300/50 hover:text-cyan-100">Kevin.musomi@atlantisdubai.com</a>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  ['Hardware & products', 'Servers, laptops, storage, and device procurement.'],
                  ['Cloud & security', 'Office 365, migration, backup, and cybersecurity engagements.'],
                  ['Managed support', 'AMC, SLA helpdesk, outsourcing, and consulting.']
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-lg border border-slate-700/60 bg-slate-950/30 p-4">
                    <h2 className="font-semibold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel motion-rise-delay grid gap-4 rounded-lg p-6">
              <div>
                <label className="text-sm font-medium text-slate-200" htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-2 w-full rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-200" htmlFor="email">Email</label>
                <input id="email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="mt-2 w-full rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-200" htmlFor="company">Company</label>
                <input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" className="mt-2 w-full rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-200" htmlFor="service">Request type</label>
                <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-2 w-full rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition focus:border-cyan-300/70">
                  <option>Hardware Solutions</option>
                  <option>Cloud Services</option>
                  <option>Cybersecurity</option>
                  <option>Networking & Infrastructure</option>
                  <option>Managed Services</option>
                  <option>AV & ELV Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-200" htmlFor="message">How can we help?</label>
                <textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} placeholder="Describe your hardware, service, or support request." className="mt-2 w-full rounded-md border border-slate-600/70 bg-slate-950/50 p-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70" />
              </div>
              <button type="submit" disabled={status === 'sending'} className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && <div className="text-sm text-emerald-200">Message sent. We will be in touch.</div>}
              {status === 'error' && <div className="text-sm text-red-200">There was an error. Try again later.</div>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
