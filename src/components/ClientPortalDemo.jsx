import React, { useState } from 'react';
import { 
  Activity, 
  GitCommit, 
  Server, 
  DollarSign, 
  Headphones, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function ClientPortalDemo({ currency = 'USD', onExitPortal, onTriggerToast }) {
  const [activeTab, setActiveTab] = useState('sprints');

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '40px 0 80px 0' }}>
      <div className="container">
        {/* Top Navigation Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onExitPortal}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <ArrowLeft size={16} />
              <span>Back to Website</span>
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                  RiseStack Client Workspace
                </span>
                <span className="badge badge-success">Live Demo</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                Tenant: Acme Cloud Technologies (Project ID: RST-8841)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="badge badge-brand" style={{ padding: '6px 12px' }}>
              <ShieldCheck size={14} /> SOC2 Compliant Environment
            </span>
          </div>
        </div>

        {/* Portal Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '16px',
          marginBottom: '32px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'sprints', label: 'Active Sprints & Deliverables', icon: GitCommit },
            { id: 'infra', label: 'Infrastructure & Uptime', icon: Server },
            { id: 'finops', label: 'FinOps Cost Analytics', icon: DollarSign },
            { id: 'support', label: 'SRE Support & SLAs', icon: Headphones }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn btn-sm ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: SPRINTS & DELIVERABLES */}
        {activeTab === 'sprints' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Sprint 04: Multi-Region Kubernetes & Auto-scaling</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Duration: Oct 20 - Nov 03, 2026 • Lead Architect: David Vance</div>
                </div>
                <span className="badge badge-brand">78% Completed</span>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '24px' }}>
                <div style={{ width: '78%', height: '100%', background: 'var(--gradient-brand)' }} />
              </div>

              {/* Deliverable Milestones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'Provisioned Terraform IaC for multi-zone AWS EKS cluster', status: 'Completed', hash: 'commit 7f81b2a' },
                  { title: 'Configured automated Helm charts & Prometheus metrics exporter', status: 'Completed', hash: 'commit 3e990cf' },
                  { title: 'Implemented Canary deployment strategy in GitHub Actions CI/CD', status: 'In Review', hash: 'PR #42' },
                  { title: 'Load testing cluster under 25,000 requests/sec simulated traffic', status: 'In Progress', hash: 'WIP' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {item.status === 'Completed' ? (
                        <CheckCircle2 size={18} color="var(--emerald-400)" />
                      ) : (
                        <Clock size={18} color="var(--cyan-400)" />
                      )}
                      <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{item.title}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{item.hash}</span>
                      <span className={`badge ${item.status === 'Completed' ? 'badge-success' : 'badge-amber'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INFRASTRUCTURE & UPTIME */}
        {activeTab === 'infra' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="grid-3">
              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Global Uptime (Last 90 Days)</div>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--emerald-400)' }}>99.991%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Zero Sev-1 outages reported</div>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Average API Gateway Latency</div>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--cyan-400)' }}>42ms</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Down from 118ms pre-optimization</div>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Cluster Node Capacity</div>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--violet-400)' }}>14 / 28</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Auto-scaling elasticity active</div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>Cluster Nodes & Workload Health</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { region: 'us-east-1 (N. Virginia)', service: 'EKS Primary Cluster (c6i.2xlarge)', health: 'Healthy', cpu: '34%', mem: '52%' },
                  { region: 'us-west-2 (Oregon)', service: 'Failover Replica Cluster (c6i.xlarge)', health: 'Healthy', cpu: '18%', mem: '38%' },
                  { region: 'eu-west-1 (Ireland)', service: 'Edge Redis Cache & CDN Ingestion', health: 'Healthy', cpu: '28%', mem: '44%' }
                ].map((node, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{node.service}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Region: {node.region}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>CPU: <strong>{node.cpu}</strong></div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Mem: <strong>{node.mem}</strong></div>
                      <span className="badge badge-success">{node.health}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FINOPS COST ANALYTICS */}
        {activeTab === 'finops' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Continuous Cloud Spend Optimization</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Calculated against baseline unoptimized spend</div>
                </div>
                <button
                  onClick={() => onTriggerToast('Latest FinOps report downloaded as PDF')}
                  className="btn btn-secondary btn-sm"
                >
                  Download FinOps Report
                </button>
              </div>

              <div className="grid-3" style={{ marginBottom: '24px' }}>
                <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Baseline Monthly Spend</div>
                  <div className="mono" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--rose-400)' }}>$18,450</div>
                </div>
                <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Current Optimized Spend</div>
                  <div className="mono" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--emerald-400)' }}>$11,820</div>
                </div>
                <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Monthly Recurring Savings</div>
                  <div className="mono" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--cyan-400)' }}>$6,630 / mo (36%)</div>
                </div>
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                ✅ <strong>Key optimizations applied this cycle:</strong> Purged 14 idle EBS volumes, shifted dev/staging instances to Spot compute, enabled S3 Intelligent-Tiering lifecycle policies.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SRE SUPPORT & SLAS */}
        {activeTab === 'support' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Dedicated SRE & Cloud Architect Desk</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Committed SLA: 15-minute response for critical incidents</div>
                </div>
                <button
                  onClick={() => onTriggerToast('Support escalation ticket opened with priority')}
                  className="btn btn-primary btn-sm"
                >
                  Create Support Ticket
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'TKT-1092', subject: 'Scheduled database maintenance & minor version upgrade', priority: 'Medium', status: 'Resolved' },
                  { id: 'TKT-1085', subject: 'SSL certificate rotation for *.api.acmecloud.com', priority: 'Low', status: 'Resolved' }
                ].map((ticket) => (
                  <div key={ticket.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{ticket.subject}</div>
                      <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>ID: {ticket.id} • Priority: {ticket.priority}</div>
                    </div>
                    <span className="badge badge-success">{ticket.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
