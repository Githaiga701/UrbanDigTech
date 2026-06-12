const products = [
  {
    slug: 'enterprise-servers',
    service: 'hardware',
    name: 'Enterprise Servers',
    brands: ['HP', 'Dell', 'Lenovo'],
    image: '/gallery/21.jpeg',
    copy: 'Rack and tower servers for virtualization, databases, and business applications.'
  },
  {
    slug: 'business-laptops',
    service: 'hardware',
    name: 'Business Laptops',
    brands: ['HP', 'Dell', 'Lenovo'],
    image: '/gallery/11.jpeg',
    copy: 'Reliable laptops for teams, executives, and field staff with enterprise warranty options.'
  },
  {
    slug: 'apple-macbooks',
    service: 'hardware',
    name: 'Apple MacBooks',
    brands: ['Apple'],
    image: '/gallery/11.jpeg',
    copy: 'MacBook Air and MacBook Pro devices for creative, executive, and mobile teams.'
  },
  {
    slug: 'workstations',
    service: 'hardware',
    name: 'Workstations & Desktops',
    brands: ['Apple', 'Dell', 'HP'],
    image: '/gallery/19.jpeg',
    copy: 'Mac Studio, Mac Pro, and business desktops for demanding workloads.'
  },
  {
    slug: 'mobile-devices',
    service: 'hardware',
    name: 'Mobile Devices',
    brands: ['Apple'],
    image: '/gallery/10.jpeg',
    copy: 'iPhones and iPads for corporate mobility, executives, and frontline teams.'
  },
  {
    slug: 'storage-systems',
    service: 'hardware',
    name: 'Storage Systems',
    brands: ['NetApp', 'Synology'],
    image: '/gallery/17.jpeg',
    copy: 'NAS and enterprise storage for backup, file sharing, and data protection.'
  },
  {
    slug: 'device-accessories',
    service: 'hardware',
    name: 'Accessories & Peripherals',
    brands: ['Apple', 'Dell', 'HP'],
    image: '/gallery/04.jpeg',
    copy: 'Chargers, docks, keyboards, displays, and workspace accessories.'
  },
  {
    slug: 'office-365',
    service: 'cloud',
    name: 'Microsoft Office 365',
    brands: ['Microsoft'],
    image: '/gallery/16.jpeg',
    copy: 'Email, collaboration, and productivity suites deployed and managed for your teams.'
  },
  {
    slug: 'cloud-migration',
    service: 'cloud',
    name: 'Cloud Modernization',
    brands: ['Microsoft', 'Azure', 'AWS'],
    image: '/gallery/21.jpeg',
    copy: 'Structured migration from on-premises to public, private, or hybrid cloud.'
  },
  {
    slug: 'backup-dr',
    service: 'cloud',
    name: 'Backup & Disaster Recovery',
    brands: ['Veeam', 'Azure', 'AWS'],
    image: '/gallery/20.jpeg',
    copy: 'Automated backups, replication, and tested recovery plans for business continuity.'
  },
  {
    slug: 'endpoint-protection',
    service: 'cybersecurity',
    name: 'Endpoint Protection',
    brands: ['Microsoft', 'CrowdStrike', 'Sophos'],
    image: '/gallery/07.jpeg',
    copy: 'Antivirus, EDR, and device compliance for laptops, desktops, and servers.'
  },
  {
    slug: 'email-security',
    service: 'cybersecurity',
    name: 'Email Security',
    brands: ['Microsoft', 'Proofpoint'],
    image: '/gallery/13.jpeg',
    copy: 'Anti-phishing, spam filtering, and secure email gateway protection.'
  },
  {
    slug: 'utm-firewalls',
    service: 'cybersecurity',
    name: 'UTM & Firewalls',
    brands: ['Fortinet', 'Sophos', 'Cisco'],
    image: '/gallery/25.jpeg',
    copy: 'Unified threat management appliances for perimeter and branch security.'
  },
  {
    slug: 'siem-mdr',
    service: 'cybersecurity',
    name: 'SIEM & MDR/XDR',
    brands: ['Microsoft', 'SentinelOne'],
    image: '/gallery/07.jpeg',
    copy: 'Centralized logging, threat detection, and managed response services.'
  },
  {
    slug: 'vapt',
    service: 'cybersecurity',
    name: 'VAPT Services',
    brands: ['Internal', 'Partner'],
    image: '/gallery/25.jpeg',
    copy: 'Vulnerability assessments and penetration testing to validate your security posture.'
  },
  {
    slug: 'structured-cabling',
    service: 'networking',
    name: 'Structured Cabling',
    brands: ['CommScope', 'Panduit'],
    image: '/gallery/22.jpeg',
    copy: 'Cat6/Cat6a copper and fiber cabling for offices, warehouses, and campuses.'
  },
  {
    slug: 'wireless-networks',
    service: 'networking',
    name: 'Wireless Networks',
    brands: ['Cisco', 'Ubiquiti', 'Aruba'],
    image: '/gallery/22.jpeg',
    copy: 'Enterprise Wi-Fi design, access points, and guest network segmentation.'
  },
  {
    slug: 'switches-routers',
    service: 'networking',
    name: 'Switches & Routers',
    brands: ['Cisco', 'HP', 'MikroTik'],
    image: '/gallery/22.jpeg',
    copy: 'Core, distribution, and edge switching with routing and VLAN configuration.'
  },
  {
    slug: 'amc-support',
    service: 'managed-services',
    name: 'AMC Contracts',
    brands: ['Urban Digital'],
    image: '/gallery/15.jpeg',
    copy: 'Annual maintenance covering hardware, software, and preventive care.'
  },
  {
    slug: 'sla-helpdesk',
    service: 'managed-services',
    name: 'SLA Helpdesk',
    brands: ['Urban Digital'],
    image: '/gallery/16.jpeg',
    copy: 'Guaranteed response times for incidents, requests, and user support.'
  },
  {
    slug: 'it-outsourcing',
    service: 'managed-services',
    name: 'IT Outsourcing',
    brands: ['Urban Digital'],
    image: '/gallery/12.jpeg',
    copy: 'Fully or partially managed IT operations for growing teams.'
  },
  {
    slug: 'it-consulting',
    service: 'managed-services',
    name: 'IT Consulting',
    brands: ['Urban Digital'],
    image: '/gallery/20.jpeg',
    copy: 'Technology roadmaps, vendor selection, and architecture guidance.'
  },
  {
    slug: 'cctv-systems',
    service: 'av-elv',
    name: 'CCTV Systems',
    brands: ['Hikvision', 'Dahua'],
    image: '/gallery/25.jpeg',
    copy: 'IP cameras, NVRs, and remote monitoring for offices and facilities.'
  },
  {
    slug: 'access-control',
    service: 'av-elv',
    name: 'Access Control',
    brands: ['HID', 'ZKTeco'],
    image: '/gallery/23.jpeg',
    copy: 'Card readers, biometric entry, and door controller integration.'
  },
  {
    slug: 'video-conferencing',
    service: 'av-elv',
    name: 'Video Conferencing',
    brands: ['Logitech', 'Poly', 'Yealink'],
    image: '/gallery/24.jpeg',
    copy: 'Meeting room cameras, speakers, displays, and Teams/Zoom room setups.'
  },
  {
    slug: 'smart-office',
    service: 'av-elv',
    name: 'Smart Office Setups',
    brands: ['Apple', 'Logitech', 'Crestron'],
    image: '/gallery/16.jpeg',
    copy: 'Integrated collaboration spaces with AV, control, and network connectivity.'
  }
]

export function getProductsByService(serviceSlug) {
  return products.filter((product) => product.service === serviceSlug)
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}

export default products
