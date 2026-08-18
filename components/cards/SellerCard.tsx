export interface SellerData {
  id: number;
  name: string;
  emoji: string;
  bg: string;
  featured?: boolean;
  success?: string;
  orders?: string;
  rating?: string;
  badge?: string;
}

export interface SellerCardProps {
  seller: SellerData;
}

export default function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className={`card card-dark p-3 text-center ${seller.featured ? 'seller-card-featured' : ''}`} style={{ minWidth: '180px' }}>
      <div
        className="w-100 rounded-3 d-flex align-items-center justify-content-center mb-3"
        style={{ background: seller.bg, height: '120px', fontSize: '48px' }}
      >
        {seller.emoji}
      </div>
      <div className="font-heading text-white fw-bold fs-6 mb-1 d-flex align-items-center justify-content-center gap-1">
        {seller.name} <span className="badge-live" style={{ width: 6, height: 6 }} />
      </div>
      {seller.featured && (
        <>
          <div className="d-flex justify-content-between mt-3 gap-1">
            <div>
              <div className="text-white-50" style={{ fontSize: '10px' }}>Success</div>
              <div className="font-heading text-white fw-bold small">{seller.success}</div>
            </div>
            <div>
              <div className="text-white-50" style={{ fontSize: '10px' }}>Orders</div>
              <div className="font-heading text-white fw-bold small">{seller.orders}</div>
            </div>
            <div>
              <div className="text-white-50" style={{ fontSize: '10px' }}>Rating</div>
              <div className="font-heading text-white fw-bold small">★ {seller.rating}</div>
            </div>
          </div>
          <div className="mt-2">
            <span className="badge bg-purple rounded-pill px-2 py-1" style={{ fontSize: '9px' }}>⭐ {seller.badge}</span>
          </div>
        </>
      )}
    </div>
  );
}
