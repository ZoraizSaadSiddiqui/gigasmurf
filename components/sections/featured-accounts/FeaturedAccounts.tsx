'use client';

import { useRef, useState } from 'react';
import { siteContent } from '@/content/site-content';
import AccountCard from '@/components/cards/AccountCard';

export default function FeaturedAccounts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDirection, setActiveDirection] = useState<'previous' | 'next'>('next');
  const moveCarousel = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('.featured-account-column');
    const distance = (card?.offsetWidth ?? 320) + 16;
    const atStart = carousel.scrollLeft <= 1;
    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
    setActiveDirection(direction === 1 ? 'next' : 'previous');
    carousel.scrollTo({ left: direction === 1 ? (atEnd ? 0 : carousel.scrollLeft + distance) : (atStart ? carousel.scrollWidth : carousel.scrollLeft - distance), behavior: 'smooth' });
  };

  return (
    <section className="featured-accounts-section">
      <div className="featured-accounts-container container-fluid px-0">
        <div className="featured-accounts-header d-flex align-items-center justify-content-between"><h3 className="featured-accounts-title mb-0">Daily Featured <span>Accounts</span></h3><div className="d-flex align-items-center gap-3"><button className="featured-see-all btn p-0 border-0">See All (102) <span aria-hidden="true">→</span></button><div className="d-flex gap-2"><button onClick={() => moveCarousel(-1)} aria-label="Previous featured account" className={`featured-nav featured-nav--previous btn rounded-circle p-0 d-flex align-items-center justify-content-center ${activeDirection === 'previous' ? 'is-active' : ''}`}>‹</button><button onClick={() => moveCarousel(1)} aria-label="Next featured account" className={`featured-nav featured-nav--next btn rounded-circle p-0 d-flex align-items-center justify-content-center ${activeDirection === 'next' ? 'is-active' : ''}`}>›</button></div></div></div>
        <div ref={carouselRef} className="featured-accounts-carousel"><div className="featured-accounts-grid d-flex">{siteContent.featuredAccounts.map((account) => <div key={account.id} className="featured-account-column"><AccountCard acc={account} /></div>)}</div></div>
      </div>
    </section>
  );
}
