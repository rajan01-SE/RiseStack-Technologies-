export const servicesData = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture & Multi-Cloud Migration',
    badge: 'Cloud & Infrastructure',
    icon: 'Cloud',
    description: 'Design, migrate, and modernize cloud infrastructure across AWS, Google Cloud, and Microsoft Azure with high availability, disaster recovery, and zero downtime.',
    capabilities: [
      'Multi-cloud strategy & vendor-neutral architecture',
      'Automated zero-downtime cloud migration',
      'Container orchestration with Kubernetes (EKS, GKE, AKS)',
      'Serverless computing & event-driven systems',
      'High-availability disaster recovery planning'
    ],
    deliverables: 'Cloud Architecture Blueprint, Terraform IaC Modules, Migration Runbooks'
  },
  {
    id: 'custom-software',
    title: 'Enterprise Software & Full-Stack Engineering',
    badge: 'Application Development',
    icon: 'Code2',
    description: 'End-to-end development of scalable, secure, and mission-critical web and mobile applications using modern frameworks and clean architecture.',
    capabilities: [
      'Modern web apps (React, Next.js, TypeScript, Vue)',
      'High-throughput backend APIs (Node.js, Go, Python FastAPI)',
      'Cross-platform mobile apps (Flutter, React Native)',
      'Microservices architecture & message brokers (Kafka, RabbitMQ)',
      'API gateway integration & third-party connectors'
    ],
    deliverables: 'Production Codebase, CI/CD Pipeline, Automated Test Suite, OpenAPI Specs'
  },
  {
    id: 'finops-optimization',
    title: 'FinOps & Cloud Cost Optimization Advisory',
    badge: 'Cost Intelligence',
    icon: 'TrendingDown',
    description: 'Deep architectural audits to uncover infrastructure waste, right-size compute resources, and implement continuous cost governance without sacrificing performance.',
    capabilities: [
      'Comprehensive multi-cloud infrastructure cost audits',
      'Resource right-sizing, autoscaling & idle asset cleanup',
      'Reserved Instances & Savings Plans modeling',
      'Real-time anomaly detection & budget threshold alerts',
      'Unit economics modeling and cost allocation tagging'
    ],
    deliverables: 'FinOps Audit Report, Savings Action Plan, Automated Tagging Scripts'
  },
  {
    id: 'devops-sre',
    title: 'DevOps Automation & CI/CD Pipelines',
    badge: 'Automation & SRE',
    icon: 'GitBranch',
    description: 'Transform manual deployments into fast, reliable, automated release pipelines with Infrastructure as Code and enterprise GitOps practices.',
    capabilities: [
      'Infrastructure as Code (Terraform, Pulumi, Ansible)',
      'Automated CI/CD pipelines (GitHub Actions, GitLab CI)',
      'Automated canary & blue-green deployment strategies',
      'Observability stack (Prometheus, Grafana, OpenTelemetry, ELK)',
      'Site Reliability Engineering & SLO/SLA management'
    ],
    deliverables: 'GitOps Pipeline, IaC Repository, Centralized Monitoring Dashboards'
  },
  {
    id: 'cybersecurity',
    title: 'Enterprise Cybersecurity & DevSecOps',
    badge: 'Security & Compliance',
    icon: 'ShieldCheck',
    description: 'Embed security into every stage of your development lifecycle with automated vulnerability scanning, access control governance, and compliance readiness.',
    capabilities: [
      'Cloud security posture management (CSPM) & IAM audits',
      'Zero-trust network architecture & secrets management (Vault)',
      'Automated SAST/DAST security scanning in CI/CD',
      'Data encryption in transit and at rest',
      'SOC2, ISO 27001, and HIPAA compliance readiness'
    ],
    deliverables: 'Security Assessment Report, IAM Hardening Matrix, Remediation Playbook'
  },
  {
    id: 'managed-it',
    title: '24/7 Managed IT & Infrastructure Support',
    badge: 'Managed Services',
    icon: 'Headphones',
    description: 'Proactive 24/7 monitoring, incident response, and ongoing infrastructure maintenance backed by dedicated cloud architects and committed SLAs.',
    capabilities: [
      '24/7/365 infrastructure monitoring and rapid incident triage',
      'Continuous OS patching, kernel upgrades & backup verification',
      'Database management, replication & performance tuning',
      'Dedicated engineering escalation channel (Slack / Teams)',
      'Monthly infrastructure health & capacity planning reviews'
    ],
    deliverables: 'SLA Guarantee, Monthly Health Reports, Dedicated SRE Contact'
  }
];
