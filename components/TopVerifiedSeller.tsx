import SellerCard, { SellerData } from './cards/SellerCard';

const sellers: SellerData[] = [
  { id: 1, name: 'BoostKing', emoji: '👾', bg: '#1A0B2E', featured: false },
  { id: 2, name: 'MythicSeller', emoji: '🎮', bg: '#260B4A', featured: true, success: '99.8%', orders: '4k+', rating: '4.9', badge: 'Top-Rated' },
  { id: 3, name: 'LegendStore', emoji: '⚡', bg: '#1A0B2E', featured: false },
];

export default function TopVerifiedSeller() {
  return (
    <section className="py-5" style={{ backgroundColor: '#0D0420' }}>
      <div className="container text-center">
        <h2 className="font-heading text-white fw-bold fs-2 mb-2">
          Top Verified <span className="text-purple">Seller</span>
        </h2>
        <p className="text-white-50 small mb-5">
          Buy with confidence from our highest-rated community members.
        </p>

        <div className="d-flex align-items-center justify-content-center gap-3 overflow-hidden">
          <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 36, height: 36 }}>‹</button>

          {sellers.map(s => (
            <SellerCard key={s.id} seller={s} />
          ))}

          <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 36, height: 36 }}>›</button>
        </div>
      </div>
    </section>
  );
}
