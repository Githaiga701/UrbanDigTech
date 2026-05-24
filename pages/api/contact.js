export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, company, service, message, recaptchaToken } = req.body || {}
  // Basic server-side validation
  if(!name || !email || !message) return res.status(400).json({error:'Missing fields'})
  if(typeof name !== 'string' || name.trim().length < 2) return res.status(400).json({error:'Invalid name'})
  if(typeof message !== 'string' || message.trim().length < 10) return res.status(400).json({error:'Message too short'})
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(!emailRegex.test(String(email))) return res.status(400).json({error:'Invalid email'})

  // Prefer SendGrid in production. Provide these env vars on Vercel:
  // SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const SENDGRID_FROM = process.env.SENDGRID_FROM
  const SENDGRID_TO = process.env.SENDGRID_TO
  const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET

  // Verify reCAPTCHA v3 token if provided
  if(RECAPTCHA_SECRET){
    if(!recaptchaToken) return res.status(400).json({error:'Missing reCAPTCHA token'})
    try{
      const params = new URLSearchParams()
      params.append('secret', RECAPTCHA_SECRET)
      params.append('response', recaptchaToken)
      const r = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body: params })
      const j = await r.json()
      if(!j.success || (j.score !== undefined && j.score < 0.3)){
        return res.status(403).json({error:'reCAPTCHA verification failed'})
      }
    }catch(err){
      console.error('reCAPTCHA verify error', err)
      return res.status(500).json({error:'reCAPTCHA verification error'})
    }
  }

  if(SENDGRID_API_KEY && SENDGRID_FROM && SENDGRID_TO){
    try{
      const sg = require('@sendgrid/mail')
      sg.setApiKey(SENDGRID_API_KEY)
      const subject = `Website contact from ${name}`
      const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || ''}\nService: ${service || ''}\n\nMessage:\n${message}`
      const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company || ''}</p><p><strong>Service:</strong> ${service || ''}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g,'<br/>')}</p>`
      await sg.send({ to: SENDGRID_TO, from: SENDGRID_FROM, subject, text, html })
      return res.status(200).json({ok:true})
    }catch(err){
      console.error('SendGrid error:', err?.message || err)
      return res.status(500).json({error:'Failed to send email'})
    }
  }

  // Fallback: log to serverless function logs.
  console.log('Contact form submission:', { name, email, company, service, message })
  return res.status(200).json({ok:true, note:'logged-only'})
}
