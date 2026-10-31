// Single source of truth for everything the site says about Naveen.
// Edit copy, links, doors and timeline entries here; components only render it.

export const profile = {
  name: 'Naveen Kumar',
  firstName: 'Naveen',
  initials: 'NK',
  headline: 'DevOps · MLOps · AI Infra Engineer',
  location: 'Bangalore, India',
  city: 'Bangalore',
  timezone: 'Asia/Kolkata',
  workMode: 'Hybrid · Remote',
  email: 'naveenrayan29@gmail.com',
  cv: 'https://drive.google.com/file/d/1GqjHByCZzrhZpb9fxY49GowfYgd4z2eY/view?usp=sharing',
  github: 'https://github.com/NaveeN-929',
  linkedin: 'https://www.linkedin.com/in/naveen-kumar-cenrayan/',
  description:
    'Naveen Kumar is a DevOps, MLOps and AI-infrastructure engineer in Bangalore building CI/CD on AWS, Kubernetes platforms, agentic RAG pipelines and multi-agent AI systems.',
  roles: ['DevOps Engineer', 'MLOps Engineer', 'AI Infra Engineer', 'Agent Builder', 'Cloud Tamer'],
  languages: ['English', 'Tamil', 'Kannada', 'German'],
};

// Self-ratings shown on the ability card. Tune freely.
export const abilities = [
  { label: 'CI/CD & Automation', score: 95 },
  { label: 'Cloud · AWS / GCP', score: 90 },
  { label: 'Kubernetes & Docker', score: 90 },
  { label: 'AI Infra & RAG', score: 85 },
];

export type Visual =
  | { kind: 'stat'; value: string; label: string }
  | { kind: 'term'; lines: string[] };

export interface CaseStudy {
  kicker: string;
  title: string;
  org: string;
  meta: string;
  body: string;
  tags: string[];
  link?: { href: string; label: string };
  visual: Visual;
}

export interface Door {
  slug: string;
  title: string;
  plate: string;
  kicker: string;
  color: string;
  points: string[];
  intro: string;
  cases: CaseStudy[];
}

