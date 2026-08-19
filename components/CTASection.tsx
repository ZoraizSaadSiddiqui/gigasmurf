'use client';
import type { CSSProperties } from 'react';
import { siteContent } from '@/content/site-content';

const sectionStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '1243px',
  maxWidth: '100%',
  height: '657px',
  margin: '0 auto',
  padding: '60px 0',
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const frameStyle: CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  width: '1243px',
  height: '537px',
  flex: '0 0 537px',
  padding: '90px 297px',
  overflow: 'hidden',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const backgroundLayerStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background:
    'radial-gradient(circle at 12% 7%, rgba(160, 35, 236, 0.28) 0%, rgba(160, 35, 236, 0.08) 30%, transparent 56%), radial-gradient(circle at 78% 84%, rgba(116, 72, 182, 0.22) 0%, transparent 41%), linear-gradient(107deg, rgba(75, 28, 126, 0.34) 0%, rgba(44, 34, 79, 0.2) 47%, rgba(255, 255, 255, 0.04) 100%)',
};

const glowStyle: CSSProperties = {
  position: 'absolute',
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(160, 35, 236, 0.24) 0%, rgba(160, 35, 236, 0) 70%)',
  filter: 'blur(20px)',
  pointerEvents: 'none',
};

const leftGlowStyle: CSSProperties = {
  ...glowStyle,
  top: '-134px',
  left: '-86px',
};

const rightGlowStyle: CSSProperties = {
  ...glowStyle,
  right: '-86px',
  bottom: '-150px',
};

const bokehStyle: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(255, 255, 255, 0.26) 0%, rgba(222, 184, 255, 0.1) 36%, transparent 72%)',
  filter: 'blur(4px)',
  pointerEvents: 'none',
};

const contentStyle: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  width: '735.5px',
  height: '357px',
  flex: '0 0 357px',
  gap: '56px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const copyStyle: CSSProperties = {
  width: '683px',
  height: '237px',
  flex: '0 0 237px',
  gap: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle: CSSProperties = {
  width: '683px',
  height: '114px',
  margin: 0,
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const descriptionStyle: CSSProperties = {
  width: '683px',
  height: '99px',
  margin: 0,
  color: 'rgba(212, 212, 212, 0.8)',
  fontFamily: "'Manrope'",
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: '0.6px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const actionsStyle: CSSProperties = {
  width: '496px',
  height: '64px',
  flex: '0 0 64px',
  gap: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonBaseStyle: CSSProperties = {
  boxSizing: 'border-box',
  height: '64px',
  padding: '14px 36px',
  gap: '12px',
  border: '2px solid #a023ec',
  borderRadius: '105px',
  background: 'transparent',
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '30px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const sparkleStyle: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: 'Arial, sans-serif',
  fontSize: '21px',
  lineHeight: 1,
  textShadow: '0 0 12px rgba(255, 255, 255, 0.65)',
  pointerEvents: 'none',
};

export default function CTASection() {
  const { cta } = siteContent;

  return (
    <section
      id="cta-section"
      aria-labelledby="cta-title"
      className="d-flex flex-column align-items-center justify-content-center"
      style={sectionStyle}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={frameStyle}
      >
        <span aria-hidden="true" style={backgroundLayerStyle} />
        <span aria-hidden="true" style={leftGlowStyle} />
        <span aria-hidden="true" style={rightGlowStyle} />

        <span
          aria-hidden="true"
          style={{ ...bokehStyle, width: '52px', height: '52px', left: '76px', bottom: '48px' }}
        />
        <span
          aria-hidden="true"
          style={{ ...bokehStyle, width: '34px', height: '34px', left: '318px', bottom: '32px' }}
        />
        <span
          aria-hidden="true"
          style={{ ...bokehStyle, width: '54px', height: '54px', right: '82px', bottom: '50px' }}
        />

        <span aria-hidden="true" style={{ ...sparkleStyle, top: '236px', left: '6px' }}>✦</span>
        <span aria-hidden="true" style={{ ...sparkleStyle, top: '228px', right: '7px' }}>✦</span>

        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={contentStyle}
        >
          <div className="d-flex flex-column align-items-center" style={copyStyle}>
            <h2 id="cta-title" className="d-flex align-items-center justify-content-center" style={titleStyle}>
              <span>
            {cta.title.split('\n')[0]}
                <br />
                {cta.title.split('\n')[1]}
              </span>
            </h2>

            <p className="d-flex align-items-center justify-content-center" style={descriptionStyle}>
              <span>
                {cta.description.split('\n')[0]}
                <br />
                {cta.description.split('\n')[1]}
                <br />
                {cta.description.split('\n')[2]}
              </span>
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center" style={actionsStyle}>
            <button
              type="button"
              className="btn cta-action-button d-inline-flex align-items-center justify-content-center"
              style={{ ...buttonBaseStyle, width: '251px' }}
            >
              {cta.primaryAction}
            </button>

            <button
              type="button"
              className="btn cta-action-button d-inline-flex align-items-center justify-content-center"
              style={{ ...buttonBaseStyle, width: '213px', padding: '11.67px 36px' }}
            >
              {cta.secondaryAction}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
