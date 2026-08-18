import AccountCard from './cards/AccountCard';

const featuredAccounts = [
  { id: 1, name: 'Valorant Account', desc: 'Full Access EU Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🔫', bg: 'linear-gradient(135deg, #1a0030, #8B0000)' },
  { id: 2, name: 'Brawl Stars 50K+ Trophies', desc: 'All Brawlers Unlocked | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⭐', bg: 'linear-gradient(135deg, #001a3a, #0066cc)' },
  { id: 3, name: 'Fortnite OG Account', desc: 'Renegade Raider + 150 Skins | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🎮', bg: 'linear-gradient(135deg, #003a1a, #006633)' },
  { id: 4, name: 'League of Challenger', desc: 'Level 500+ God Tier Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a1a00, #666600)' },
];

export default function FeaturedAccounts() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-title">
            Daily Featured <span>Accounts</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="see-all-link">See All (102) →</span>
            <div className="carousel-nav">
              <button className="carousel-btn">‹</button>
              <button className="carousel-btn active-btn">3</button>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {featuredAccounts.map(acc => (
            <div key={acc.id} className="col-lg-3 col-md-6">
              <AccountCard acc={acc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
