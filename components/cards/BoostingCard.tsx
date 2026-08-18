export interface BoostingServiceData {
  id: number;
  name: string;
  maxLevel: string;
  startingPrice: string;
  emoji: string;
  bg: string;
}

export interface BoostingCardProps {
  svc: BoostingServiceData;
}

export default function BoostingCard({ svc }: BoostingCardProps) {
  return (
    <div className="boosting-card">
      <div className="boosting-card-img-placeholder" style={{ background: svc.bg }}>
        <span style={{ fontSize: '40px' }}>{svc.emoji}</span>
      </div>
      <div className="boosting-card-body">
        <div className="boosting-card-name">{svc.name}</div>
        <div className="boosting-meta">
          <div>
            <div className="boosting-meta-item">Max Level</div>
            <div className="boosting-meta-val">{svc.maxLevel}</div>
          </div>
          <div>
            <div className="boosting-meta-item">Starting price</div>
            <div className="boosting-meta-val">{svc.startingPrice}</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="seller-info">
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#A023EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>A</div>
            AceTrader
            <span className="verified-dot" />
          </div>
          <div className="star-rating">
            <span className="star">★</span> 4.9
          </div>
        </div>
      </div>
    </div>
  );
}
