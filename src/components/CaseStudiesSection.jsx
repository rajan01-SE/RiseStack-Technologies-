import React from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

export default function CaseStudiesSection({ onOpenModal }) {
  return (
    <section id="case-studies" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            Proven Impact
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Featured Engineering <span className="gradient-text">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore how we engineered modern cloud and software solutions that cut cloud bills, eliminated downtime, and accelerated feature releases.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {caseStudiesData.map((study) => (
            <div key={study.id} className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="badge badge-brand">{study.clientType}</span>
                  <span className="badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                    {study.serviceCategory}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.45rem', marginBottom: '18px', lineHeight: 1.3 }}>
                {study.title}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
                <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--rose-400)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Challenge
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {study.challenge}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--cyan-400)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Engineered Solution
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Metrics Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '24px'
              }}>
                {study.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--emerald-400)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <button
            onClick={() => onOpenModal('Custom Case Study Architecture Discussion')}
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Have a Similar Challenge? Discuss Your Architecture</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
