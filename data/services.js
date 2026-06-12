const services = [
  {
    slug: 'hardware',
    code: 'HW',
    title: 'Hardware Solutions',
    tagline: 'Servers, desktops, laptops & storage',
    copy: 'Servers, desktops, laptops, and storage systems from HP, Dell, Lenovo, NetApp, and Synology.',
    overview: 'We supply and support enterprise-grade hardware tailored to your workload — from rack servers and NAS storage to executive laptops and creative workstations.',
    heroImage: '/gallery/19.jpeg',
    points: ['Servers', 'Desktops & laptops', 'HP, Dell, Lenovo', 'NetApp & Synology'],
    capabilities: [
      'Server procurement, deployment, and lifecycle management',
      'Business laptops and desktops from HP, Dell, and Lenovo',
      'NetApp and Synology storage planning and rollout',
      'Apple MacBook, Mac Studio, and Mac Pro supply',
      'Hardware refresh, warranty, and AMC coordination'
    ],
    process: [
      ['Assess', 'Review workload, capacity, and budget requirements.'],
      ['Specify', 'Match the right brands, models, and configurations.'],
      ['Deploy', 'Procure, deliver, install, and configure hardware.'],
      ['Support', 'Ongoing maintenance, upgrades, and replacement planning.']
    ]
  },
  {
    slug: 'cloud',
    code: 'CL',
    title: 'Cloud Services',
    tagline: 'Office 365, modernization & DR',
    copy: 'Office 365, cloud modernization, backup planning, and disaster recovery for resilient operations.',
    overview: 'Move, manage, and protect your workloads in the cloud with structured migration planning, Microsoft 365 governance, and tested disaster recovery.',
    heroImage: '/gallery/21.jpeg',
    points: ['Office 365', 'Cloud modernization', 'Backup', 'Disaster recovery'],
    capabilities: [
      'Microsoft Office 365 deployment and management',
      'Cloud modernization and migration planning',
      'Backup and disaster recovery solutions',
      'Cloud monitoring, optimization, and cost control',
      'Hybrid integration for cloud and on-premises systems'
    ],
    process: [
      ['Discover', 'Map applications, users, and data dependencies.'],
      ['Plan', 'Design migration waves, security, and rollback paths.'],
      ['Migrate', 'Execute phased moves with minimal disruption.'],
      ['Optimize', 'Monitor performance, cost, and recovery readiness.']
    ]
  },
  {
    slug: 'cybersecurity',
    code: 'CS',
    title: 'Cybersecurity',
    tagline: 'Endpoint, email & threat defense',
    copy: 'Endpoint protection, email security, UTM, SIEM, VAPT, and MDR/XDR threat management.',
    overview: 'Layered security controls that protect endpoints, email, networks, and identities — backed by monitoring, testing, and managed detection.',
    heroImage: '/gallery/07.jpeg',
    points: ['Endpoint protection', 'Email security', 'UTM & SIEM', 'VAPT & MDR/XDR'],
    capabilities: [
      'Endpoint protection and email security',
      'Unified threat management (UTM) and SIEM',
      'Vulnerability assessment and penetration testing (VAPT)',
      'Managed detection and response (MDR/XDR)',
      'Firewall, identity, and access management'
    ],
    process: [
      ['Assess', 'Evaluate exposure across endpoints, email, and network.'],
      ['Protect', 'Deploy controls aligned to your risk profile.'],
      ['Detect', 'Monitor threats with SIEM and MDR/XDR coverage.'],
      ['Respond', 'Contain incidents and strengthen defenses.']
    ]
  },
  {
    slug: 'networking',
    code: 'NI',
    title: 'Networking & Infrastructure',
    tagline: 'Cabling, wireless & core network',
    copy: 'Structured cabling, wireless connectivity, switches, and routers for reliable business networks.',
    overview: 'Design and deploy the physical and logical network foundation your business runs on — from structured cabling to wireless and core switching.',
    heroImage: '/gallery/22.jpeg',
    points: ['Structured cabling', 'Wireless', 'Switches', 'Routers'],
    capabilities: [
      'Structured cabling design and installation',
      'Enterprise wireless planning and deployment',
      'Switch and router procurement and configuration',
      'Network segmentation and VLAN management',
      'Performance testing and documentation'
    ],
    process: [
      ['Survey', 'Assess site layout, capacity, and growth needs.'],
      ['Design', 'Plan cabling paths, AP placement, and core topology.'],
      ['Install', 'Deploy cabling, switches, routers, and wireless.'],
      ['Validate', 'Test throughput, coverage, and failover readiness.']
    ]
  },
  {
    slug: 'managed-services',
    code: 'MS',
    title: 'Managed Services',
    tagline: 'AMC, SLA support & consulting',
    copy: 'AMC, SLA-based support, outsourcing, and consulting to keep technology running smoothly.',
    overview: 'Outsource day-to-day IT operations to a team that works on SLA guarantees — from helpdesk and patching to strategic consulting.',
    heroImage: '/gallery/15.jpeg',
    points: ['AMC', 'SLA-based support', 'Outsourcing', 'Consulting'],
    capabilities: [
      'Annual maintenance contracts (AMC)',
      'SLA-based support and response guarantees',
      'IT outsourcing and remote management',
      'Technology consulting and roadmap planning',
      '24/7 monitoring, patching, and helpdesk services'
    ],
    process: [
      ['Onboard', 'Document systems, users, and support priorities.'],
      ['Stabilize', 'Resolve backlog issues and close monitoring gaps.'],
      ['Operate', 'Run helpdesk, patching, and proactive maintenance.'],
      ['Improve', 'Report performance and recommend upgrades.']
    ]
  },
  {
    slug: 'av-elv',
    code: 'AV',
    title: 'AV & ELV Solutions',
    tagline: 'CCTV, access control & smart offices',
    copy: 'CCTV, access control, video conferencing, and smart office setups for modern workplaces.',
    overview: 'Integrated audio-visual and low-voltage systems that make workplaces safer, smarter, and more connected.',
    heroImage: '/gallery/23.jpeg',
    points: ['CCTV', 'Access control', 'Video conferencing', 'Smart office'],
    capabilities: [
      'CCTV system design, supply, and installation',
      'Access control and door entry systems',
      'Video conferencing room setup and support',
      'Smart office and collaboration technology',
      'ELV integration with IT infrastructure'
    ],
    process: [
      ['Scope', 'Define coverage, access points, and room requirements.'],
      ['Design', 'Select cameras, controllers, and AV components.'],
      ['Install', 'Deploy hardware and integrate with network.'],
      ['Train', 'Hand over with user training and support plans.']
    ]
  }
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug)
}

export default services
