import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const stats = [
  { value: '50K+', label: 'Active Earners', icon: '👥' },
  { value: '$12M+', label: 'Revenue Generated', icon: '💰' },
  { value: '98%', label: 'Satisfaction Rate', icon: '⭐' },
  { value: '340+', label: 'Affiliate Partners', icon: '🤝' },
];

const features = [
  {
    icon: '🔗',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.2)',
    title: 'Affiliate Marketing',
    description:
      'Earn up to 40% commission promoting top-tier products. Access 340+ curated affiliate programs with real-time tracking dashboards.',
    badge: 'Up to 40% Commission',
    href: '/affiliate',
  },
  {
    icon: '📊',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
    title: 'Smart Ad Placements',
    description:
      'Monetize your traffic intelligently with contextual, programmatic, and direct ad placements. Maximize RPM with AI-optimized ad zones.',
    badge: 'AI-Optimized CPM',
    href: '/#ads',
  },
  {
    icon: '🛍️',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
    title: 'E-Commerce Store',
    description:
      'Launch your digital or physical product store in minutes. Integrated checkout, inventory management, and one-click upsells built in.',
    badge: 'Zero Setup Fees',
    href: '/shop',
  },
  {
    icon: '✍️',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.2)',
    title: 'Content Monetization',
    description:
      'Publish SEO-optimized blog posts, reviews, and guides. Earn through sponsored content, premium memberships, and ad revenue.',
    badge: 'SEO-Powered Growth',
    href: '/blog',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Full-time Content Creator',
    avatar: '👩🏻',
    quote: 'ProRevenue completely changed my income game. I went from $200/month to over $6,800 in just 5 months by combining affiliate links with their ad placements.',
    earning: '$6,800/mo',
  },
  {
    name: 'Marcus Williams',
    role: 'Digital Entrepreneur',
    avatar: '👨🏿',
    quote: 'The e-commerce integration is flawless. I launched my digital product store in one afternoon and made my first sale within 24 hours. The analytics dashboard is insane.',
    earning: '$14,200/mo',
  },
  {
    name: 'Priya Sharma',
    role: 'Lifestyle Blogger',
    avatar: '👩🏽',
    quote: "I was skeptical, but the affiliate tracking system is completely transparent. I can see exactly where every dollar comes from. Best investment I've ever made.",
    earning: '$3,500/mo',
  },
];

