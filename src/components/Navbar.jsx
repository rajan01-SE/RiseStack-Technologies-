import React, { useState } from 'react';
import { Layers, Moon, Sun, Monitor, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({
  theme,
  onToggleTheme,
  currency,
  onCurrencyChange,
  activeMode,
  onToggleMode,
  onOpenModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-sticky">
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        gap: '16px'
      }}>
        {/* Brand Logo - flexShrink 0 guarantees it NEVER gets squished */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            cursor: 'pointer',
            flexShrink: 0
          }}
          onClick={() => {
            if (activeMode !== 'marketing') onToggleMode('marketing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow-cyan)',
            flexShrink: 0
          }}>
            <Layers size={20} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', whiteSpace: 'nowrap' }}>
              <span className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                RiseStack
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--cyan-400)', fontWeight: 700, letterSpacing: '0.06em' }}>
                TECH
              </span>
            </div>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.05em', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
              IT & Cloud Solutions
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        {activeMode === 'marketing' && (
          <nav className="desktop-nav" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(14px, 1.8vw, 24px)',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              <li><a href="#services" className="nav-link" style={{ whiteSpace: 'nowrap' }}>Services</a></li>
              <li><a href="#tech-stack" className="nav-link" style={{ whiteSpace: 'nowrap' }}>Tech Stack</a></li>
              <li><a href="#estimator" className="nav-link" style={{ whiteSpace: 'nowrap' }}>Estimator</a></li>
              <li><a href="#case-studies" className="nav-link" style={{ whiteSpace: 'nowrap' }}>Case Studies</a></li>
              <li><a href="#why-us" className="nav-link" style={{ whiteSpace: 'nowrap' }}>Why Us</a></li>
              <li><a href="#faqs" className="nav-link" style={{ whiteSpace: 'nowrap' }}>FAQs</a></li>
            </ul>
          </nav>
        )}

        {/* Right Action Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0
        }}>
          {/* Currency Switcher Pill */}
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '7px 8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
              whiteSpace: 'nowrap'
            }}
            title="Currency"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '7px 9px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '34px'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={16} color="var(--amber-400)" /> : <Moon size={16} color="var(--violet-500)" />}
          </button>

          {/* Client Portal Mode Toggle */}
          <button
            onClick={() => onToggleMode(activeMode === 'marketing' ? 'portal' : 'marketing')}
            className={`btn btn-sm ${activeMode === 'portal' ? 'btn-primary' : 'btn-secondary'} hide-on-mobile`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              fontSize: '0.82rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Monitor size={14} />
            <span>{activeMode === 'marketing' ? 'Client Portal' : 'Website'}</span>
          </button>

          {/* Consult CTA Button */}
          <button
            onClick={() => onOpenModal()}
            className="btn btn-primary btn-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              fontSize: '0.84rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)'
            }}
          >
            <span>Consult Architects</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm show-on-mobile"
            style={{ padding: '7px 9px', display: 'none' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link">Services</a>
          <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="nav-link">Tech Stack</a>
          <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="nav-link">Estimator</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="nav-link">Case Studies</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="nav-link">Why Us</a>
          <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="nav-link">FAQs</a>
          <div style={{ paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleMode(activeMode === 'marketing' ? 'portal' : 'marketing');
              }}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Monitor size={15} />
              <span>{activeMode === 'marketing' ? 'Open Client Portal Demo' : 'Back to Website'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
