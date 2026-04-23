import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  Monetize: [
    { href: '/affiliate', label: 'Affiliate Program' },
    { href: '/shop', label: 'E-Commerce Store' },
    { href: '/blog', label: 'Blog & Content' },
    { href: '/#ads', label: 'Ad Placements' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/about#team', label: 'Our Team' },
    { href: '/blog', label: 'Blog' },
    { href: '/about#contact', label: 'Contact' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
    { href: '#', label: 'Affiliate Disclosure' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>◈</span>
              <span className="gradient-text">ProRevenue</span>
            </Link>
            <p className={styles.tagline}>
              The all-in-one platform to build, grow, and monetize your online presence. Join 50,000+ entrepreneurs earning smarter.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', 'f', 'yt'].map((s, i) => (
                <a key={i} href="#" className={styles.socialBtn} aria-label={`Social ${s}`}>{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 ProRevenue. All rights reserved.</p>
          <p className={styles.disclosure}>
            Affiliate Disclosure: Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
