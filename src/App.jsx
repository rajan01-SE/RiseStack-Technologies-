import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import ScopeEstimator from './components/ScopeEstimator';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudiesSection from './components/CaseStudiesSection';
import ClientPortalDemo from './components/ClientPortalDemo';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('risestack_theme') || 'dark');
  const [currency, setCurrency] = useState(() => localStorage.getItem('risestack_currency') || 'USD');
  const [activeMode, setActiveMode] = useState('marketing'); // 'marketing' | 'portal'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('risestack_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('risestack_currency', currency);
  }, [currency]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleOpenModal = (service = '') => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 10000,
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow-cyan)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '480px',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          <CheckCircle2 size={20} color="var(--emerald-400)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', flex: 1 }}>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)' }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        currency={currency}
        onCurrencyChange={setCurrency}
        activeMode={activeMode}
        onToggleMode={setActiveMode}
        onOpenModal={() => handleOpenModal()}
      />

      {/* View Switch */}
      {activeMode === 'marketing' ? (
        <main style={{ flex: 1 }}>
          <Hero 
            onOpenModal={() => handleOpenModal()} 
            onScrollToEstimator={scrollToEstimator} 
          />
          <ServicesSection onOpenModal={handleOpenModal} />
          <TechStackSection />
          <ScopeEstimator currency={currency} onOpenModal={handleOpenModal} />
          <WhyChooseUs />
          <CaseStudiesSection onOpenModal={handleOpenModal} />
          <FAQSection />
          <Footer onOpenModal={() => handleOpenModal()} />
        </main>
      ) : (
        <main style={{ flex: 1 }}>
          <ClientPortalDemo 
            currency={currency}
            onExitPortal={() => {
              setActiveMode('marketing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onTriggerToast={(msg) => setToastMessage(msg)}
          />
        </main>
      )}

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
        onSubmitSuccess={(msg) => setToastMessage(msg)}
      />
    </div>
  );
}
