'use client';

import { useState, type CSSProperties } from 'react';
import { siteContent } from '@/content/site-content';

const heroSectionStyle: CSSProperties = {
  width: '100%',
  minHeight: '480px',
  position: 'relative',
  background: 'radial-gradient(circle at 50% 45%, rgba(115, 24, 220, 0.18), transparent 42%), linear-gradient(180deg, #12052d 0%, #150637 55%, #100326 100%)',
};

const heroContentStyle: CSSProperties = {
  width: '1230px',
  maxWidth: '100%',
  minHeight: '540px',
  paddingTop: '90px',
  paddingBottom: '60px',
  margin: '0 auto',
};

const heroSearchStyle: CSSProperties = {
  width: '812px',
  maxWidth: '100%',
  height: '80px',
  opacity: 1,
  borderRadius: '100px',
  padding: '24px',
  background: '#A023EC26',
  boxShadow: '0 0 14px 0 #A023ECB2',
};

const popularContainerStyle: CSSProperties = {
  maxWidth: '732px',
  width: '100%',
  minHeight: '54px',
  gap: '16px',
  opacity: 1,
};

const popularTagStyle: CSSProperties = {
  height: '48px',
  padding: '16px 20px',
  gap: '10px',
  opacity: 1,
  boxSizing: 'border-box',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '100000px',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '100%',
  textAlign: 'center',
  transition: 'all 0.2s ease',
};

const heroTabsStyle: CSSProperties = { width: '525px', maxWidth: '100%', gap: '24px' };

const heroTabStyle: CSSProperties = {
  width: '247px',
  height: '64px',
  padding: '11.67px 48px',
  gap: '10px',
  boxSizing: 'border-box',
  border: '2px solid #A023EC',
  borderRadius: '105px',
  background: 'transparent',
  color: '#FFFFFF',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
};

const categoriesStyle: CSSProperties = {
  maxWidth: '848px',
  width: '100%',
  minHeight: '68px',
  gap: '10px',
  opacity: 1,
  borderRadius: '100000px',
};

const categoryButtonStyle: CSSProperties = {
  minWidth: '156px',
  height: '68px',
  padding: '16px 20px',
  gap: '8px',
  opacity: 1,
  boxSizing: 'border-box',
  border: '1px solid #A023EC33',
  borderRadius: '100000px',
  background: 'rgba(255, 255, 255, 0.04)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  backdropFilter: 'blur(50px)',
  WebkitBackdropFilter: 'blur(50px)',
  boxShadow: 'none',
  transition: 'none',
  animation: 'none',
  pointerEvents: 'none',
  cursor: 'default',
};

function SearchIcon({ color = 'currentColor' }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20 16.2 16.2" /></svg>;
}

function UserIcon({ color = 'currentColor' }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" /></svg>;
}

function LightningIcon({ color = 'currentColor' }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>;
}

export default function HeroSection() {
  const { hero } = siteContent;
  const [searchValue, setSearchValue] = useState('');
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <section className="text-center position-relative overflow-hidden py-5 d-flex align-items-center justify-content-center" style={heroSectionStyle}>
      <style>{`
        .hero-tab-button {
          transition: background-color 0.25s ease;
        }
        .hero-tab-button:hover {
          background-color: rgba(160, 35, 236, 1) !important;
        }
      `}</style>
      <div className="mx-auto d-flex flex-column align-items-center justify-content-center" style={heroContentStyle}>
        <div className="mx-auto">
          <div className="d-flex justify-content-center mb-4">
            <div className="d-flex align-items-center justify-content-between position-relative" style={heroSearchStyle}>
              <div className="d-flex align-items-center w-100 gap-3">
                <span className="text-white-50 d-flex align-items-center"><SearchIcon /></span>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder=""
                  aria-label={hero.searchPlaceholder}
                  className="form-control bg-transparent text-white border-0 shadow-none p-0 position-relative"
                  style={{ color: '#FFFFFF', zIndex: 1 }}
                />
              </div>
              {!searchValue && <span aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '58px', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)', pointerEvents: 'none' }}>{hero.searchPlaceholder}</span>}
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center flex-wrap mx-auto mb-4" style={popularContainerStyle}>
            <span className="text-white-50 small">{hero.popularLabel}</span>
            {hero.popularTags.map((tag) => <button key={tag} type="button" className="d-inline-flex align-items-center justify-content-center" style={popularTagStyle}>{tag}</button>)}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap mx-auto mb-5" style={heroTabsStyle}>
          <button 
            type="button" 
            className="hero-tab-button d-inline-flex align-items-center justify-content-center" 
            style={heroTabStyle}
            onMouseEnter={() => setHoveredTab(0)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <UserIcon color={hoveredTab === 0 ? '#FFFFFF' : '#A023EC'} />
            <span>{hero.tabs[0]}</span>
          </button>
          <button 
            type="button" 
            className="hero-tab-button d-inline-flex align-items-center justify-content-center" 
            style={heroTabStyle}
            onMouseEnter={() => setHoveredTab(1)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <span style={{ color: hoveredTab === 1 ? '#FFFFFF' : '#A023EC' }}>
              <LightningIcon color={hoveredTab === 1 ? '#FFFFFF' : '#A023EC'} />
            </span>
            <span>{hero.tabs[1]}</span>
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap mx-auto" style={categoriesStyle}>
          {hero.categories.map((category) => (
            <button key={category.label} type="button" className="btn d-inline-flex align-items-center justify-content-center" style={categoryButtonStyle}>
              <img src={category.image} alt={category.label} width="36" height="36" style={{ objectFit: 'contain' }} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}