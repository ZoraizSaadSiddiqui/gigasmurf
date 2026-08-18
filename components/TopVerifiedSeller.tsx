import SellerCard, { SellerData } from './cards/SellerCard';

const sellers: SellerData[] = [
  { id: 1, name: 'BoostKing', emoji: '👾', bg: '#1A0B2E', featured: false },
  { id: 2, name: 'MythicSeller', emoji: '🎮', bg: '#260B4A', featured: true, success: '99.8%', orders: '4k+', rating: '4.9', badge: 'Top-Rated' },
  { id: 3, name: 'LegendStore', emoji: '⚡', bg: '#1A0B2E', featured: false },
];

export default function TopVerifiedSeller() {
  return (
    <section className="seller-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '8px' }}>Top Verified <span>Seller</span></h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'Poppins, sans-serif', marginBottom: '40px' }}>
          Buy with confidence from our highest-rated community members.
        </p>

        <div className="seller-carousel">
          <button className="carousel-nav-btn">‹</button>

          {sellers.map(s => (
            <SellerCard key={s.id} seller={s} />
          ))}

          <button className="carousel-nav-btn">›</button>
        </div>
      </div>
    </section>
  );
}
