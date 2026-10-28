import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Building, User, DollarSign, Send } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Direct Email Dispatch to hello@risestack.in via FormSubmit AJAX service
      const res = await fetch('https://formsubmit.co/ajax/hello@risestack.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New IT Architecture Consultation: ${formData.name} (${formData.company || 'Direct'})`,
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not specified',
          service: formData.service,
          budget: formData.budget,
          notes: formData.notes || 'None provided',
          _template: 'table'
        })
      });

      if (res.ok) {
        onSubmitSuccess(`Inquiry sent directly to hello@risestack.in! We will respond to ${formData.email} within 4 business hours.`);
      } else {
        // Fallback mailto
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Notes:\n${formData.notes}`
        );
        window.open(`mailto:hello@risestack.in?subject=Architecture Consultation - ${encodeURIComponent(formData.name)}&body=${mailtoBody}`);
        onSubmitSuccess(`Consultation dispatched to hello@risestack.in!`);
      }
    } catch (err) {
      // Fallback
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Notes:\n${formData.notes}`
      );
      window.open(`mailto:hello@risestack.in?subject=Architecture Consultation - ${encodeURIComponent(formData.name)}&body=${mailtoBody}`);
      onSubmitSuccess(`Consultation dispatched to hello@risestack.in!`);
    } finally {
      setSubmitting(false);
      onClose();
    }
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
            <ShieldCheck size={14} /> Direct Architecture Desk
          </span>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
            Schedule an IT & Cloud Consultation
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
            Fill out your requirements below. Your inquiry is delivered directly to our lead engineering team at <strong>hello@risestack.in</strong>.
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Required Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
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
                Estimated Budget Tier
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              >
                <option value="$2,500 - $5,000 (Starter / MVP)">$2,500 - $5,000 (Starter / MVP)</option>
                <option value="$5,000 - $15,000 (Growth Architecture)">$5,000 - $15,000 (Growth Architecture)</option>
                <option value="$15,000 - $40,000 (Enterprise Migration)">$15,000 - $40,000 (Enterprise Migration)</option>
                <option value="$40,000+ (Full Transformation)">$40,000+ (Full Transformation)</option>
                <option value="Flexible / Needs Architectural Review">Flexible / Needs Architectural Review</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Project Overview / Cloud Infrastructure Challenge
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
            <span>Direct delivery to hello@risestack.in. Strict NDA respected.</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '6px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {submitting ? (
              <span>Sending Directly to hello@risestack.in...</span>
            ) : (
              <>
                <Send size={16} />
                <span>Submit & Send to hello@risestack.in</span>
              </>
            )}
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
