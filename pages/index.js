import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Digital Technologies — Managed IT & Cloud Services</title>
        <meta name="description" content="Managed IT, Cloud, Cybersecurity and Infrastructure services" />
      </Head>
      <Header />
      <main>
        <section className="py-20" style={{background: 'linear-gradient(90deg,#0ea5a4 0%, #0b7b79 100%)'}}>
          <div className="container-max text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold">Urban Digital Technologies</h1>
              <p className="mt-4 text-lg">Secure, scalable, and innovative technology solutions — Managed IT, Cloud, Cybersecurity and Infrastructure services to power your business.</p>
              <div className="mt-6 flex gap-4">
                <a href="/contact" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow">Contact Us</a>
                <a href="/services" className="inline-block border border-white/30 text-white px-6 py-3 rounded-lg">View Services</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Our Services</h2>
            <p className="mt-2 text-gray-600 max-w-3xl">We help businesses transform their operations through secure, scalable, and managed technology services tailored for modern enterprises.</p>

            <div className="mt-8 space-y-6">
              <article className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl">Managed IT Services</h3>
                <p className="mt-2 text-gray-600">Our Managed IT Services provide proactive, secure, and scalable technology operations to streamline IT, reduce downtime, and improve performance. We act as a strategic technology partner handling monitoring, network and endpoint management, patching, helpdesk support, and IT asset management.</p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                  <li>24/7 IT monitoring and support</li>
                  <li>Network and endpoint management</li>
                  <li>System maintenance, patching and performance optimization</li>
                  <li>User support and helpdesk services</li>
                  <li>Disaster recovery and business continuity</li>
                </ul>
              </article>

              <article className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl">Cloud Management Services</h3>
                <p className="mt-2 text-gray-600">We manage and optimize cloud infrastructure across public and private platforms, delivering migration, monitoring, security, and cost optimization.</p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                  <li>Cloud infrastructure deployment and migration</li>
                  <li>Multi-cloud management (Azure, AWS, GCP)</li>
                  <li>Cloud security, backup and disaster recovery</li>
                  <li>Resource scaling and cost optimization</li>
                </ul>
              </article>

              <article className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl">Hybrid Management Solutions</h3>
                <p className="mt-2 text-gray-600">Seamlessly integrate on-premises infrastructure with cloud environments to balance performance, control, and scalability.</p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                  <li>Hybrid infrastructure architecture and deployment</li>
                  <li>Workload balancing and centralized management</li>
                  <li>Data synchronization, backup and compliance</li>
                </ul>
              </article>

              <article className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl">Managed Infrastructure & Hosting</h3>
                <p className="mt-2 text-gray-600">Comprehensive infrastructure management including servers, storage, networking, virtualization, and hosting (IaaS/PaaS/SaaS) with high-availability and monitoring.</p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                  <li>Infrastructure as a Service (IaaS): virtual servers, storage, networking</li>
                  <li>Platform as a Service (PaaS): app hosting, DB platforms, CI/CD environments</li>
                  <li>Software as a Service (SaaS): productivity, collaboration and industry apps</li>
                  <li>Cloud & hybrid hosting, dedicated and VPS options</li>
                </ul>
              </article>

              <article className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-xl">Managed Cybersecurity Services</h3>
                <p className="mt-2 text-gray-600">Security is integral to all our offerings — from SOC and threat monitoring to Microsoft Defender integration and incident response.</p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                  <li>Security Operations Center (SOC) and threat detection</li>
                  <li>Endpoint protection and vulnerability assessments</li>
                  <li>Firewall and identity/access management</li>
                  <li>Incident response, penetration testing and compliance support</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="details" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Business Overview</h2>
            <p className="mt-4 text-gray-700">Urban Digital Technologies provides end-to-end IT management and digital transformation services for organizations seeking reliable, secure, and scalable technology solutions. Our model emphasizes proactive management to minimize downtime, strengthen cybersecurity, and optimize infrastructure performance.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold">Core Objectives</h3>
                <ul className="mt-3 list-disc list-inside text-gray-600">
                  <li>Deliver reliable managed IT services</li>
                  <li>Support digital transformation initiatives</li>
                  <li>Provide secure cloud and hybrid solutions</li>
                  <li>Enhance cybersecurity and compliance</li>
                  <li>Improve operational efficiency</li>
                  <li>Build long-term strategic partnerships</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold">Value Proposition</h3>
                <p className="mt-2 text-gray-600">We deliver enterprise-level IT expertise, proactive support, and scalable services that reduce costs, improve business continuity, and strengthen IT performance for organizations of all sizes.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Service Delivery Model</h2>
            <div className="mt-4 space-y-4 text-gray-600">
              <p><strong>Assessment & Planning:</strong> We assess infrastructure, identify risks, and design tailored IT strategies.</p>
              <p><strong>Deployment & Migration:</strong> Specialists execute migrations with minimal disruption.</p>
              <p><strong>Monitoring & Management:</strong> Continuous monitoring ensures uptime, security, and performance.</p>
              <p><strong>Optimization & Reporting:</strong> Ongoing analytics and tuning to improve efficiency.</p>
              <p><strong>Support & Improvement:</strong> Rapid issue response and continuous service enhancement.</p>
            </div>
          </div>
        </section>

        <section id="why" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Why Choose Us</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Expertise & Experience</h4>
                <p className="mt-2">Experienced IT professionals across infrastructure, cloud, and cybersecurity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Proactive Support</h4>
                <p className="mt-2">We prevent issues before they impact operations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Security-First</h4>
                <p className="mt-2">Security woven into every solution to ensure compliance and protection.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">Industries We Support</h2>
            <p className="mt-3 text-gray-600">We serve hospitality, healthcare, retail, finance, education, real estate, government, manufacturing, logistics and corporate enterprises.</p>
          </div>
        </section>

        <section id="about" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">About Urban Digital Technologies</h2>
            <p className="mt-4 text-gray-700">We combine technical expertise, proactive support, and strategic consulting to deliver innovative, secure, and business-driven technology solutions. Our mission is to empower businesses through reliable technology that enables digital transformation and long-term growth.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Mission</h4>
                <p className="mt-2 text-gray-600">To empower businesses through reliable, secure, and innovative technology solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Vision</h4>
                <p className="mt-2 text-gray-600">To become a trusted global technology partner delivering world-class managed IT, cloud, and cybersecurity solutions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-600">Partner with us to transform your IT operations with secure, scalable, and fully managed technology solutions.</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
              <input className="p-3 border rounded" placeholder="Name" />
              <input className="p-3 border rounded" placeholder="Email" />
              <input className="p-3 border rounded" placeholder="Company (optional)" />
              <textarea className="p-3 border rounded" rows="5" placeholder="How can we help?" />
              <button className="bg-sky-600 text-white px-4 py-2 rounded">Send</button>
            </form>
            <p className="mt-4 text-sm text-gray-500">For immediate inquiries, email us at info@urbandigitaltech.example</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
