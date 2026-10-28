import React from 'react';
import { servicesData } from '../data/servicesData';
import { Cloud, Code2, TrendingDown, GitBranch, ShieldCheck, Headphones, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  Cloud,
  Code2,
  TrendingDown,
  GitBranch,
  ShieldCheck,
  Headphones
};

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            Core Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Enterprise-Grade <span className="gradient-text">IT & Engineering Services</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Whether you need modern cloud architecture, full-stack software development, or continuous cost and security governance, RiseStack Technologies delivers robust solutions tailored to your operational needs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid-3">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Cloud;
            return (
              <div 
                key={service.id} 
                className="glass-card" 
                style={{ 
                  padding: '32px 28px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan-400)'
                    }}>
                      <IconComponent size={24} />
                    </div>
                    <span className="badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.3 }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.55 }}>
                    {service.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Capabilities:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.capabilities.map((cap, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                          <Check size={15} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    marginBottom: '16px'
                  }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Deliverables:</strong> {service.deliverables}
                  </div>

                  <button
                    onClick={() => onOpenModal(service.title)}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
