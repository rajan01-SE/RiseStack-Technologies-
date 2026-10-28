import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "What is RiseStack Technologies' core focus and expertise?",
    a: "RiseStack Technologies is a specialized IT services and engineering consultancy. We design and build enterprise-grade cloud architectures, custom full-stack web and mobile software, automated CI/CD DevOps workflows, and continuous FinOps cloud cost optimization systems."
  },
  {
    q: "How does RiseStack work with major cloud platforms like AWS, Google Cloud, and Azure?",
    a: "We work directly within the ecosystems of AWS, Google Cloud, and Microsoft Azure as expert architecture and implementation consultants. We provide objective, vendor-neutral guidance so your business gets the best performance, security, and cost-efficiency without being locked into a single provider."
  },
  {
    q: "What engagement models do you offer for projects?",
    a: "We offer flexible engagement models tailored to your stage: 1) Fixed-scope milestone sprints (ideal for migrations or new app builds), 2) Dedicated engineering squads (for continuous product development), and 3) Monthly Managed IT, SRE & FinOps retainers for 24/7 reliability and cost governance."
  },
  {
    q: "How do you handle security, intellectual property, and NDAs?",
    a: "We sign standard mutual Non-Disclosure Agreements (NDAs) before reviewing any codebase or architectural diagrams. All source code, infrastructure scripts, and intellectual property remain 100% owned by your company. We enforce strict SOC2/HIPAA-aligned security protocols throughout development."
  },
  {
    q: "Can you optimize our existing cloud infrastructure if our bills are too high?",
    a: "Yes. Our FinOps & Infrastructure Audit pinpoints overprovisioned instances, idle volumes, unoptimized database queries, and inefficient network egress. Clients typically achieve between 25% and 40% reduction in monthly cloud spend while increasing application responsiveness."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge badge-brand" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} /> Clear Answers
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Everything you need to know about partnering with RiseStack Technologies for your IT and cloud initiatives.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--border-glow)' : 'var(--border-subtle)'
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 600, color: isOpen ? 'var(--cyan-400)' : 'var(--text-primary)' }}>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    color="var(--text-dim)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </div>
                {isOpen && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

