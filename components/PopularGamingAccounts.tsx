 'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { siteContent } from '@/content/site-content';

type PopularGame = (typeof siteContent.popularGamingAccounts)[number];

const sectionStyle: CSSProperties = {
  width: '1230px',
  height: '703px',
  maxWidth: 'calc(100% - 48px)',
  margin: '0 auto',
  padding: '50px 0 70px',
};

const innerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '56px',
};

const headerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '57px',
};

const titleStyle: CSSProperties = {
  margin: 0,
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
};

const controlsStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const controlButtonStyle: CSSProperties = {
  appearance: 'none',
  boxSizing: 'border-box',
  width: '40px',
  height: '40px',
  padding: 0,
  border: '1px solid rgba(160, 35, 236, .2)',
  borderRadius: '9999px',
  background: 'transparent',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  fontSize: '25px',
  lineHeight: '34px',
  cursor: 'pointer',
};

const cardsStyle: CSSProperties = {
  width: '1229.16px',
  height: '470.46px',
  display: 'grid',
  gridTemplateColumns: '631.52px 274.16px 274.16px',
  justifyContent: 'space-between',
  gap: 0,
};

const gameCardStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '470px',
  minWidth: 0,
  overflow: 'hidden',
  border: '1px solid rgba(160, 35, 236, 0.35)',
  borderRadius: '16px',
  background: '#11072D',
  boxSizing: 'border-box',
};

const imageStyle: CSSProperties = {
  objectFit: 'cover',
};

const featuredImageStyle: CSSProperties = {
  ...imageStyle,
  objectPosition: 'center',
};

const shadeStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background: 'linear-gradient(180deg, rgba(17, 7, 45, 0) 45%, rgba(17, 7, 45, .78) 100%)',
};

const gameTitleStyle: CSSProperties = {
  position: 'absolute',
  right: '24px',
  bottom: '24px',
  left: '24px',
  margin: 0,
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: 1,
};

const featuredGameTitleStyle: CSSProperties = {
  ...gameTitleStyle,
  bottom: '26px',
};

const openStyle: CSSProperties = {
  position: 'absolute',
  right: '24px',
  bottom: '24px',
  display: 'grid',
  width: '48px',
  height: '48px',
  placeItems: 'center',
  border: '.95px solid rgba(217, 217, 217, .2)',
  borderRadius: '100px',
  background: 'rgba(160, 35, 236, .18)',
  backdropFilter: 'blur(28.45px)',
  color: '#fff',
  fontSize: '22px',
};

const sideActionStyle: CSSProperties = {
  position: 'absolute',
  top: '24px',
  right: '24px',
  display: 'grid',
  width: '48px',
  height: '48px',
  placeItems: 'center',
  padding: '4.74px',
  gap: '9.48px',
  border: '.95px solid rgba(217, 217, 217, 0.2)',
  borderRadius: '100px',
  background: 'rgba(217, 217, 217, 0.18)',
  backdropFilter: 'blur(28.45px)',
  color: '#fff',
  fontSize: '20px',
  boxSizing: 'border-box',
};

function PopularGameCard({ game }: { game: PopularGame }) {
  const isFeatured = 'featured' in game && game.featured;

  return (
    <article
      data-popular-game-card
      data-popular-game-featured={isFeatured ? 'true' : undefined}
      style={gameCardStyle}
    >
      <Image
        src={game.image}
        alt={`${game.name} gaming account`}
        fill
        priority={isFeatured}
        sizes={isFeatured ? '(max-width: 767px) 100vw, 632px' : '(max-width: 767px) 50vw, 274px'}
        style={isFeatured ? featuredImageStyle : imageStyle}
      />
      <div style={shadeStyle} />
      <h4 data-popular-game-title style={isFeatured ? featuredGameTitleStyle : gameTitleStyle}>{game.name}</h4>
      <span
        data-popular-game-open={isFeatured ? 'true' : undefined}
        data-popular-game-side-action={isFeatured ? undefined : 'true'}
        style={isFeatured ? openStyle : sideActionStyle}
        aria-hidden="true"
      >
        &#8599;
      </span>
    </article>
  );
}

export default function PopularGamingAccounts() {
  const { popularGamingAccountsSection } = siteContent;
  const games = siteContent.popularGamingAccounts;
  const [activeIndex, setActiveIndex] = useState(0);

  const moveSlider = (direction: 1 | -1) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + games.length) % games.length);
  };

  const visibleGames = games.map((_, index) => games[(index + activeIndex) % games.length]);

  return (
    <>
      <section data-popular-gaming-section style={sectionStyle}>
        <div data-popular-gaming-inner style={innerStyle}>
          <div style={headerStyle}>
            <h3 data-popular-gaming-title style={titleStyle}>{popularGamingAccountsSection.title} <span style={{ color: '#a023ec' }}>{popularGamingAccountsSection.accentTitle}</span></h3>
            <div data-popular-gaming-controls style={controlsStyle}>
              <button data-popular-gaming-control type="button" aria-label="Previous popular game" onClick={() => moveSlider(-1)} className="slider-navigation-button" style={controlButtonStyle}>&lsaquo;</button>
              <button data-popular-gaming-control type="button" aria-label="Next popular game" onClick={() => moveSlider(1)} className="slider-navigation-button" style={controlButtonStyle}>&rsaquo;</button>
            </div>
          </div>

          <div data-popular-gaming-cards style={cardsStyle}>
            {visibleGames.map((game) => <PopularGameCard key={game.id} game={game} />)}
          </div>
        </div>
      </section>
    </>
  );
}
