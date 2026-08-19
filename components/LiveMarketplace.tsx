import FlashDealCard from '@/components/cards/FlashDealCard';
import MarketActivityCard from '@/components/cards/MarketActivityCard';
import { siteContent } from '@/content/site-content';
import type { CSSProperties } from 'react';

const sectionStyle: CSSProperties = {
  width: 'min(1230px, 100%)',
  margin: '0 auto',
  padding: '50px 0 70px',
  gap: '56px',
};

const titleStyle: CSSProperties = {
  width: 'auto',
  height: 'auto',
  margin: 0,
  color: '#fff',
  fontFamily: 'Poppins',
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
};

const cardsRowStyle: CSSProperties = {
  width: '100%',
  height: '411px',
  gap: '24px',
};

const cardColumnStyle: CSSProperties = {
  flex: '0 0 448px',
  width: '448px',
  minWidth: 0,
  maxWidth: '448px',
  height: '411px',
};

const marketCardStyle: CSSProperties = {
  position: 'relative',
  width: '448px',
  maxWidth: '448px',
  height: '411px',
  padding: '32px',
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
};

const cardHighlightStyle: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  top: '-3px',
  left: '1px',
  width: 'calc(100% - 2px)',
  height: '1px',
  pointerEvents: 'none',
  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, 0) 100%)',
};

const headerStyle: CSSProperties = { gap: '8px' };
const marketTitleStyle: CSSProperties = { margin: 0, color: '#ffffff', fontSize: '16px', fontWeight: 700 };
const liveBadgeStyle: CSSProperties = { width: '8px', height: '8px', minWidth: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' };

export default function LiveMarketplace() {
  const { marketplace } = siteContent;

  return (
    <section data-live-marketplace className="d-flex flex-column align-items-center" style={sectionStyle}>
      <h2 data-live-marketplace-title style={titleStyle}>
        {marketplace.title} <span style={{ color: '#a023ec' }}>{marketplace.accentTitle}</span>
      </h2>

      <div data-live-marketplace-cards className="d-flex align-items-stretch" style={cardsRowStyle}>
        <div data-live-marketplace-column style={cardColumnStyle}>
          <div data-live-marketplace-card className="card d-flex flex-column" style={marketCardStyle}>
            <span aria-hidden="true" style={cardHighlightStyle} />
            <div className="d-flex align-items-center" style={headerStyle}><span style={liveBadgeStyle} /><h5 style={marketTitleStyle}>{marketplace.liveTitle}</h5></div>
            {marketplace.liveActivity.map((item) => <MarketActivityCard key={item.id} item={item} />)}
          </div>
        </div>
        <div data-live-marketplace-column style={cardColumnStyle}>
          <div data-live-marketplace-card className="card d-flex flex-column" style={marketCardStyle}>
            <span aria-hidden="true" style={cardHighlightStyle} />
            <div className="d-flex align-items-center" style={headerStyle}><h5 style={marketTitleStyle}>{marketplace.soldTitle}</h5></div>
            {marketplace.recentlySold.map((item) => <MarketActivityCard key={item.id} item={item} isSold />)}
          </div>
        </div>
        <div data-live-marketplace-deal style={{ flex: '0 0 285px', width: '285px', height: '406px', maxWidth: '448px' }}><FlashDealCard /></div>
      </div>
    </section>
  );
}
