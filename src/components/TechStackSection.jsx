import React, { useState } from 'react';
import { techStackData } from '../data/techStackData';
import { Cpu, Server, Terminal, Database, CheckCircle2 } from 'lucide-react';

const categoryIcons = {
  'Cloud & Infrastructure': Server,
  'Full-Stack & Frontend': Terminal,
  'Backend & APIs': Cpu,
  'Databases & Observability': Database
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories = activeTab === 'All'
    ? techStackData
    : techStackData.filter(c => c.category === activeTab);

  return (
    <section id="tech-stack" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            Technology Matrix
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Modern <span className="gradient-text">Engineering Ecosystem</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Our engineering teams specialize in industry-standard cloud providers, modern programming languages, container runtimes, and distributed data systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {['All', ...techStackData.map(c => c.category)].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: 'var(--radius-full)', padding: '8px 18px' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredCategories.map((cat) => {
            const CatIcon = categoryIcons[cat.category] || Server;
            return (
              <div key={cat.category} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--violet-400)'
                  }}>
                    <CatIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{cat.category}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  {cat.description}
                </p>

                <div className="grid-3" style={{ gap: '16px' }}>
                  {cat.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <CheckCircle2 size={16} color="var(--cyan-400)" />
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', paddingLeft: '24px' }}>
                        {skill.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Vendor-Neutral Note */}
        <div style={{
          marginTop: '36px',
          background: 'var(--bg-secondary)',
          border: '1px dashed var(--border-glow)',
          borderRadius: 'var(--radius-md)',
          padding: '18px 24px',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: 'var(--text-secondary)'
        }}>
          💡 <strong>Vendor-Neutral Engineering Strategy:</strong> We analyze your architectural workload without bias, recommending and implementing the right mix of AWS, GCP, Azure, or hybrid setups based purely on your performance, latency, and budget requirements.
        </div>
      </div>
    </section>
  );
}
