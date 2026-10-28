import React from 'react';
import { Layers, Mail, ShieldCheck, MapPin, Globe } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', padding: '72px 0 36px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '56px'
        }}>
          {/* Column 1: Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-glow-cyan)'
              }}>
                <Layers size={20} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                RiseStack
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              RiseStack Technologies delivers enterprise IT consulting, scalable multi-cloud architectures, full-stack software development, and proactive FinOps optimization.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="var(--cyan-400)" />
                <a href="mailto:hello@risestack.in" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  hello@risestack.in
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={15} color="var(--violet-400)" />
                <span>Global Remote Engineering Delivery</span>
              </div>
            </div>
          </div>

          {/* Column 2: IT Services */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              IT & Cloud Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cloud Architecture & Migration</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Custom Full-Stack Engineering</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>FinOps & Cloud Cost Optimization</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>DevOps CI/CD & Kubernetes</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>24/7 Managed IT & SRE Support</a></li>
            </ul>
          </div>

          {/* Column 3: Tech Ecosystem */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Technologies We Consult
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Amazon Web Services (AWS)</a></li>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Google Cloud Platform (GCP)</a></li>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Microsoft Azure</a></li>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>React, Next.js & TypeScript</a></li>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Docker, Kubernetes & Terraform</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Start an Initiative
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '16px' }}>
              Have an upcoming cloud migration, application rewrite, or need a FinOps cost review?
            </p>
            <button
              onClick={() => onOpenModal()}
              className="btn btn-primary btn-sm"
              style={{ width: '100%' }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & Transparency Strip */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          lineHeight: 1.6
        }}>
          <div>
            <strong>Disclosure & Trademark Notice:</strong> RiseStack Technologies is an independent IT services, software development, and cloud consulting firm. All product names, logos, and brands (including AWS, Amazon Web Services, Google Cloud, Microsoft Azure, Docker, Kubernetes, and Terraform) are property of their respective owners. Mention of these names is solely to describe technical capabilities and consulting competencies and does not imply official endorsement or formal reseller partnership.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>© {new Date().getFullYear()} RiseStack Technologies. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ cursor: 'pointer' }}>Security Policy</span>
              <span style={{ cursor: 'pointer' }}>Non-Disclosure (NDA) Terms</span>
              <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

