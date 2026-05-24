export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[#020817]">
      <div className="container-max flex flex-col items-start justify-between gap-4 py-10 text-sm text-slate-400 md:flex-row md:items-center">
        <div>
          <div className="font-semibold text-slate-100">Urban Digital Technologies</div>
          <div className="mt-1">Managed IT, cloud, cybersecurity, Apple product supply, and importing services.</div>
        </div>
        <div className="grid gap-1 md:text-right">
          <a href="tel:+254703437447" className="text-cyan-200 transition hover:text-white">+254 703 437447</a>
          <a href="tel:+971526123126" className="text-cyan-200 transition hover:text-white">+971 52 612 3126</a>
          <a href="mailto:Kevin.musomi@atlantisdubai.com" className="text-cyan-200 transition hover:text-white">Kevin.musomi@atlantisdubai.com</a>
        </div>
      </div>
    </footer>
  )
}
