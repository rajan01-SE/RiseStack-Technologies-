import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Users, Zap, DollarSign } from 'lucide-react';

const serviceOptions = [
  { id: 'cloud-migration', name: 'Cloud Architecture & Migration', baseWeeks: 4, basePriceUSD: 5500, team: '1 Cloud Architect, 1 DevOps Engineer' },
  { id: 'custom-software', name: 'Custom Full-Stack Application', baseWeeks: 8, basePriceUSD: 8500, team: '1 Tech Lead, 2 Full-Stack Devs, 1 QA' },
  { id: 'finops-audit', name: 'FinOps & Cloud Cost Optimization Audit', baseWeeks: 2, basePriceUSD: 3000, team: '1 Senior FinOps Architect' },
  { id: 'devops-cicd', name: 'DevOps & GitOps Pipeline Automation', baseWeeks: 3, basePriceUSD: 4200, team: '1 Lead SRE / DevOps Engineer' },
  { id: 'managed-it', name: '24/7 Managed IT & Infrastructure Support', baseWeeks: 4, basePriceUSD: 3500, team: '24/7 SRE Rotation, 1 Account Architect' }
];

const scaleOptions = [
  { id: 'startup', label: 'Startup / MVP', multiplier: 1.0, desc: 'Rapid deployment, lean architecture, core workflows' },
  { id: 'growth', label: 'Growth Scale', multiplier: 1.6, desc: 'High-availability, microservices, auto-scaling, caching' },
  { id: 'enterprise', label: 'Enterprise Grade', multiplier: 2.5, desc: 'Multi-region, SOC2/HIPAA compliance, strict SLAs, HA failover' }
];

const providerOptions = [
  'AWS (Amazon Web Services)',
  'Google Cloud (GCP)',
  'Microsoft Azure',
  'Multi-Cloud / Hybrid'
];

const currencyRates = {
  USD: { symbol: '$', rate: 1.0 },
  INR: { symbol: '₹', rate: 86.5 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.78 }
};

export default function ScopeEstimator({ currency = 'USD', onOpenModal }) {
  const [selectedService, setSelectedService] = useState(serviceOptions[0].id);
  const [selectedScale, setSelectedScale] = useState('growth');
  const [selectedProvider, setSelectedProvider] = useState(providerOptions[0]);

  const service = serviceOptions.find(s => s.id === selectedService) || serviceOptions[0];
  const scale = scaleOptions.find(s => s.id === selectedScale) || scaleOptions[1];

  const estimatedWeeks = Math.round(service.baseWeeks * (scale.id === 'startup' ? 0.8 : scale.id === 'growth' ? 1.2 : 1.8));
  const rawPriceUSD = Math.round(service.basePriceUSD * scale.multiplier);

  const curr = currencyRates[currency] || currencyRates.USD;
  const formattedPrice = (rawPriceUSD * curr.rate).toLocaleString('en-US', {
    maximumFractionDigits: 0
  });

  return (
    <section id="estimator" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            Interactive Planning
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            IT Solution & <span className="gradient-text">Project Scope Estimator</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Select your technical requirements below to view estimated engineering timelines, dedicated team composition, and ballpark investment tiers.
          </p>
        </div>

        {/* Estimator Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Controls Column */}
          <div className="glass-card" style={{ padding: '32px' }}>
            {/* Step 1: Service Type */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px' }}>
                1. Select Required IT Service:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {serviceOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedService(opt.id)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: selectedService === opt.id ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-tertiary)',
                      border: `1px solid ${selectedService === opt.id ? 'var(--cyan-400)' : 'var(--border-subtle)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontWeight: selectedService === opt.id ? 700 : 500, fontSize: '0.92rem' }}>
                      {opt.name}
                    </span>
                    {selectedService === opt.id && <CheckCircle2 size={16} color="var(--cyan-400)" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px' }}>
                2. Operational Scale & Complexity:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {scaleOptions.map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setSelectedScale(sc.id)}
                    style={{
                      padding: '12px 8px',
                      borderRadius: 'var(--radius-md)',
                      background: selectedScale === sc.id ? 'var(--gradient-brand)' : 'var(--bg-tertiary)',
                      color: selectedScale === sc.id ? '#FFFFFF' : 'var(--text-primary)',
                      border: `1px solid ${selectedScale === sc.id ? 'transparent' : 'var(--border-subtle)'}`,
                      fontWeight: 600,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                {scale.desc}
              </div>
            </div>

            {/* Step 3: Cloud Target */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px' }}>
                3. Primary Cloud Environment:
              </label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {providerOptions.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="glass-card" style={{ padding: '36px', border: '1px solid var(--border-glow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span className="badge badge-brand">Estimated Scope</span>
              <span className="badge badge-success">No-Obligation Estimate</span>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Projected Investment Tier
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                <span className="mono" style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--cyan-400)' }}>
                  {curr.symbol}{formattedPrice}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                  {service.id === 'managed-it' ? '/ month' : 'est. milestone'}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                *Transparent fixed-fee sprint model or dedicated monthly retainer.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)'
              }}>
                <Clock size={20} color="var(--violet-400)" />
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>Estimated Timeline</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                    {service.id === 'managed-it' ? 'Ongoing SLA Support' : `${estimatedWeeks} - ${estimatedWeeks + 2} Weeks`}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)'
              }}>
                <Users size={20} color="var(--cyan-400)" />
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>Allocated Engineering Team</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>{service.team}</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)'
              }}>
                <Zap size={20} color="var(--emerald-400)" />
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>Target Cloud Platform</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>{selectedProvider}</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal(`${service.name} (${scale.label} - ${selectedProvider})`)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <span>Lock in This Scope & Schedule Review</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
