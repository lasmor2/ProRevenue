import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog | ProRevenue',
  description: 'Expert guides on affiliate marketing, ad monetization, e-commerce, and building passive income streams online.',
};

const featuredPost = {
  title: 'How I Made $50,000 in 6 Months With Affiliate Marketing (Full Strategy)',
  category: 'Affiliate Marketing',
  date: 'April 18, 2026',
  readTime: '14 min read',
  emoji: '💰',
  excerpt: 'A step-by-step breakdown of the exact affiliate marketing system that took me from $0 to $50,000 in half a year — including traffic sources, conversion tactics, and the programs I used.',
  tags: ['Affiliate', 'Strategy', 'Income Report'],
};

const posts = [
  { id: 1, emoji: '📊', category: 'Ad Revenue', title: 'The Ultimate Guide to Header Bidding in 2026', date: 'Apr 15, 2026', readTime: '8 min', excerpt: 'Header bidding can double your ad revenue overnight. Here is exactly how to set it up for maximum CPM.', tags: ['Ads', 'CPM'] },
  { id: 2, emoji: '🛍️', category: 'E-Commerce', title: '7 High-Margin Digital Products to Sell Right Now', date: 'Apr 10, 2026', readTime: '6 min', excerpt: 'Digital products have 90%+ margins. These 7 types are proven sellers with minimal competition in 2026.', tags: ['Products', 'Digital'] },
  { id: 3, emoji: '🔍', category: 'SEO', title: 'Keyword Research for Affiliate Sites: A Data-Driven Approach', date: 'Apr 5, 2026', readTime: '10 min', excerpt: 'Stop guessing which keywords to target. Use this framework to find buyer-intent keywords that convert.', tags: ['SEO', 'Keywords'] },
  { id: 4, emoji: '📧', category: 'Email Marketing', title: 'Build a 10,000-Person Email List in 90 Days for Free', date: 'Mar 28, 2026', readTime: '9 min', excerpt: 'Your email list is your biggest asset. This zero-budget strategy builds a massive, responsive list fast.', tags: ['Email', 'List Building'] },
  { id: 5, emoji: '📱', category: 'Social Media', title: 'Monetizing Short-Form Video: TikTok & Reels Affiliate Strategy', date: 'Mar 20, 2026', readTime: '7 min', excerpt: 'Short videos can drive massive affiliate sales. Here is the exact formula for creating content that converts.', tags: ['Social', 'Video'] },
  { id: 6, emoji: '🤖', category: 'AI Tools', title: 'Using AI to Scale Your Content Production 10x', date: 'Mar 14, 2026', readTime: '5 min', excerpt: 'AI content tools can dramatically speed up your publishing workflow. Here are the best ones for monetized sites.', tags: ['AI', 'Content'] },
];

const categories = ['All Topics', 'Affiliate Marketing', 'Ad Revenue', 'E-Commerce', 'SEO', 'Email Marketing', 'AI Tools'];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow1} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>✍️ Revenue Blog</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
            Actionable Guides to <span className="gradient-text">Grow Your Income</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>
            Expert-written strategies on affiliate marketing, ad monetization, e-commerce, and building scalable passive income.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section style={{ padding: '2rem 0', background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className={styles.catNav}>
            {categories.map((c) => (
              <button key={c} className={`${styles.catBtn} ${c === 'All Topics' ? styles.catActive : ''}`} id={`cat-${c.replace(/\s/g,'-').toLowerCase()}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured Post */}
          <div className={`card ${styles.featuredCard}`}>
            <div className={styles.featuredLeft}>
              <div className={styles.featuredEmoji}>{featuredPost.emoji}</div>
            </div>
            <div className={styles.featuredRight}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <span className="badge badge-primary">{featuredPost.category}</span>
                <span className="badge badge-gold">⭐ Featured</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
                {featuredPost.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <a href="#" className="btn btn-primary" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }} id="featured-read">
                Read Full Article →
              </a>
            </div>
          </div>

          {/* Posts Grid */}
          <h2 style={{ fontSize: '1.5rem', marginTop: '3.5rem', marginBottom: '1.75rem' }}>Latest Articles</h2>
          <div className={styles.postsGrid}>
            {posts.map((p) => (
              <article key={p.id} className={`card ${styles.postCard}`}>
                <div className={styles.postEmoji}>{p.emoji}</div>
                <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0 0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>{p.category}</span>
                </div>
                <h3 className={styles.postTitle}>{p.title}</h3>
                <p className={styles.postExcerpt}>{p.excerpt}</p>
                <div className={styles.postFooter}>
                  <div className={styles.postMeta}>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime} read</span>
                  </div>
                  <a href="#" className={styles.readMore} id={`post-read-${p.id}`}>Read →</a>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className={styles.newsletter}>
            <div className={styles.newsletterGlow} />
            <span style={{ fontSize: '2.5rem' }}>📬</span>
            <div className={styles.newsletterText}>
              <h3>Get Weekly Revenue Tips</h3>
              <p>Join 18,000 subscribers and get actionable revenue strategies every Tuesday morning.</p>
            </div>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email..." className={styles.emailInput} id="newsletter-email" />
              <button className="btn btn-primary" id="newsletter-submit">Subscribe Free</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
