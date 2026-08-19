'use client';

import type { CSSProperties } from 'react';
import { useRef, useState } from 'react';
import AccountCard from '@/components/cards/AccountCard';
import { siteContent } from '@/content/site-content';

const sectionStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '1230px',
  maxWidth: '100%',
  height: '650px',
  paddingTop: '50px',
  paddingBottom: '70px',
  gap: '56px',
  margin: '0 auto',
};

const containerStyle: CSSProperties = {
  width: 'min(1328px, 100%)',
};

const headerStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  height: '57px',
  marginBottom: '36px',
};

const titleStyle: CSSProperties = {
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
};

const seeAllStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: 0,
  border: 0,
  background: 'transparent',
  color: '#a023ec',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '30px',
  whiteSpace: 'nowrap',
};

const carouselStyle: CSSProperties = {
  overflowX: 'hidden',
  overflowY: 'hidden',
  scrollBehavior: 'smooth',
};

const gridStyle: CSSProperties = {
  width: 'max-content',
  gap: '16px',
  flexWrap: 'nowrap',
};

const accountColumnStyle: CSSProperties = {
  flex: '0 0 320px',
  minWidth: '320px',
};

const getNavigationStyle = (isActive: boolean): CSSProperties => ({
  width: '40px',
  height: '40px',
  padding: 0,
  border: `1px solid ${isActive ? '#a023ec' : 'rgba(160, 35, 236, 0.45)'}`,
  borderRadius: '50%',
  background: isActive ? '#a023ec' : 'transparent',
  color: '#fff',
  fontSize: '21px',
  lineHeight: 1,
});

export default function FeaturedAccounts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDirection, setActiveDirection] = useState<'previous' | 'next'>('next');

  const moveCarousel = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>('[data-featured-account-card]');
    const distance = (card?.offsetWidth ?? 320) + 16;
    const atStart = carousel.scrollLeft <= 1;
    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;

    setActiveDirection(direction === 1 ? 'next' : 'previous');
    carousel.scrollTo({ left: direction === 1 ? (atEnd ? 0 : carousel.scrollLeft + distance) : (atStart ? carousel.scrollWidth : carousel.scrollLeft - distance), behavior: 'smooth' });
  };

  return (
    <section className="d-flex flex-column" style={sectionStyle}>
      <div className="container-fluid px-0" style={containerStyle}>
        <div className="d-flex align-items-center justify-content-between flex-nowrap" style={headerStyle}>
          <h3 className="mb-0" style={titleStyle}>Daily Featured <span style={{ color: '#a023ec' }}>Accounts</span></h3>
          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn" style={seeAllStyle}>See All (102) <span aria-hidden="true">&rarr;</span></button>
            <div className="d-flex gap-2">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous featured account" className="btn d-flex align-items-center justify-content-center" style={getNavigationStyle(activeDirection === 'previous')}>&lsaquo;</button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Next featured account" className="btn d-flex align-items-center justify-content-center" style={getNavigationStyle(activeDirection === 'next')}>&rsaquo;</button>
            </div>
          </div>
        </div>

        <div ref={carouselRef} style={carouselStyle}>
          <div className="d-flex" style={gridStyle}>
            {siteContent.featuredAccounts.map((account) => <div key={account.id} data-featured-account-card style={accountColumnStyle}><AccountCard acc={account} /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
