import Image from 'next/image';
import type { CSSProperties } from 'react';
import { siteContent, type BoostingServiceData } from '@/content/site-content';

export type { BoostingServiceData } from '@/content/site-content';

export interface BoostingCardProps {
  svc: BoostingServiceData;
}

const cardStyle: CSSProperties = {
  width: '285px',
  height: '366px',
  margin: 0,
  padding: '8px 16px',
  overflow: 'hidden',
  border: '1px solid rgba(160, 35, 236, .2)',
  borderRadius: '16px',
  background: 'rgba(26, 11, 46, .6)',
  color: '#fff',
};

const imageContainerStyle: CSSProperties = {
  width: '252px',
  height: '192px',
  flex: '0 0 192px',
  overflow: 'hidden',
  borderRadius: '12px',
  background: '#12052d',
};

const imageStyle: CSSProperties = {
  objectFit: 'cover',
};

const bodyStyle: CSSProperties = {
  width: '252px',
  height: '156px',
  padding: '16px 0',
  color: '#fff',
};

const titleStyle: CSSProperties = {
  margin: '0 0 8px',
  color: '#fff',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '25px',
};

const detailsStyle: CSSProperties = {
  paddingBottom: '12px',
  borderBottom: '1px solid rgba(207, 194, 214, .2)',
};

const detailRowStyle: CSSProperties = {
  height: '19px',
  color: '#cfc2d6',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '19px',
};

const detailValueStyle: CSSProperties = {
  color: '#fff',
  fontWeight: 500,
};

const sellerStyle: CSSProperties = {
  height: '24px',
  marginTop: 'auto',
  color: '#fff',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
};

const sellerDetailsStyle: CSSProperties = {
  gap: '8px',
};

const sellerAvatarStyle: CSSProperties = {
  width: '24px',
  height: '24px',
  overflow: 'hidden',
  border: '.5px solid rgba(207, 194, 214, .2)',
  borderRadius: '12px',
};

const verifiedStyle: CSSProperties = {
  width: '12px',
  height: '12px',
  color: '#22c55e',
};

const ratingStyle: CSSProperties = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '16px',
};

export default function BoostingCard({ svc }: BoostingCardProps) {
  const { seller } = siteContent;
  return (
    <article className="card h-100" style={cardStyle}>
      <div className="position-relative" style={imageContainerStyle}>
        <Image src={svc.image} alt={svc.name} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 252px" style={imageStyle} />
      </div>
      <div className="card-body d-flex flex-column" style={bodyStyle}>
        <h3 style={titleStyle}>{svc.name}</h3>
        <div style={detailsStyle}>
          <div className="d-flex justify-content-between" style={detailRowStyle}><span>Max Level</span><strong style={detailValueStyle}>{svc.maxLevel}</strong></div>
          <div className="d-flex justify-content-between" style={detailRowStyle}><span>Starting price</span><strong style={detailValueStyle}>{svc.startingPrice}</strong></div>
        </div>
        <div className="d-flex align-items-center justify-content-between" style={sellerStyle}>
          <div className="d-flex align-items-center" style={sellerDetailsStyle}>
            <span className="position-relative" style={sellerAvatarStyle}><Image src={seller.avatar} alt={seller.name} fill sizes="24px" style={imageStyle} /></span>
            <span>{seller.name}</span>
            <svg style={verifiedStyle} viewBox="0 0 12 12" aria-label="Verified seller"><path fill="currentColor" d="M6 0l1.3 1.2 1.8-.1.7 1.6 1.5 1-.5 1.7.5 1.7-1.5 1-.7 1.6-1.8-.1L6 12 4.7 10.8l-1.8.1-.7-1.6-1.5-1 .5-1.7-.5-1.7 1.5-1 .7-1.6 1.8.1L6 0z" /><path d="M3.55 6.12l1.53 1.52 3.36-3.35" fill="none" stroke="#11072d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span style={ratingStyle}><span style={{ color: '#a023ec' }}>&#9733;</span> {seller.rating}</span>
        </div>
      </div>
    </article>
  );
}
