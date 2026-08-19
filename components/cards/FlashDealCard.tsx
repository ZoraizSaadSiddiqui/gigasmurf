'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { siteContent } from '@/content/site-content';

interface TimeState {
  h: number;
  m: number;
  s: number;
}

const flashCardStyle: CSSProperties = {
  position: 'relative',
  width: '285px',
  maxWidth: '448px',
  height: '406px',
  padding: '24px',
  gap: '24px',
  boxSizing: 'border-box',
  border: 0,
  borderTop: '2px solid #a023ec',
  borderBottom: '2px solid #a023ec',
  borderRadius: '30px',
  background: 'linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)',
  boxShadow: 'none',
  backdropFilter: 'blur(28.64761734008789px)',
  WebkitBackdropFilter: 'blur(28.64761734008789px)',
  justifyContent: 'space-between',
};

const highlightStyle: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  top: '-3px',
  left: '1px',
  width: 'calc(100% - 2px)',
  height: '1px',
  pointerEvents: 'none',
  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, 0) 100%)',
};

const flashTitleStyle: CSSProperties = { margin: 0, color: '#fff', fontSize: '20px', fontWeight: 700, lineHeight: 1 };
const discountStyle: CSSProperties = {
  width: '57px',
  height: '32px',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid rgba(34, 197, 94, 0.2)',
  borderRadius: '9999px',
  background: 'rgba(34, 197, 94, 0.1)',
  color: '#22c55e',
  fontSize: '14px',
  fontWeight: 600,
  fontStyle: 'normal',
  lineHeight: '14px',
  letterSpacing: '.8px',
  opacity: 1,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
};
const flashContentStyle: CSSProperties = { width: '237px', gap: '16px' };
const flashImageStyle: CSSProperties = { width: '106px', height: '100px', display: 'block', objectFit: 'cover', borderRadius: '12px' };
const descriptionStyle: CSSProperties = { width: '237px', minHeight: '38px', margin: 0, color: '#cfc2d6', fontSize: '14px', fontWeight: 400, lineHeight: '14px', textAlign: 'center' };
const timerStyle: CSSProperties = {
  width: '198px',
  height: '41px',
  margin: '0 auto',
  padding: '4px 20px',
  gap: '8px',
  boxSizing: 'border-box',
  borderRadius: '9999px',
  background: 'rgba(133, 41, 255, 0.1)',
  color: '#8529ff',
};
const timerIconStyle: CSSProperties = { width: '24px', height: '24px', flexShrink: 0 };
const timerTextStyle: CSSProperties = { width: '126px', height: '33px', color: '#8529ff', fontSize: '24px', fontWeight: 400, fontStyle: 'normal', lineHeight: '100%', letterSpacing: '5px' };
const buttonStyle: CSSProperties = {
  width: '235px',
  height: '48px',
  minHeight: '48px',
  padding: '14px 36px',
  gap: '12px',
  boxSizing: 'border-box',
  border: '2px solid rgba(255, 255, 255, .2)',
  borderRadius: '105px',
  background: '#a023ec',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1,
  boxShadow: 'none',
};

export default function FlashDealCard() {
  const { flashDeal } = siteContent.marketplace;
  const [time, setTime] = useState<TimeState>({
    h: 1,
    m: 42,
    s: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.h === 0 && prev.m === 0 && prev.s === 0) {
          return prev;
        }

        let { h, m, s } = prev;

        s -= 1;

        if (s < 0) {
          s = 59;
          m -= 1;
        }

        if (m < 0) {
          m = 59;
          h -= 1;
        }

        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (value: number) => String(value).padStart(2, '0');

  const remainingTime = `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}`;

  return (
    <article className="card d-flex flex-column" style={flashCardStyle} aria-labelledby="flash-deal-title">
      <span aria-hidden="true" style={highlightStyle} />
      <header className="d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
        <h5 id="flash-deal-title" style={flashTitleStyle}>{flashDeal.title}</h5>
        <span className="badge rounded-pill d-flex align-items-center justify-content-center" style={discountStyle}>{flashDeal.discount}</span>
      </header>

      <div className="d-flex flex-column align-items-center" style={flashContentStyle}>
        <Image
          src={flashDeal.image}
          alt={flashDeal.title}
          width={106}
          height={100}
          style={flashImageStyle}
        />
        <p style={descriptionStyle}>
          {flashDeal.description}<span style={{ color: 'inherit', fontWeight: 700 }}>{flashDeal.emphasis}</span>{flashDeal.suffix}
        </p>
      </div>

      <time className="d-flex align-items-center justify-content-center" style={timerStyle} dateTime={`PT${time.h}H${time.m}M${time.s}S`} aria-label={`${time.h} hours, ${time.m} minutes, and ${time.s} seconds remaining`}>
        <svg style={timerIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="d-flex align-items-center" style={timerTextStyle} aria-live="off">{remainingTime}</span>
      </time>

      <button type="button" className="btn d-flex align-items-center justify-content-center" style={buttonStyle}>
        {flashDeal.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </article>
  );
}
