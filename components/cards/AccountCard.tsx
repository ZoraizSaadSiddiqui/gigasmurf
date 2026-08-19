import Image from 'next/image';
import type { CSSProperties } from 'react';
import { siteContent, type AccountData } from '@/content/site-content';

export type { AccountData } from '@/content/site-content';
export interface AccountCardProps { acc: AccountData; }

export default function AccountCard({ acc }: AccountCardProps) {
  const isGlowing = acc.id === 1;
  const { seller } = siteContent;
  const cardStyle: CSSProperties = {
    boxSizing: 'border-box',
    width: '320px',
    minWidth: '320px',
    height: '417px',
    minHeight: '417px',
    padding: '8px',
    border: `1px solid ${isGlowing ? '#a023ec' : 'rgba(160, 35, 236, 0.3)'}`,
    borderRadius: '16px',
    background: 'rgba(26, 11, 46, 0.6)',
    boxShadow: isGlowing
      ? '0 0 20px rgba(160, 35, 236, 0.55), inset 0 0 16px rgba(160, 35, 236, 0.18)'
      : 'none',
  };

  return (
    <article className="card overflow-hidden" style={cardStyle}>
      <div className="position-relative" style={{ width: '100%', height: '192px', flex: '0 0 192px', overflow: 'hidden', borderRadius: '12px', background: '#1c0c3e' }}>
        <Image src={acc.image} alt={acc.name} fill sizes="(max-width: 767px) 100vw, 320px" priority={isGlowing} style={{ objectFit: 'cover' }} />
        <span className="badge rounded-pill" style={{ position: 'absolute', zIndex: 1, top: '12px', left: '12px', padding: '4px 8px', border: '1px solid rgba(34, 197, 94, 0.2)', background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e', fontFamily: "'Manrope', sans-serif", fontSize: '9px', fontWeight: 500 }}>Promoted</span>
        <button type="button" aria-label={`Save ${acc.name}`} className="btn d-flex align-items-center justify-content-center" style={{ position: 'absolute', zIndex: 1, top: '12px', right: '12px', width: '35.92px', height: '35.92px', padding: '4.73px', border: 0, borderRadius: '94.54px', background: 'rgba(160, 35, 236, 0.2)', color: '#fff' }}><svg style={{ width: '18px', height: '18px', strokeWidth: 1.55 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" /></svg></button>
      </div>
      <div className="card-body d-flex flex-column" style={{ boxSizing: 'border-box', width: '100%', height: '207px', flex: '0 0 207px', padding: '16px 12px', color: '#fff' }}>
        <h4 style={{ margin: '0 0 6px', color: '#fff', fontFamily: "'Manrope', sans-serif", fontSize: '20px', fontWeight: 700, lineHeight: '22px' }}>{acc.name}</h4>
        <p style={{ minHeight: 0, margin: '0 0 12px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', color: '#cfc2d6', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '18px' }}>
          {acc.desc}
          <span className="d-inline-flex align-items-center" style={{ gap: '4px', marginLeft: '4px', color: '#cfc2d6', whiteSpace: 'nowrap' }}>
            <svg style={{ width: '14px', height: '14px', flex: '0 0 14px' }} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1.5 8s2.35-4 6.5-4 6.5 4 6.5 4-2.35 4-6.5 4S1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="8" r="1.85" stroke="currentColor" strokeWidth="1.35" />
            </svg>
            340
          </span>
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2" style={{ color: '#fff', fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: 600, lineHeight: '20px' }}>
            <span className="position-relative" style={{ width: '24px', height: '24px', overflow: 'hidden', border: '0.5px solid rgba(207, 194, 214, 0.2)', borderRadius: '50%', background: '#260b4a' }}><Image src={seller.avatar} alt={seller.name} fill sizes="24px" style={{ objectFit: 'cover', objectPosition: 'center' }} /></span>
            <span>{acc.seller}</span>
            <svg style={{ width: '12px', height: '12px', flex: '0 0 12px', color: '#22c55e' }} viewBox="0 0 12 12" aria-label="Verified seller"><path fill="currentColor" d="M6 0l1.3 1.2 1.8-.1.7 1.6 1.5 1-.5 1.7.5 1.7-1.5 1-.7 1.6-1.8-.1L6 12 4.7 10.8l-1.8.1-.7-1.6-1.5-1 .5-1.7-.5-1.7 1.5-1 .7-1.6 1.8.1L6 0z" /><path d="M3.55 6.12l1.53 1.52 3.36-3.35" fill="none" stroke="#11072d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span style={{ color: '#fff', fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: 600, lineHeight: '20px' }}><span style={{ color: '#a023ec' }}>&#9733;</span> {acc.rating}</span>
        </div>
        <footer className="d-flex align-items-center justify-content-between" style={{ marginTop: 'auto', padding: 0 }}><div className="d-flex flex-column" style={{ gap: '2px' }}><span style={{ color: '#cfc2d6', fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '14px' }}>Price</span><strong style={{ color: '#fff', fontFamily: "'Manrope', sans-serif", fontSize: '24px', fontWeight: 800, lineHeight: '32px' }}>{acc.price}</strong></div><button type="button" className="btn rounded-pill d-flex align-items-center" style={{ boxSizing: 'border-box', minWidth: '101px', height: '48px', padding: '14px 24px', gap: '8px', border: '2px solid #a023ec', background: 'transparent', color: '#a023ec', fontFamily: "'Manrope', sans-serif", fontSize: '18px', fontWeight: 700, lineHeight: '18px', whiteSpace: 'nowrap' }}>Buy <svg style={{ width: '12px', height: '24px', flex: '0 0 12px' }} aria-hidden="true" viewBox="0 0 12 24" fill="none"><path d="m3 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button></footer>
      </div>
    </article>
  );
}
