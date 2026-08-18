'use client';

import { useRef, useState } from 'react';
import AccountCard, { AccountData } from './cards/AccountCard';

const featuredAccounts: AccountData[] = [
  { id: 1, name: 'Valorant Account', desc: 'Full Access EU Account', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/1.png' },
  { id: 2, name: 'Brawl Stars 50K+ Trophies', desc: 'All Brawlers Unlocked', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/2.png' },
  { id: 3, name: 'Fortnite OG Account', desc: 'Renegade Raider + 150 Skins', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/3.png' },
  { id: 4, name: 'League of Challenger', desc: 'Level 500+ God Tier Account', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/4.jpg' },
  { id: 5, name: 'Immortal Valorant Account', desc: 'Premium Skins + Full Access', seller: 'AceTrader', rating: '4.9', price: '$999', image: '/3.png' },
  { id: 6, name: 'Fortnite Black Knight', desc: 'OG Cosmetics + 120 Skins', seller: 'AceTrader', rating: '4.8', price: '$899', image: '/1.png' },
];

export default function FeaturedAccounts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDirection, setActiveDirection] = useState<'previous' | 'next'>('next');

  const moveCarousel = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('.featured-account-column');
    const distance = (card?.offsetWidth ?? 285) + 16;
    const atStart = carousel.scrollLeft <= 1;
    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
    setActiveDirection(direction === 1 ? 'next' : 'previous');
    carousel.scrollTo({ left: direction === 1 ? (atEnd ? 0 : carousel.scrollLeft + distance) : (atStart ? carousel.scrollWidth : carousel.scrollLeft - distance), behavior: 'smooth' });
  };

  return (
    <section className="featured-accounts-section">
      <div className="featured-accounts-container container-fluid px-0">
<div className="featured-accounts-header d-flex align-items-center justify-content-between">
          <h3 className="featured-accounts-title mb-0">Daily Featured <span>Accounts</span></h3>
          <div className="d-flex align-items-center gap-3">
            <button className="featured-see-all btn p-0 border-0">See All (102) <span aria-hidden="true">&rarr;</span></button>
            <div className="d-flex gap-2">
              <button onClick={() => moveCarousel(-1)} aria-label="Previous featured account" className={`featured-nav featured-nav--previous btn rounded-circle p-0 d-flex align-items-center justify-content-center ${activeDirection === 'previous' ? 'is-active' : ''}`}>&lsaquo;</button>
              <button onClick={() => moveCarousel(1)} aria-label="Next featured account" className={`featured-nav featured-nav--next btn rounded-circle p-0 d-flex align-items-center justify-content-center ${activeDirection === 'next' ? 'is-active' : ''}`}>&rsaquo;</button>
            </div>
          </div>
        </div>
        <div ref={carouselRef} className="featured-accounts-carousel">
          <div className="featured-accounts-grid d-flex">
            {featuredAccounts.map((acc) => <div key={acc.id} className="featured-account-column"><AccountCard acc={acc} /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
