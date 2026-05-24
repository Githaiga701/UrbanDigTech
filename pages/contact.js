import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', company:'', message:''})
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      // attach reCAPTCHA token if available
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      let recaptchaToken = null
      if(siteKey && typeof grecaptcha !== 'undefined'){
        recaptchaToken = await grecaptcha.execute(siteKey, {action: 'contact'})
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({...form, recaptchaToken})
      })
      if(res.ok){ setStatus('sent'); setForm({name:'',email:'',company:'',message:''}) }
      else { setStatus('error') }
    }catch(err){ setStatus('error') }
  }

  useEffect(()=>{
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if(siteKey){
      const s = document.createElement('script')
      s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      s.async = true
      document.head.appendChild(s)
      return ()=>{ document.head.removeChild(s) }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Contact — Urban Digital Technologies</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container-max">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-gray-600">Fill the form and we'll get back to you about Managed IT, Cloud, or Security services.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
            <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="p-3 border rounded" />
            <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded" />
            <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Company (optional)" className="p-3 border rounded" />
            <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} placeholder="How can we help?" className="p-3 border rounded" />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send message</button>
            {status==='sending' && <div className="text-sm text-gray-600">Sending…</div>}
            {status==='sent' && <div className="text-sm text-green-600">Message sent — we'll be in touch.</div>}
            {status==='error' && <div className="text-sm text-red-600">There was an error. Try again later.</div>}
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