const adTypes = [
  { name: 'Display Ads', cpm: '$4–$18', icon: '🖼️', desc: 'High-visibility banner and sidebar placements' },
  { name: 'Native Ads', cpm: '$8–$35', icon: '📰', desc: 'Seamlessly integrated content-style ads' },
  { name: 'Video Ads', cpm: '$15–$60', icon: '▶️', desc: 'Pre-roll and mid-roll video monetization' },
  { name: 'Sponsored Posts', cpm: '$50–$500', icon: '💼', desc: 'Direct brand partnership content deals' },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroGlow3} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={`badge badge-primary ${styles.heroBadge}`}>
              <span>🚀</span> The #1 Revenue Platform for Creators
            </div>

            <h1 className={styles.heroTitle}>
              Turn Your Traffic Into
              <br />
              <span className="gradient-text">Unstoppable Revenue</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Affiliate marketing, smart ad placements, and a fully integrated e-commerce store — all in one
              powerful platform. Join 50,000+ entrepreneurs earning smarter, not harder.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/affiliate" className="btn btn-primary btn-lg" id="hero-cta-affiliate">
                🔗 Start Earning Free
              </Link>
              <Link href="/shop" className="btn btn-gold btn-lg" id="hero-cta-shop">
                🛍️ Browse Store
              </Link>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.heroAvatars}>
                {['👩🏻', '👨🏿', '👩🏽', '👨🏻', '👩🏾'].map((a, i) => (
                  <span key={i} className={styles.avatar}>{a}</span>
                ))}
              </div>
              <p className={styles.heroTrustText}>
                <strong>50,000+</strong> earners trust ProRevenue
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className={styles.heroImage}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/hero-banner.png"
                alt="ProRevenue revenue dashboard visualization"
                width={680}
                height={420}
                className={styles.heroImg}
                priority
              />
              {/* Floating cards */}
              <div className={`${styles.floatCard} ${styles.floatCard1}`}>
                <span className={styles.floatIcon}>💰</span>
                <div>
                  <div className={styles.floatValue}>+$1,240</div>
                  <div className={styles.floatLabel}>Today&apos;s Earnings</div>
                </div>
              </div>
              <div className={`${styles.floatCard} ${styles.floatCard2}`}>
                <span className={styles.floatIcon}>📈</span>
                <div>
                  <div className={styles.floatValue}>+127%</div>
                  <div className={styles.floatLabel}>This Month</div>
                </div>
              </div>
              <div className={`${styles.floatCard} ${styles.floatCard3}`}>
                <span className={styles.floatIcon}>🎯</span>
                <div>
                  <div className={styles.floatValue}>4.8%</div>
                  <div className={styles.floatLabel}>Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statIcon}>{s.icon}</span>
                  <div>
                    <div className={`stat-number gradient-text`}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES / MONETIZATION METHODS ─── */}
      <section className={`section ${styles.featuresSection}`} id="monetize">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>💡 Monetization Methods</div>
            <h2 className="section-title gradient-text">Four Powerful Ways to Earn</h2>
            <p className="section-subtitle">
              Stack multiple revenue streams on a single platform. The more you layer, the more you earn.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <Link href={f.href} key={f.title} className={`card ${styles.featureCard}`} style={{ '--card-glow': f.glow } as React.CSSProperties}>
                <div className={styles.featureCardTop}>
                  <div className={styles.featureIcon} style={{ background: f.glow, color: f.color }}>
                    {f.icon}
                  </div>
                  <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>{f.badge}</span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
                <div className={styles.featureLink} style={{ color: f.color }}>
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AD PLACEMENT SECTION ─── */}
      <section className={`section ${styles.adsSection}`} id="ads">
        <div className="container">
          <div className={styles.adsSplit}>
            <div className={styles.adsLeft}>
              <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>📊 Ad Revenue</div>
              <h2 className={styles.adsTitle}>
                Maximize Every<br /><span className="gradient-text-gold">Page View</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                Our AI-driven ad engine matches the highest-paying advertisers to your audience in real-time. With header bidding technology, you always get the best CPM rates.
              </p>
              <ul className={styles.adsBullets}>
                {['Real-time header bidding', 'Lazy-load for Core Web Vitals', 'Viewability-optimized placements', 'Brand-safe advertiser network'].map(b => (
                  <li key={b}><span className={styles.checkIcon}>✓</span> {b}</li>
                ))}
              </ul>
              <Link href="/affiliate" className="btn btn-gold" style={{ marginTop: '2rem' }} id="ads-cta">
                Apply for Ad Placements →
              </Link>
            </div>
            <div className={styles.adsRight}>
              {adTypes.map((a) => (
                <div key={a.name} className={`card ${styles.adCard}`}>
                  <div className={styles.adCardLeft}>
                    <span className={styles.adIcon}>{a.icon}</span>
                    <div>
                      <div className={styles.adName}>{a.name}</div>
                      <div className={styles.adDesc}>{a.desc}</div>
                    </div>
                  </div>
                  <div className={`badge badge-gold ${styles.adCpm}`}>{a.cpm}<span style={{ fontSize: '0.65rem', opacity: 0.8 }}> CPM</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-success" style={{ marginBottom: '1rem' }}>⭐ Success Stories</div>
            <h2 className="section-title">Real People, Real Earnings</h2>
            <p className="section-subtitle">
              Our community of earners comes from every background. Here&apos;s what they&apos;re saying.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={`card ${styles.testimonialCard}`}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                  <div className={`badge badge-success ${styles.testimonialEarning}`}>{t.earning}</div>
                </div>
                <div className={styles.starsRow}>{'⭐'.repeat(5)}</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>Ready to Build Your Revenue Empire?</h2>
            <p className={styles.ctaSubtitle}>
              Join for free today. No credit card required. Start earning within 24 hours.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/affiliate" className="btn btn-primary btn-lg" id="cta-banner-affiliate">
                🚀 Get Started Free
              </Link>
              <Link href="/about" className="btn btn-outline btn-lg" id="cta-banner-learn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
