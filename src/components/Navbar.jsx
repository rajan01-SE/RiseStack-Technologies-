import React from 'react';
import { Layers, Moon, Sun, Monitor, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({
  theme,
  onToggleTheme,
  currency,
  onCurrencyChange,
  activeMode,
  onToggleMode,
  onOpenModal
}) {
  return (
    <header className="navbar-sticky">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          onClick={() => {
            if (activeMode !== 'marketing') onToggleMode('marketing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow-cyan)'
          }}>
            <Layers size={22} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                RiseStack
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                TECHNOLOGIES
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
              IT & CLOUD ENGINEERING
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        {activeMode === 'marketing' && (
          <nav>
            <ul className="nav-links">
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#tech-stack" className="nav-link">Tech Stack</a></li>
              <li><a href="#estimator" className="nav-link">Project Estimator</a></li>
              <li><a href="#case-studies" className="nav-link">Case Studies</a></li>
              <li><a href="#why-us" className="nav-link">Why Us</a></li>
              <li><a href="#faqs" className="nav-link">FAQs</a></li>
            </ul>
          </nav>
        )}

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Currency Switcher */}
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '6px 10px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
            title="Select Currency"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 10px', borderRadius: 'var(--radius-sm)' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={17} color="var(--amber-400)" /> : <Moon size={17} color="var(--violet-500)" />}
          </button>

          {/* Mode Switch: Client Portal Demo vs Website */}
          <button
            onClick={() => onToggleMode(activeMode === 'marketing' ? 'portal' : 'marketing')}
            className={`btn btn-sm ${activeMode === 'portal' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Monitor size={15} />
            <span>{activeMode === 'marketing' ? 'Client Portal' : 'Website View'}</span>
          </button>

          {/* Consultation CTA */}
          <button
            onClick={() => onOpenModal()}
            className="btn btn-primary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Consult Architects</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}

