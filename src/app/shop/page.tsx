'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const categories = ['All', 'Courses', 'Templates', 'Tools', 'eBooks'];

const products = [
  { id: 1, name: 'Affiliate Marketing Masterclass', category: 'Courses', price: 97, originalPrice: 197, rating: 4.9, reviews: 1284, badge: '🔥 Bestseller', emoji: '🎓', desc: '12-module video course covering every affiliate strategy from zero to $10k/month.' },
  { id: 2, name: 'Revenue Dashboard Template', category: 'Templates', price: 29, originalPrice: 59, rating: 4.8, reviews: 863, badge: '⭐ Top-Rated', emoji: '📊', desc: 'Notion + Google Sheets templates to track all your income streams in one place.' },
  { id: 3, name: 'SEO Keyword Research Tool', category: 'Tools', price: 49, originalPrice: 99, rating: 4.7, reviews: 521, badge: '🆕 New', emoji: '🔍', desc: 'Find untapped keywords with high buyer intent. 100,000 keyword database included.' },
  { id: 4, name: 'Email List Building Blueprint', category: 'eBooks', price: 19, originalPrice: 39, rating: 4.6, reviews: 2103, badge: '📕 eBook', emoji: '📧', desc: 'Step-by-step guide to building a responsive email list from scratch in 30 days.' },
  { id: 5, name: 'E-Commerce Launch Kit', category: 'Templates', price: 79, originalPrice: 149, rating: 4.9, reviews: 437, badge: '💎 Premium', emoji: '🛍️', desc: 'Complete launch kit: product pages, email sequences, ad copy, and social media templates.' },
  { id: 6, name: 'Ad Revenue Optimizer Course', category: 'Courses', price: 67, originalPrice: 127, rating: 4.8, reviews: 698, badge: '🔥 Hot', emoji: '📈', desc: 'Maximize CPMs with header bidding, lazy loading, and viewability optimization techniques.' },
];

function AddToCartButton({ product }: { product: typeof products[0] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      emoji: product.emoji,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      className={`btn ${added ? 'btn-outline' : 'btn-gold'} ${styles.addToCartBtn}`}
      onClick={handleAdd}
      id={`add-to-cart-${product.id}`}
    >
      {added ? '✓ Added!' : '🛒 Add to Cart'}
    </button>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow1} /><div className={styles.glow2} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>🛍️ Digital Store</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
            Tools &amp; Resources to <span className="gradient-text-gold">10x Your Revenue</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>
            Curated digital products, courses, and templates created by 7-figure earners. Instant download. Lifetime access.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '2.5rem 0', background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c}
                className={`${styles.filterBtn} ${activeCategory === c ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(c)}
                id={`filter-${c.toLowerCase()}`}
              >
                {c}
              </button>
            ))}
            <div className={styles.filterRight}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{filtered.length} products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {filtered.map((p) => (
              <div key={p.id} className={`card ${styles.productCard}`}>
                <div className={styles.productImageArea}>
                  <div className={styles.productEmoji}>{p.emoji}</div>
                  <span className="badge badge-gold" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontSize: '0.68rem' }}>{p.badge}</span>
                </div>
                <div className={styles.productBody}>
                  <span className={styles.productCat}>{p.category}</span>
                  <h3 className={styles.productName}>{p.name}</h3>
                  <p className={styles.productDesc}>{p.desc}</p>
                  <div className={styles.productMeta}>
                    <span className={styles.stars}>{'★'.repeat(5)}</span>
                    <span className={styles.rating}>{p.rating}</span>
                    <span className={styles.reviews}>({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className={styles.productFooter}>
                    <div className={styles.priceGroup}>
                      <span className={styles.price}>${p.price}</span>
                      <span className={styles.originalPrice}>${p.originalPrice}</span>
                      <span className="badge badge-success" style={{ fontSize: '0.65rem' }}>
                        -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                      </span>
                    </div>
                    <AddToCartButton product={p} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className={styles.guarantee}>
            <span style={{ fontSize: '3rem' }}>🛡️</span>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>30-Day Money-Back Guarantee</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                Not satisfied? Get a full refund within 30 days, no questions asked. We&apos;re confident you&apos;ll love every product.
              </p>
            </div>
            <Link href="/affiliate" className="btn btn-gold" id="shop-affiliate-cta">Become an Affiliate →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
