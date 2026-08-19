'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site-content';

export default function Navbar() {
  const { brand, navigation } = siteContent;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav data-site-navbar className="navbar position-relative" style={{ backgroundColor: '#11072D', zIndex: 1000 }}>
      <div data-navbar-content className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand m-0" href="#">
          <img src={brand.logo} alt={brand.name} style={{ width: '185.8px', height: '55.29px', maxWidth: '140px', objectFit: 'contain' }} />
        </a>

        {/* Desktop links */}
        <div data-navbar-links className="d-none d-lg-flex align-items-center gap-4">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-decoration-none"
              style={{ fontSize: '18px', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div data-navbar-actions className="d-none d-lg-flex align-items-center gap-3">
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

        {/* Mobile Navbar Controls (Cart Icon + Hamburger Button) */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <a href="#" aria-label="Shopping cart" className="text-white position-relative d-inline-flex align-items-center justify-content-center text-decoration-none p-2 me-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span
              className="rounded-circle position-absolute d-flex align-items-center justify-content-center"
              style={{ top: '0px', right: '0px', width: '16px', height: '16px', fontSize: '9px', fontWeight: 700, backgroundColor: '#A023EC', color: '#FFFFFF' }}
            >
              {navigation.cartCount}
            </span>
          </a>

          <button
            type="button"
            className="btn text-white p-2 border-0 bg-transparent"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Simple & Elegant Sidebar Drawer Overlay */}
        {isOpen && (
          <div className="d-lg-none">
            {/* Backdrop */}
            <div
              className="position-fixed inset-0"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 9998,
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Elegant Sidebar Drawer */}
            <div
              className="position-fixed d-flex flex-column"
              style={{
                top: 0,
                right: 0,
                width: '280px',
                height: '100vh',
                backgroundColor: '#11072D',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 9999,
                padding: '24px 20px',
                overflowY: 'auto',
              }}
            >
              {/* Drawer Header */}
              <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <img src={brand.logo} alt={brand.name} style={{ width: '120px', height: '36px', objectFit: 'contain' }} />
                <button
                  type="button"
                  className="btn text-white p-1 bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="d-flex flex-column gap-1 mb-auto">
                {navigation.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white text-decoration-none py-2 px-1"
                    style={{ fontSize: '17px', fontWeight: 500, opacity: 0.9 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Drawer Footer Actions */}
              <div className="d-flex flex-column gap-3 pt-3 border-top" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                {/* Cart Row */}
                <a
                  href="#"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-between py-1 px-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="d-flex align-items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>Cart</span>
                  </div>
                  <span className="badge rounded-pill" style={{ backgroundColor: '#A023EC', fontSize: '11px', padding: '4px 10px' }}>
                    {navigation.cartCount}
                  </span>
                </a>

                {/* Account Row */}
                <a
                  href="#"
                  className="text-white text-decoration-none d-flex align-items-center gap-2 py-1 px-1"
                  onClick={() => setIsOpen(false)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>Account</span>
                </a>

                {/* Sell Button */}
                <button
                  type="button"
                  className="btn sell-button rounded-pill py-2 w-100 mt-2"
                  style={{ backgroundColor: '#A023EC', borderColor: '#A023EC', color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}
                >
                  {navigation.sellLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
