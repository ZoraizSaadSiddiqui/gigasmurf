import Image from 'next/image';
import type { CSSProperties } from 'react';
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

const getControlButtonStyle = (isActive: boolean): CSSProperties => ({
  appearance: 'none',
  boxSizing: 'border-box',
  width: '40px',
  height: '40px',
  padding: 0,
  border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '1px solid rgba(160, 35, 236, .2)',
  borderRadius: '9999px',
  background: isActive ? '#a023ec' : 'transparent',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  fontSize: '25px',
  lineHeight: '34px',
  cursor: 'pointer',
});

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

const responsiveStyles = `
  @media (max-width: 1277px) and (min-width: 768px) {
    [data-popular-gaming-section] {
      height: auto !important;
      min-height: 703px !important;
    }

    [data-popular-gaming-cards] {
      grid-template-columns: minmax(0, 2.304fr) minmax(0, 1fr) minmax(0, 1fr) !important;
      gap: 16px !important;
    }
  }

  @media (max-width: 767px) {
    [data-popular-gaming-section] {
      width: min(100% - 32px, 560px) !important;
      height: auto !important;
      min-height: 0 !important;
      padding: 48px 0 !important;
    }

    [data-popular-gaming-inner] {
      gap: 24px !important;
    }

    [data-popular-gaming-title] {
      font-size: 30px !important;
    }

    [data-popular-gaming-controls] {
      gap: 8px !important;
    }

    [data-popular-gaming-control] {
      width: 36px !important;
      height: 36px !important;
    }

    [data-popular-gaming-cards] {
      grid-template-columns: 1fr 1fr !important;
      gap: 16px !important;
      height: auto !important;
    }

    [data-popular-game-card] {
      height: 290px !important;
    }

    [data-popular-game-card][data-popular-game-featured] {
      grid-column: 1 / -1 !important;
    }

    [data-popular-game-title] {
      right: 16px !important;
      bottom: 16px !important;
      left: 16px !important;
      font-size: 20px !important;
    }

    [data-popular-game-open] {
      right: 16px !important;
      bottom: 16px !important;
      width: 40px !important;
      height: 40px !important;
    }

    [data-popular-game-side-action] {
      top: 16px !important;
      right: 16px !important;
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

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
  return (
    <>
      <section data-popular-gaming-section style={sectionStyle}>
        <div data-popular-gaming-inner style={innerStyle}>
          <div style={headerStyle}>
            <h3 data-popular-gaming-title style={titleStyle}>Popular Gaming <span style={{ color: '#a023ec' }}>Accounts</span></h3>
            <div data-popular-gaming-controls style={controlsStyle}>
              <button data-popular-gaming-control type="button" aria-label="Previous popular game" style={getControlButtonStyle(false)}>&lsaquo;</button>
              <button data-popular-gaming-control type="button" aria-label="Next popular game" style={getControlButtonStyle(true)}>&rsaquo;</button>
            </div>
          </div>

          <div data-popular-gaming-cards style={cardsStyle}>
            {siteContent.popularGamingAccounts.map((game) => <PopularGameCard key={game.id} game={game} />)}
          </div>
        </div>
      </section>
      <style>{responsiveStyles}</style>
    </>
  );
}
