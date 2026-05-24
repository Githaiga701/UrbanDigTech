export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[#020817]">
      <div className="container-max flex flex-col items-start justify-between gap-4 py-10 text-sm text-slate-400 md:flex-row md:items-center">
        <div>
          <div className="font-semibold text-slate-100">Urban Digital Technologies</div>
          <div className="mt-1">Managed IT, cloud, cybersecurity, and infrastructure operations.</div>
        </div>
        <div>Contact: <a href="mailto:info@urbandigitaltech.example" className="text-cyan-200 transition hover:text-white">info@urbandigitaltech.example</a></div>
      </div>
    </footer>
  )
}