export const doors: Door[] = [
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    plate: 'DevOps Engineer',
    kicker: 'From commit to cluster, on repeat',
    color: '#2f4160',
    points: [
      'CI/CD with GitHub Actions',
      'Docker, Compose & Kubernetes',
      'Infrastructure as code with Terraform',
      'AWS, Google Cloud & Azure',
      'Cloud cost optimization',
    ],
    intro:
      'Pipelines that turn a merge into a running release, clusters that stay boring, and cloud bills that shrink instead of creep.',
    cases: [
      {
        kicker: 'Platform refactor',
        title: 'Twerlo AI, v1 to v2',
        org: 'Twerlo AI (Eikyo Pvt Ltd)',
        meta: 'Sep 2023 – Jun 2024 · Bangalore',
        body: 'Led the architectural refactor from v1 to v2, rebuilt delivery on GitHub Actions, Docker and Kubernetes, and tuned the platform until the cloud bill dropped by 40%.',
        tags: ['GitHub Actions', 'Kubernetes', 'Docker', 'Cost optimization'],
        visual: { kind: 'stat', value: '−40%', label: 'cloud spend after the v2 cut-over' },
      },
      {
        kicker: 'Web3 infrastructure',
        title: 'Decentralized web on Solana',
        org: 'Coppertech Pvt Ltd',
        meta: 'May 2022 – Aug 2023 · Bangalore',
        body: 'Designed Solana-based decentralized web solutions and shipped them through GitHub Actions, Docker Compose and Kubernetes, while trimming cloud costs by 70%.',
        tags: ['Solana', 'Docker Compose', 'Kubernetes', 'CI/CD'],
        visual: { kind: 'stat', value: '−70%', label: 'cloud costs across the stack' },
      },
      {
        kicker: 'Client delivery',
        title: 'Pipelines for client launches',
        org: 'Tivona Global Technologies',
        meta: 'Sep 2021 – Apr 2022 · Chennai',
        body: 'First DevOps seat: GitHub Actions pipelines for client projects and the deployments of several production web applications.',
        tags: ['GitHub Actions', 'Deployments', 'Linux'],
        visual: {
          kind: 'term',
          lines: ['$ git push origin main', '→ build ✓  test ✓  image ✓', '→ deploy production', '✓ live'],
        },
      },
    ],
  },
  {
    slug: 'ai-infra',
    title: 'AI Infra & Agents',
    plate: 'AI Infra Engineer',
    kicker: 'LLM systems that hold up in production',
    color: '#4b3546',
    points: [
      'Agentic RAG pipelines',
      'Multi-agent AI systems',
      'Vector databases (Qdrant)',
      'Python & FastAPI services',
      'MLOps on AWS',
    ],
    intro:
      'Retrieval, agents and the plumbing underneath them: vector stores, queues and the pipelines that ship it all safely.',
    cases: [
      {
        kicker: 'Agentic RAG',
        title: 'Finance & data intelligence',
        org: 'PayTech Group',
        meta: 'Dec 2024 – Now · Pune (Hybrid)',
        body: 'Core-team engineer on AI-powered finance products. Designed and built an agentic RAG pipeline and multi-agent AI systems, with the CI/CD to run them on AWS.',
        tags: ['Agentic RAG', 'Multi-agent', 'AWS', 'Qdrant', 'Python'],
        visual: {
          kind: 'term',
          lines: ['planner → retriever → analyst', 'retriever: top-k · qdrant', 'analyst: grounded ✓  cited ✓', 'deploy: aws via ci/cd'],
        },
      },
      {
        kicker: 'AI for good',
        title: 'Sahya',
        org: 'Open source',
        meta: 'Side project',
        body: 'An AI platform supporting Indian men through domestic, legal, custody, workplace and mental-health crises.',
        tags: ['LLM', 'RAG', 'Open source'],
        link: { href: 'https://github.com/NaveeN-929/sahya', label: 'View on GitHub' },
        visual: { kind: 'stat', value: '24/7', label: 'a place to start when things fall apart' },
      },
      {
        kicker: 'Learning platform',
        title: 'Eduru',
        org: 'Coming soon',
        meta: 'In progress',
        body: 'An AI-powered mentoring and learning platform.',
        tags: ['AI mentoring', 'EdTech'],
        visual: { kind: 'term', lines: ['$ eduru status', 'stage: building', 'eta: soon'] },
      },
    ],
  },
  {
    slug: 'platform-reliability',
    title: 'Platform & Reliability',
    plate: 'Platform Engineer',
    kicker: 'Observable, automated, hard to break',
    color: '#5f7560',
    points: [
      'Prometheus & Grafana monitoring',
      'Kafka, RabbitMQ & pub/sub',
      'Dead-letter queues & microservices',
      'SSL & certificate automation',
      'Load testing with k6',
    ],
    intro:
      'The unglamorous layer that decides whether you sleep: monitoring, messaging, certificates and the decisions behind the infrastructure.',
    cases: [
      {
        kicker: 'Infra leadership',
        title: 'Cloud decisions, remote',
        org: 'Zynka Technologies',
        meta: 'Feb 2024 – Mar 2026 · Surrey, UK (Remote)',
        body: 'Part of the core team leading cloud infrastructure decisions. Built and maintained CI/CD pipelines and rolled out the monitoring stack.',
        tags: ['Monitoring', 'CI/CD', 'Architecture'],
        visual: {
          kind: 'term',
          lines: ['alert: api_latency_p95', 'status: resolved', 'grafana: all green', 'on-call: quiet night ☾'],
        },
      },
      {
        kicker: 'Automation',
        title: 'SSL automation & cost control',
        org: 'BDI Plus Lab Pvt Ltd',
        meta: 'Aug 2024 – Nov 2024 · Bangalore',
        body: 'Built and maintained CI/CD pipelines for client projects, optimized cloud costs and automated SSL certificate management.',
        tags: ['SSL automation', 'CI/CD', 'Cost optimization'],
        visual: { kind: 'stat', value: '0', label: 'certificates renewed by hand' },
      },
    ],
  },
  {
    slug: 'products',
    title: 'Products I Build',
    plate: 'Product Builder',
    kicker: 'SaaS from idea to invoice',
    color: '#a65a33',
    points: [
      'React, Next.js & React Native',
      'Node.js, Express & FastAPI',
      'Firebase & Supabase',
      'MongoDB, PostgreSQL & Redis',
      'Running it after launch',
    ],
    intro:
      'Full-stack products I design, build and operate myself, from a trucking invoice tool to an EV-charging management system.',
    cases: [
      {
        kicker: 'Invoice SaaS',
        title: 'Logislip',
        org: 'Founder · Full-stack',
        meta: 'Since Jan 2018 · Bangalore',
        body: 'Invoice management for the trucking industry, built and run end to end as a personal SaaS.',
        tags: ['SaaS', 'Full-stack'],
        link: { href: 'https://www.logislip.in/', label: 'Visit logislip.in' },
        visual: { kind: 'stat', value: '2018', label: 'shipping and running since' },
      },
      {
        kicker: 'E-commerce',
        title: 'Mystrix',
        org: 'Creator',
        meta: 'Live',
        body: 'A gamified e-commerce platform that turns shopping into something closer to play.',
        tags: ['E-commerce', 'Gamification'],
        link: { href: 'https://mystrix.in/', label: 'Visit mystrix.in' },
        visual: { kind: 'term', lines: ['cart: 3 items', 'quest unlocked: first order', 'reward: +120 xp'] },
      },
      {
        kicker: 'EV charging',
        title: 'Rusty OCPP',
        org: 'Coming soon',
        meta: 'In progress',
        body: 'An electric-vehicle charging station management system (CSMS) built around the OCPP protocol.',
        tags: ['OCPP', 'EV', 'CSMS'],
        visual: { kind: 'term', lines: ['BootNotification → Accepted', 'StatusNotification: Available', 'StartTransaction ✓'] },
      },
      {
        kicker: 'Operations',
        title: 'MechTrack & GharSetu',
        org: 'Coming soon',
        meta: 'In progress',
        body: 'MechTrack is an operating system for two-wheeler service centres; GharSetu manages properties, tenants and maintenance.',
        tags: ['SaaS', 'Operations'],
        visual: { kind: 'stat', value: '2', label: 'products on the workbench' },
      },
    ],
  },
];

