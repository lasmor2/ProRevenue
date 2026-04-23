import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment Successful | ProRevenue',
  description: 'Your order has been confirmed. Thank you for your purchase!',
};

export default function SuccessPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', paddingTop: '6rem' }}>
      <div style={{
        background: 'var(--color-bg-card)',
        border: '1px solid rgba(16,185,129,0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: '4rem 3rem',
        textAlign: 'center',
        maxWidth: 540,
        width: '100%',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 60px rgba(16,185,129,0.1)',
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          Payment <span style={{ color: '#34d399' }}>Successful!</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
          Thank you for your purchase! Your digital products are ready for instant download.
          Check your email for download links and access instructions.
        </p>
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem' }}>
          <p style={{ color: '#34d399', fontWeight: 600, fontSize: '0.9rem' }}>
            📧 A receipt and download links have been sent to your email.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop" className="btn btn-primary" id="success-back-shop">
            Continue Shopping
          </Link>
          <Link href="/blog" className="btn btn-outline" id="success-blog">
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
