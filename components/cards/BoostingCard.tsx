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
    <div className="card card-dark overflow-hidden h-100 cursor-pointer mb-3">
      <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: '110px', background: svc.bg, fontSize: '40px' }}>
        {svc.emoji}
      </div>
      <div className="card-body p-3">
        <h6 className="font-heading text-white fw-bold small mb-2">{svc.name}</h6>
        <div className="d-flex justify-content-between mb-2">
          <div>
            <div className="text-white-50" style={{ fontSize: '10px' }}>Max Level</div>
            <div className="text-white fw-semibold small">{svc.maxLevel}</div>
          </div>
          <div>
            <div className="text-white-50" style={{ fontSize: '10px' }}>Starting price</div>
            <div className="text-white fw-semibold small">{svc.startingPrice}</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1 text-white-50" style={{ fontSize: '11px' }}>
            <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: 18, height: 18, background: '#A023EC', fontSize: 9 }}>A</div>
            AceTrader
            <span className="badge-live ms-1" style={{ width: 6, height: 6 }} />
          </div>
          <div className="text-white-50 d-flex align-items-center gap-1" style={{ fontSize: '11px' }}>
            <span className="text-warning">★</span> 4.9
          </div>
        </div>
      </div>
    </div>
  );
}
