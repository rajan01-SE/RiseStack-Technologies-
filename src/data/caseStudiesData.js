export const caseStudiesData = [
  {
    id: 1,
    clientType: 'Fintech & Digital Payments',
    serviceCategory: 'Multi-Cloud Migration & FinOps',
    title: 'Migrating High-Frequency Payment Gateways with Zero Downtime',
    challenge: 'A growing fintech client suffered from erratic cloud bills and unpredictable latency spikes during market hours across unoptimized virtual machines.',
    solution: 'RiseStack engineered an automated containerized Kubernetes architecture on AWS with auto-scaling compute, coupled with an automated FinOps audit eliminating overprovisioned resources.',
    metrics: [
      { label: 'Cloud Cost Reduction', value: '38%' },
      { label: 'Uptime Maintained', value: '99.99%' },
      { label: 'P99 Latency Cut', value: '-45ms' }
    ]
  },
  {
    id: 2,
    clientType: 'HealthTech & Telemedicine',
    serviceCategory: 'DevSecOps & HIPAA Compliance',
    title: 'Automated CI/CD Pipeline & Zero-Trust Cloud Security Architecture',
    challenge: 'Manual deployment cycles took 3+ hours per release with high failure rates and strict HIPAA compliance certification deadlines.',
    solution: 'Designed an Infrastructure as Code (Terraform) blueprint on Google Cloud with automated SAST security scanning in GitHub Actions and centralized Vault secrets.',
    metrics: [
      { label: 'Release Time', value: '6 mins (from 3 hrs)' },
      { label: 'Deployment Frequency', value: '12x / week' },
      { label: 'Audit Compliance', value: '100% Passed' }
    ]
  },
  {
    id: 3,
    clientType: 'Enterprise B2B SaaS',
    serviceCategory: 'Custom Software & Microservices',
    title: 'Modernizing Monolith into Event-Driven Microservices',
    challenge: 'Legacy Ruby/MySQL monolith struggled to support 50,000+ concurrent enterprise users, leading to database deadlocks and slow page loads.',
    solution: 'Architected a distributed Go and Node.js microservices platform backed by PostgreSQL read-replicas, Redis distributed caching, and Kafka event queues.',
    metrics: [
      { label: 'Concurrent Capacity', value: '5x Increase' },
      { label: 'Page Load Speed', value: '0.8s (from 4.2s)' },
      { label: 'Server Incident Rate', value: '-82%' }
    ]
  }
];
