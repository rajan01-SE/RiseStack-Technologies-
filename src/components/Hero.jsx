import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Cloud, Code, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenModal, onScrollToEstimator }) {
  return (
    <section style={{
      position: 'relative',
      padding: '100px 0 80px 0',
      overflow: 'hidden',
      background: 'var(--gradient-glow)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="badge badge-brand" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
            <Zap size={14} /> Next-Gen IT Consulting & Cloud Architecture
          </span>
          <span className="badge badge-success" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
            <CheckCircle2 size={14} /> End-to-End Enterprise Delivery
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
          lineHeight: 1.15,
          fontWeight: 800,
          maxWidth: '960px',
          margin: '0 auto 24px auto',
          letterSpacing: '-0.03em'
        }}>
          Architecting Resilient <span className="gradient-text">Cloud Infrastructure</span> & High-Impact Software
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          lineHeight: 1.65
        }}>
          RiseStack Technologies helps startups and expanding enterprises build scalable software, migrate securely to AWS, Google Cloud & Azure, streamline DevOps release cycles, and eliminate cloud bill waste through continuous FinOps engineering.
        </p>

        {/* CTA Button Group */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '54px'
        }}>
          <button
            onClick={() => onOpenModal()}
            className="btn btn-primary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <span>Request Architecture Proposal</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onScrollToEstimator}
            className="btn btn-secondary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Calculator size={18} color="var(--cyan-400)" />
            <span>Interactive Project Estimator</span>
          </button>
        </div>

        {/* Key Engineering Metrics Strip */}
        <div className="grid-4" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--cyan-400)' }} className="mono">
              99.98%
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
              Target High Availability
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              Fault-tolerant cloud clustering
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--emerald-400)' }} className="mono">
              35%+
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
              Cloud Cost Optimization
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              Through automated FinOps audits
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--violet-400)' }} className="mono">
              &lt; 10m
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
              Automated Deployments
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              Turnkey CI/CD GitOps pipelines
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber-400)' }} className="mono">
              24/7/365
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
              Proactive SRE Support
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              Direct architect escalation channel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
