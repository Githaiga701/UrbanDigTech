import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-30 shadow-sm">
      <div className="container-max py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Urban Digital" className="w-10 h-10" />
          <div className="text-lg font-semibold">Urban Digital Technologies</div>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/contact" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded">Get a Quote</Link>
        </nav>
      </div>
    </header>
  )
}
