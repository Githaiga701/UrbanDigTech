import { useState } from 'react'
import Link from 'next/link'

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <a href="sms:+254703437447" className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-r-md border border-l-0 border-cyan-300/30 bg-cyan-300 px-3 py-5 text-xs font-extrabold uppercase tracking-[0.24em] text-slate-950 shadow-xl shadow-black/30 [writing-mode:vertical-rl] sm:block">
        Text Us
      </a>

      <a href="tel:+254703437447" aria-label="Call Urban Digital Technologies" className="fixed bottom-6 left-5 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-300 text-sm font-extrabold text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:scale-105 hover:bg-cyan-200">
        Call
      </a>

      <div className="fixed bottom-6 right-5 z-30">
        {chatOpen && (
          <div className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] rounded-lg border border-slate-700/70 bg-[#06111f] p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-emerald-200">Online Support</div>
                <h2 className="mt-1 text-lg font-semibold text-white">How can we help?</h2>
              </div>
              <button type="button" onClick={() => setChatOpen(false)} className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-300 transition hover:border-cyan-300/60">
                Close
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">Start with a quick message about IT support, Apple products, or importing services.</p>
            <div className="mt-4 grid gap-2">
              <Link href="/contact" onClick={() => setChatOpen(false)} className="rounded-md bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Open Contact Form
              </Link>
              <a href="tel:+971526123126" className="rounded-md border border-slate-600 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60">
                Call Business Line
              </a>
              <a href="mailto:info@urbandigitaltech.com" className="rounded-md border border-slate-600 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60">
                Email Support
              </a>
            </div>
          </div>
        )}

        <button type="button" onClick={() => setChatOpen((value) => !value)} className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-300 text-sm font-extrabold text-slate-950 shadow-2xl shadow-emerald-950/40 transition hover:scale-105 hover:bg-emerald-200">
          Chat
        </button>
      </div>
    </>
  )
}
