'use client';
import React from 'react';
import { siteContent } from '@/content/site-content';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </svg>
);

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedinIcon,
};

export default function Footer() {
  const { brand, footer: footerContent } = siteContent;
  const linkStyle = {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '1.5',
    color: 'rgba(245,247,250,1)',
    textDecoration: 'none',
  };

  const headingStyle = {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '1.3',
    letterSpacing: '0%',
    color: '#ffffff',
    width: '150px',
    height: 'auto',
    margin: 0,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-site-footer style={{ backgroundColor: '#0D0420', padding: '40px 0' }}>
      {false && <style>{`
        /* Social icons — large circles matching Figma */
        .footer-social-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid rgba(217,217,217,0.2);
          background: rgba(217,217,217,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .footer-social-icon:hover {
          background: rgba(160,35,236,1);
          border-color: rgba(160,35,236,1);
        }

        /* Back-to-top button */
        .footer-back-to-top {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(160,35,236,1);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(160,35,236,1);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .footer-back-to-top:hover {
          background: rgba(160,35,236,1);
          color: #ffffff;
        }
      `}</style>}

      <div data-footer-container className="container" style={{ maxWidth: '1290px' }}>
        <div
          data-footer-shell
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1230px',
            margin: '0 auto',
            borderRadius: '40px',
            border: '1px solid rgba(207,194,214,0.2)',
            background: 'rgba(45,16,57,0.3)',
            padding: '60px 49px 40px 50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div
            data-footer-top-row
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              gap: '40px',
            }}
          >
            <div
              data-footer-brand
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                flex: '1 1 340px',
                maxWidth: '340.39px',
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ width: '185.8px', height: '55.29px', objectFit: 'contain', opacity: 1 }}
              />

              <p
                style={{
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1.5',
                  letterSpacing: '0%',
                  color: 'rgba(245,247,250,1)',
                  width: '340.39px',
                  maxWidth: '100%',
                  margin: 0,
                }}
              >
                {footerContent.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                {footerContent.socialLinks.map((social) => {
                  const SocialIcon = socialIcons[social.label];
                  return <a key={social.label} href={social.href} className="footer-social-icon" aria-label={social.label}><SocialIcon /></a>;
                })}
              </div>
            </div>

            <div
              data-footer-link-groups
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '80px',
              }}
            >
              {footerContent.linkGroups.map((group) => (
                <div data-footer-link-group key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '163px' }}>
                  <h6 style={group.title === 'Support & Legal' ? { ...headingStyle, width: 'auto', whiteSpace: 'nowrap' } : headingStyle}>{group.title}</h6>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {group.links.map((link) => <a key={link} href="#" style={{ ...linkStyle, whiteSpace: 'nowrap' }}>{link}</a>)}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="footer-back-to-top"
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
            >
              <ArrowUpIcon />
            </button>
          </div>

          <div
            style={{
              width: '100%',
              maxWidth: '1120px',
              margin: '30px auto 0',
              borderTop: '1px solid rgba(207,194,214,0.2)',
            }}
          />

          <p
            style={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5',
              color: 'rgba(245,247,250,0.7)',
              textAlign: 'center',
              margin: '20px 0 0',
            }}
          >
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
