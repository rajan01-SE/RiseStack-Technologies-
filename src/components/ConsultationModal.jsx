import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Building, User, FileText } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialService = '', onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Cloud Architecture & Multi-Cloud Migration',
    budget: '$5,000 - $15,000',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess(`Thank you ${formData.name}! Your consultation request has been submitted. Our Lead Architect will reach out within 4 business hours.`);
      onClose();
    }, 700);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '36px' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="badge badge-brand" style={{ marginBottom: '8px' }}>
            <ShieldCheck size={14} /> Confidential Architecture Consultation
          </span>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
            Schedule an IT & Cloud Consultation
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
            Speak directly with a senior cloud architect. We evaluate your stack, offer tailored recommendations, and provide clear milestone scopes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajan Pandey"
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              <User size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '13px' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Work Email *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                <Mail size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '13px' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Company Name
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Tech"
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                <Building size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '13px' }} />
              </div>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Service Needed
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 14px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            >
              <option value="Cloud Architecture & Multi-Cloud Migration">Cloud Architecture & Multi-Cloud Migration</option>
              <option value="Custom Enterprise Software & Full-Stack Development">Custom Enterprise Software & Full-Stack Development</option>
              <option value="FinOps & Cloud Cost Optimization Audit">FinOps & Cloud Cost Optimization Audit</option>
              <option value="DevOps Automation & CI/CD Pipelines">DevOps Automation & CI/CD Pipelines</option>
              <option value="Enterprise Cybersecurity & DevSecOps">Enterprise Cybersecurity & DevSecOps</option>
              <option value="24/7 Managed IT & Infrastructure Support">24/7 Managed IT & Infrastructure Support</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Project Notes / Architecture Challenge
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your current technology stack, scalability goals, or target cloud requirements..."
              style={{
                width: '100%',
                padding: '10px 14px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.92rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="var(--emerald-400)" />
            <span>Strict NDA signed upon request. Zero spam or shared data guarantee.</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '6px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <span>{submitting ? 'Submitting...' : 'Schedule Architecture Review'}</span>
            <ArrowRight size={16} />
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '4px' }}>
            Prefer direct email? Write to us at{' '}
            <a href="mailto:hello@risestack.in" style={{ color: 'var(--cyan-400)', textDecoration: 'none', fontWeight: 600 }}>
              hello@risestack.in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

