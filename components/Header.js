import { useState } from 'react'
import Link from 'next/link'

const serviceLinks = [
  ['Managed IT Services', '/services/managed-it'],
  ['Cloud Management', '/services/cloud'],
  ['Managed Cybersecurity', '/services/cybersecurity'],
  ['Infrastructure Hosting', '/services'],
  ['Business Continuity', '/services'],
  ['IT Consulting', '/services']
]

const phoneLinks = [
  ['Main Line', '+254 700 000 000'],
  ['Sales', '+254 711 000 000'],
  ['Support', '+254 722 000 000']
]

function MenuIcon() {
  return (
    <span className="grid h-5 w-6 content-center gap-1.5" aria-hidden="true">
      <span className="block h-0.5 rounded-full bg-cyan-100" />
      <span className="block h-0.5 rounded-full bg-cyan-100" />
      <span className="block h-0.5 rounded-full bg-cyan-100" />
    </span>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-700/40 bg-[#020817]/88 backdrop-blur-xl">
        <div className="border-b border-slate-700/40 bg-slate-950/70">
          <div className="container-max grid gap-2 py-3 text-xs text-slate-300 sm:grid-cols-3">
            {phoneLinks.map(([label, number]) => (
              <a key={label} href={`tel:${number.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 rounded-md border border-slate-700/50 bg-slate-900/50 px-3 py-2 transition hover:border-cyan-300/50 hover:text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                <span className="font-semibold text-slate-100">{label}</span>
                <span>{number}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="container-max flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src="/logo.svg" alt="Urban Digital" className="h-10 w-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white md:text-base">Urban Digital Technologies</div>
              <div className="hidden text-xs uppercase tracking-[0.28em] text-cyan-200/70 sm:block">Managed Technology</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            <Link href="/services" className="transition hover:text-cyan-200">Services</Link>
            <Link href="/about" className="transition hover:text-cyan-200">About</Link>
            <Link href="/contact" className="transition hover:text-cyan-200">Contact</Link>
            <Link href="/contact" className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100 shadow-lg shadow-cyan-950/30 transition hover:border-cyan-200/60 hover:bg-cyan-300/20">Get a Quote</Link>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 transition hover:border-cyan-200/70"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm transition ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setIsOpen(false)} />
      <aside className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-slate-700/60 bg-[#05101f] shadow-2xl shadow-black/50 transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-slate-700/60 p-6">
          <div>
            <div className="font-semibold text-white">Navigation</div>
            <div className="mt-1 text-sm text-slate-400">Services, support, and contact options</div>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} className="rounded-md border border-slate-600 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60">
            Close
          </button>
        </div>

        <div className="h-[calc(100%-89px)] overflow-y-auto p-6">
          <div className="grid gap-3">
            <Link onClick={() => setIsOpen(false)} href="/" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 font-semibold text-slate-100 transition hover:border-cyan-300/50">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 font-semibold text-slate-100 transition hover:border-cyan-300/50">About Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="rounded-md border border-slate-700/60 bg-slate-950/30 px-4 py-3 font-semibold text-slate-100 transition hover:border-cyan-300/50">Contact Us</Link>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Services</h2>
            <div className="mt-4 grid gap-2">
              {serviceLinks.map(([label, href]) => (
                <Link key={label} onClick={() => setIsOpen(false)} href={href} className="rounded-md px-4 py-3 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-100">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
            <h2 className="font-semibold text-white">Talk to a human</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Use the call, text, or chat options for a faster response.</p>
            <div className="mt-4 grid gap-2 text-sm">
              {phoneLinks.map(([label, number]) => (
                <a key={label} href={`tel:${number.replace(/\s/g, '')}`} className="text-cyan-100 transition hover:text-white">{label}: {number}</a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
