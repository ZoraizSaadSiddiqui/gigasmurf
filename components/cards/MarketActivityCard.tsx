import { GameIcon } from './GameIcons';
import type { MarketActivityItem } from '@/content/site-content';
import type { CSSProperties } from 'react';

export type { MarketActivityItem } from '@/content/site-content';

interface MarketActivityCardProps {
  item: MarketActivityItem;
  isSold?: boolean;
}

const activityRowStyle: CSSProperties = {
  width: '100%',
  minHeight: '61px',
  padding: '12px 16px',
  gap: '12px',
  boxSizing: 'border-box',
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.1)',
};

const activityLeftStyle: CSSProperties = { flex: 1, minWidth: 0, gap: '12px', overflow: 'hidden' };
const activityTextStyle: CSSProperties = { flex: 1, minWidth: 0, gap: '4px', overflow: 'hidden' };
const activityNameStyle: CSSProperties = { margin: 0, color: '#fff', fontSize: '14px', fontWeight: 600, lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
const activitySubStyle: CSSProperties = { margin: 0, color: '#cfc2d6', fontSize: '12px', fontWeight: 400, lineHeight: 1, letterSpacing: '.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
const soldLabelStyle: CSSProperties = { marginRight: '4px', color: '#22c55e', fontSize: '12px', fontWeight: 600, lineHeight: 1, letterSpacing: '.5px' };
const priceStyle: CSSProperties = { flexShrink: 0, marginLeft: '8px', color: '#fff', fontSize: '14px', fontWeight: 700, lineHeight: 1, whiteSpace: 'nowrap' };

export default function MarketActivityCard({ item, isSold = false }: MarketActivityCardProps) {
  return (
    <div className="d-flex align-items-center justify-content-between" style={activityRowStyle}>
      <div className="d-flex align-items-center" style={activityLeftStyle}>
        <GameIcon iconClass={item.iconClass} />
        <div className="d-flex flex-column" style={activityTextStyle}>
          <h6 style={activityNameStyle}>{item.name}</h6>
          <span style={activitySubStyle}>
            {isSold ? <><span style={soldLabelStyle}>{item.status ?? 'Sold'}</span><span>{item.time}</span></> : item.sub ?? item.time}
          </span>
        </div>
      </div>
      <span style={priceStyle}>{item.price}</span>
    </div>
  );
}
