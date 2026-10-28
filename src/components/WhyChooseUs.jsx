import React from 'react';
import { ShieldCheck, Layers, GitPullRequest, DollarSign, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Vendor-Agnostic Cloud Strategy',
    color: 'var(--cyan-400)',
    desc: 'We are not tied to a single cloud provider. We evaluate AWS, Google Cloud, Azure, and edge platforms purely based on your workload needs, latency requirements, and cost profile.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance First',
    color: 'var(--emerald-400)',
    desc: 'Zero-trust networks, encrypted secrets, automated CI/CD security scanning, and compliance-ready infrastructure blueprints (SOC2, ISO 27001, HIPAA).'
  },
  {
    icon: GitPullRequest,
    title: 'Agile Sprints & Direct Access',
    color: 'var(--violet-400)',
    desc: 'Work directly with senior cloud architects and software engineers via dedicated Slack or Teams channels. Weekly demo sprints and clear git commits.'
  },
  {
    icon: DollarSign,
    title: 'FinOps Baked into Every Build',
    color: 'var(--amber-400)',
    desc: 'We design cloud architecture with cost efficiency in mind from line one, preventing unexpected bill shock through rightsizing, autoscaling, and spot orchestration.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            The RiseStack Standard
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Why Leading Businesses <span className="gradient-text">Partner with RiseStack</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We combine high-level architectural consulting with pragmatic, hands-on engineering execution to deliver systems that scale smoothly and reliably.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="glass-card" style={{ padding: '36px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: p.color
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
