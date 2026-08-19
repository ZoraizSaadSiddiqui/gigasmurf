'use client';

import { siteContent } from '@/content/site-content';

export default function Navbar() {
  const { brand, navigation } = siteContent;

  return (
    <nav className="navbar" style={{ backgroundColor: '#11072D' }}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={brand.logo} alt={brand.name} style={{ width: '185.8px', height: '55.29px' }} />
        </a>

        <div className="d-flex align-items-center gap-4">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-decoration-none"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3">
          <a href="#" aria-label="Shopping cart" className="text-white position-relative d-inline-flex align-items-center justify-content-center text-decoration-none p-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span
              className="rounded-circle position-absolute d-flex align-items-center justify-content-center"
              style={{ top: '-6px', right: '-8px', width: '15px', height: '15px', fontSize: '9px', backgroundColor: '#A023EC', color: '#FFFFFF' }}
            >
              {navigation.cartCount}
            </span>
          </a>

          <a href="#" aria-label="User profile" className="text-white d-inline-flex align-items-center justify-content-center text-decoration-none p-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>

          <button
            type="button"
            className="btn sell-button rounded-pill px-4 py-2"
            style={{ backgroundColor: 'transparent', borderColor: '#A023EC', color: '#FFFFFF' }}
          >
            {navigation.sellLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}
