import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Affiliate Program | ProRevenue',
  description: 'Join our affiliate program and earn up to 40% commission promoting top-tier products. Real-time tracking, instant payouts, 340+ programs.',
};

const programs = [
  { name: 'TechGear Pro', category: 'Technology', commission: '35%', epc: '$4.20', badge: '🔥 Hot', color: '#7c3aed' },
  { name: 'HealthFirst', category: 'Health & Wellness', commission: '40%', epc: '$6.80', badge: '⭐ Top', color: '#10b981' },
  { name: 'LearnHub Academy', category: 'Education', commission: '30%', epc: '$9.50', badge: '🏆 Best', color: '#f59e0b' },
  { name: 'FashionVault', category: 'Fashion', commission: '25%', epc: '$3.10', badge: '🆕 New', color: '#06b6d4' },
  { name: 'HomeNest', category: 'Home & Living', commission: '28%', epc: '$5.40', badge: '🔥 Hot', color: '#ec4899' },
  { name: 'FinanceEdge', category: 'Finance', commission: '45%', epc: '$22.00', badge: '💎 Elite', color: '#7c3aed' },
];

const howItWorks = [
  { step: '01', icon: '📝', title: 'Sign Up Free', desc: 'Create your free account in under 2 minutes. No credit card needed.' },
  { step: '02', icon: '🔗', title: 'Get Your Links', desc: 'Generate unique tracking links for any of our 340+ affiliate programs.' },
  { step: '03', icon: '📢', title: 'Promote & Share', desc: 'Share your links through your blog, email, social, or YouTube channel.' },
  { step: '04', icon: '💰', title: 'Earn Commissions', desc: 'Track conversions in real-time and receive instant payouts via PayPal or bank transfer.' },
];

export default function AffiliatePage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow1} /><div className={styles.glow2} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>🔗 Affiliate Program</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
            Earn Up To <span className="gradient-text">40% Commission</span><br />On Every Sale
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 2.5rem' }}>
            Join 50,000+ affiliate marketers leveraging our platform to generate consistent passive income. Get paid weekly with zero hassle.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#programs" className="btn btn-primary btn-lg" id="affiliate-start">Browse Programs →</a>
            <Link href="/about" className="btn btn-outline btn-lg">How It Works</Link>
          </div>
          <div className={styles.heroStats}>
            {[['$12M+', 'Paid Out'], ['340+', 'Programs'], ['50K+', 'Partners'], ['98%', 'On-Time Payments']].map(([v, l]) => (
              <div key={l} className={styles.heroStat}>
                <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.6rem' }}>{v}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Start earning in 4 simple steps — no experience required.</p>
          </div>
          <div className={styles.stepsGrid}>
            {howItWorks.map((s) => (
              <div key={s.step} className={`card ${styles.stepCard}`}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }} id="programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span className="gradient-text">Affiliate Programs</span></h2>
            <p className="section-subtitle">Hand-picked programs with the highest EPCs and conversion rates.</p>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((p) => (
              <div key={p.name} className={`card ${styles.programCard}`}>
                <div className={styles.programTop}>
                  <div className={styles.programLogo} style={{ background: p.color + '20', color: p.color }}>
                    {p.name.charAt(0)}
                  </div>
                  <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>{p.badge}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginBottom: '1rem' }}>{p.category}</p>
                <div className={styles.programStats}>
                  <div className={styles.programStat}>
                    <span className={styles.pstatVal} style={{ color: p.color }}>{p.commission}</span>
                    <span className={styles.pstatLabel}>Commission</span>
                  </div>
                  <div className={styles.programStat}>
                    <span className={styles.pstatVal}>{p.epc}</span>
                    <span className={styles.pstatLabel}>Avg. EPC</span>
                  </div>
                </div>
                <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', fontSize: '0.85rem', padding: '0.6rem 1rem' }} id={`affiliate-join-${p.name.replace(/\s/g,'-').toLowerCase()}`}>
                  Join Program
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Ready to Start <span className="gradient-text">Earning Today?</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Free to join. No approval wait. Instant access to all programs.</p>
          <a href="#" className="btn btn-primary btn-lg" id="affiliate-bottom-cta">Create Free Account →</a>
        </div>
      </section>
    </div>
  );
}
