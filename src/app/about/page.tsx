import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | ProRevenue',
  description: 'Learn about ProRevenue — our mission, team, and story behind building the #1 revenue generation platform for creators and entrepreneurs.',
};

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co-Founder', emoji: '👨🏽', bio: 'Former Google engineer. Built ProRevenue after generating $1.2M in affiliate revenue over 3 years.' },
  { name: 'Jamie Lee', role: 'Head of Partnerships', emoji: '👩🏻', bio: 'Ex-Amazon affiliate manager. Personally manages relationships with 200+ top-tier advertisers.' },
  { name: 'Devon Okafor', role: 'CTO', emoji: '👨🏿', bio: 'Full-stack expert with 12 years experience. Architected our real-time tracking infrastructure.' },
  { name: 'Mia Santos', role: 'Head of Content', emoji: '👩🏽', bio: 'SEO specialist and content strategist with proven track record of 10M+ organic visitors driven.' },
];

const milestones = [
  { year: '2020', event: 'ProRevenue founded with a vision to democratize online income.' },
  { year: '2021', event: 'Launched affiliate platform. First 1,000 members joined in 2 weeks.' },
  { year: '2022', event: 'Integrated e-commerce. $1M in creator revenue generated.' },
  { year: '2023', event: 'Ad placement network launched. CPM rates doubled industry average.' },
  { year: '2024', event: 'Reached 25,000 active members and $6M total payouts.' },
  { year: '2026', event: '50,000 members strong. $12M+ paid out. Expanding to 50 new markets.' },
];

const values = [
  { icon: '🎯', title: 'Transparency', desc: 'Real-time analytics, honest commissions, zero hidden fees. You always know exactly what you earn.' },
  { icon: '🚀', title: 'Growth First', desc: 'Every feature we build is designed to grow your revenue, not ours. Your success is our success.' },
  { icon: '🤝', title: 'Community', desc: 'We believe in supporting each other. Our private community connects 50K+ earners worldwide.' },
  { icon: '🔒', title: 'Trust & Security', desc: 'Encrypted data, on-time payments guaranteed, and full compliance with FTC disclosure requirements.' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow1} /><div className={styles.glow2} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>🏢 Our Story</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
            We Built The Platform We<br /><span className="gradient-text">Always Wished Existed</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            ProRevenue was born out of frustration with fragmented, low-paying revenue platforms. We set out to build the most powerful, transparent, and creator-friendly monetization platform in the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>🎯 Our Mission</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.25rem' }}>
                Empowering Anyone to Build <span className="gradient-text">Financial Freedom Online</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1rem' }}>
                We believe every person with an internet connection deserves access to tools that can generate real, sustainable income. Our mission is to remove the complexity, reduce the barriers, and provide creators and entrepreneurs with the very best revenue-generating technology available.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginTop: '1rem' }}>
                Whether you are a blogger with 500 monthly readers or a YouTuber with 500K subscribers, our platform scales with you and pays you what you truly deserve.
              </p>
            </div>
            <div className={styles.missionStats}>
              {[['$12M+', 'Total Paid Out'], ['50K+', 'Active Members'], ['340+', 'Partner Brands'], ['6', 'Years Strong']].map(([v, l]) => (
                <div key={l} className={`card ${styles.missionStat}`}>
                  <span className="gradient-text" style={{ fontWeight: 900, fontSize: '2rem' }}>{v}</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
            <p className="section-subtitle">The principles that guide every decision we make.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
            <p className="section-subtitle">Six years of relentless building and growing together.</p>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 1 ? styles.timelineRight : ''}`}>
                <div className={`card ${styles.timelineCard}`}>
                  <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>{m.year}</span>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{m.event}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }} id="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet the <span className="gradient-text">Team</span></h2>
            <p className="section-subtitle">Real humans obsessed with helping you earn more.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((t) => (
              <div key={t.name} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{t.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{t.name}</h3>
                <p className="badge badge-primary" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>{t.role}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.65 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className={styles.contactBox}>
            <div className={styles.contactGlow} />
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
              Get In Touch
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Have questions about our platform? We&apos;d love to hear from you. Our team typically responds within 2 hours.
            </p>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Your Name" className={styles.formInput} id="contact-name" />
                <input type="email" placeholder="Your Email" className={styles.formInput} id="contact-email" />
              </div>
              <textarea placeholder="Your message..." className={styles.formTextarea} rows={4} id="contact-message" />
              <button className="btn btn-primary btn-lg" id="contact-submit">Send Message →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