export interface Chapter {
  from: string;
  to: string;
  year: number;
  role: string;
  org: string;
  points: string[];
  hue: string;
}

// Newest first; `year` drives the rolling counter.
export const story: Chapter[] = [
  {
    from: 'Dec 2024', to: 'Now', year: 2024, hue: '#f0a27a',
    role: 'DevOps | MLOps Engineer', org: 'PayTech Group · Pune (Hybrid)',
    points: [
      'Core team on AI-powered finance and data-intelligence products.',
      'Designed and built an agentic RAG pipeline and multi-agent AI systems, shipped through CI/CD on AWS.',
    ],
  },
  {
    from: 'Aug 2024', to: 'Nov 2024', year: 2024, hue: '#e6b8d0',
    role: 'DevOps Engineer', org: 'BDI Plus Lab · Bangalore',
    points: ['Built and maintained CI/CD pipelines for client projects.', 'Cut cloud costs and automated SSL certificate management.'],
  },
  {
    from: 'Feb 2024', to: 'Mar 2026', year: 2024, hue: '#b9d2f0',
    role: 'DevOps Freelancer', org: 'Zynka Technologies · Surrey, UK (Remote)',
    points: ['Core team member leading cloud infrastructure decisions.', 'Built CI/CD pipelines and rolled out monitoring.'],
  },
  {
    from: 'Sep 2023', to: 'Jun 2024', year: 2023, hue: '#c4dcb4',
    role: 'DevOps Engineer', org: 'Twerlo AI (Eikyo) · Bangalore',
    points: ['Led the architectural refactor from v1 to v2.', 'CI/CD on GitHub Actions, Docker and Kubernetes; cloud costs down 40%.'],
  },
  {
    from: 'May 2022', to: 'Aug 2023', year: 2022, hue: '#f2d48a',
    role: 'DevOps | System Engineer', org: 'Coppertech · Bangalore',
    points: ['Designed Solana-based decentralized web solutions.', 'Pipelines on GitHub Actions, Compose and Kubernetes; cloud costs down 70%.'],
  },
  {
    from: 'Sep 2021', to: 'Apr 2022', year: 2021, hue: '#d9c2f0',
    role: 'DevOps Engineer', org: 'Tivona Global Technologies · Chennai',
    points: ['First DevOps role: GitHub Actions pipelines for client work.', 'Deployed several production web applications.'],
  },
  {
    from: '2018', to: '2021', year: 2018, hue: '#a8dcd4',
    role: 'Bachelor of Computer Applications', org: 'St. Joseph University · Bangalore',
    points: ['Three years of computer applications, with side projects running alongside the syllabus.'],
  },
  {
    from: 'Jan 2018', to: 'Now', year: 2018, hue: '#f0b48a',
    role: 'Full-stack Engineer', org: 'Logislip · personal project',
    points: ['Built an invoice-management SaaS for the trucking industry, and still run it.'],
  },
];
