import type { CSSProperties } from 'react';
import { siteContent } from '@/content/site-content';

const sectionStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  height: '1065px',
  padding: '60px 0 70px',
  gap: '56px',
  backgroundColor: '#11072d',
};

const headerStyle: CSSProperties = {
  width: '1230px',
  maxWidth: 'calc(100% - 48px)',
  height: '147px',
};

const titleStyle: CSSProperties = {
  width: '752px',
  maxWidth: '100%',
  height: '57px',
  margin: 0,
  color: '#fff',
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
  textAlign: 'center',
};

const descriptionStyle: CSSProperties = {
  width: '752px',
  maxWidth: '100%',
  height: '66px',
  margin: 0,
  color: 'rgba(212, 212, 212, 0.8)',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: '0.6px',
  textAlign: 'center',
};

const artworkViewportStyle: CSSProperties = {
  width: '100%',
  height: '732px',
  overflow: 'hidden',
  position: 'relative',
};

const artworkStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '732px',
};

const imageStyle: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: 0,

  transform: 'translateX(-50%)',

  display: 'block',

  width: '100%',
  maxWidth: '1752.6px',
  height: '732px',

  objectFit: 'contain',
  objectPosition: 'center',
};

const navigationStyle: CSSProperties = {
  position: 'absolute',

  top: '50%',
  left: '24px',
  right: '24px',

  height: '51.97px',

  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const navigationButtonStyle: CSSProperties = {
  width: '51.97px',
  height: '51.97px',

  padding: 0,

  border: '2px solid rgba(255, 255, 255, 0.9)',
  borderRadius: '50%',

  background: 'rgba(255, 255, 255, 0.08)',

  boxShadow: 'none',

  color: '#fff',

  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flexShrink: 0,
};

function ArrowIcon({
  direction,
}: {
  direction: 'left' | 'right';
}) {
  const points =
    direction === 'left'
      ? '14 5 7 12 14 19'
      : '10 5 17 12 10 19';

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points={points}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TopVerifiedSeller() {
  const { topVerifiedSeller } = siteContent;
  return (
    <section
      data-top-verified-seller
      className="d-flex flex-column align-items-center overflow-hidden"
      style={sectionStyle}
    >
      {/* Header */}
      <div
        data-top-verified-header
        className="d-flex flex-column align-items-center"
        style={{
          ...headerStyle,
          gap: '24px',
        }}
      >
        <h2
          className="d-flex align-items-center justify-content-center"
          style={titleStyle}
        >
          {topVerifiedSeller.title}{' '}
          <span
            style={{
              color: '#a023ec',
              marginLeft: '10px',
            }}
          >
            {topVerifiedSeller.accentTitle}
          </span>
        </h2>

        <p
          className="d-flex align-items-center justify-content-center"
          style={descriptionStyle}
        >
          {topVerifiedSeller.description}
        </p>
      </div>

      {/* Artwork */}
      <div
        data-top-verified-artwork
        className="position-relative w-100"
        style={artworkViewportStyle}
      >
        <div data-top-verified-artwork-inner style={artworkStyle}>

          {/* Full Image */}
          <img
            src={topVerifiedSeller.image}
            alt={topVerifiedSeller.imageAlt}
            style={imageStyle}
          />

          {/* Center Arrows */}
          <div
            data-top-verified-navigation
            className="d-flex align-items-center justify-content-between"
            style={navigationStyle}
          >
            <button
              type="button"
              className="btn d-flex align-items-center justify-content-center"
              style={navigationButtonStyle}
              aria-label="Previous verified seller"
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              type="button"
              className="btn d-flex align-items-center justify-content-center"
              style={navigationButtonStyle}
              aria-label="Next verified seller"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
