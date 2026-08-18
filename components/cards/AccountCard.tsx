export interface AccountData {
  id: number;
  name: string;
  desc: string;
  seller: string;
  rating: string;
  price: string;
  emoji: string;
  bg: string;
}

export interface AccountCardProps {
  acc: AccountData;
}

export default function AccountCard({ acc }: AccountCardProps) {
  return (
    <div className="card card-dark overflow-hidden h-100 cursor-pointer">
      <div className="position-relative">
        <div
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ height: '160px', background: acc.bg, fontSize: '50px' }}
        >
          {acc.emoji}
        </div>
        <span className="position-absolute top-0 start-0 m-2 badge bg-black bg-opacity-50 text-white-50 rounded-pill px-2 py-1 border border-secondary border-opacity-25" style={{ fontSize: '10px' }}>
          Promoted
        </span>
        <span className="position-absolute top-0 end-0 m-2 rounded-circle bg-black bg-opacity-50 text-white d-flex align-items-center justify-content-center cursor-pointer" style={{ width: 28, height: 28, fontSize: 13 }}>
          🤍
        </span>
      </div>
      <div className="card-body p-3">
        <h6 className="font-heading text-white fw-bold mb-1">{acc.name}</h6>
        <p className="text-white-50 small mb-3">{acc.desc}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1 small text-white-50">
            <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: 20, height: 20, background: '#A023EC', fontSize: 10 }}>A</div>
            {acc.seller}
            <span className="badge-live ms-1" style={{ width: 6, height: 6 }} />
          </div>
          <div className="small text-white-50 d-flex align-items-center gap-1">
            <span className="text-warning">★</span> {acc.rating}
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between p-3">
        <div>
          <div className="text-white-50" style={{ fontSize: '11px' }}>Price</div>
          <div className="font-heading text-white fw-bold fs-6">{acc.price}</div>
        </div>
        <button className="btn btn-purple rounded-pill px-3 py-1 d-flex align-items-center gap-1 small fw-semibold">
          Buy
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
