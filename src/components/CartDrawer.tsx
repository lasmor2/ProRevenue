'use client';
import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import styles from './CartDrawer.module.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartDrawer() {
  const { state, removeItem, updateQty, closeCart, clearCart, totalItems, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: state.items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Checkout failed. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={closeCart} aria-label="Close cart" />

      {/* Drawer */}
      <aside className={styles.drawer} aria-label="Shopping cart">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Your Cart</h2>
            {totalItems > 0 && (
              <span className="badge badge-primary">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
            )}
          </div>
          <div className={styles.headerRight}>
            {state.items.length > 0 && (
              <button className={styles.clearBtn} onClick={clearCart} id="cart-clear">
                Clear all
              </button>
            )}
            <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart" id="cart-close">
              ✕
            </button>
          </div>
        </div>

        {/* Items */}
        <div className={styles.items}>
          {state.items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛒</span>
              <p className={styles.emptyTitle}>Your cart is empty</p>
              <p className={styles.emptySubtitle}>Browse our store and add products to get started.</p>
              <button className="btn btn-primary" onClick={closeCart} style={{ marginTop: '1rem' }} id="cart-browse">
                Browse Store
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemEmoji}>{item.emoji}</div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemCat}>{item.category}</p>
                  <div className={styles.itemFooter}>
                    <span className={styles.itemPrice}>${item.price}</span>
                    <div className={styles.qtyControls}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => item.quantity === 1 ? removeItem(item.id) : updateQty(item.id, item.quantity - 1)}
                        id={`cart-qty-minus-${item.id}`}
                      >−</button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        id={`cart-qty-plus-${item.id}`}
                      >+</button>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                      id={`cart-remove-${item.id}`}
                    >🗑️</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Digital delivery</span>
                <span className={styles.free}>FREE</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              className={`btn btn-primary ${styles.checkoutBtn}`}
              onClick={handleCheckout}
              disabled={loading}
              id="cart-checkout"
            >
              {loading ? (
                <span className={styles.spinner}>⟳</span>
              ) : (
                <>🔒 Checkout with Stripe &nbsp;·&nbsp; ${totalPrice.toFixed(2)}</>
              )}
            </button>
            <p className={styles.secureNote}>
              🔐 Secure payment via Stripe. 30-day money-back guarantee.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
