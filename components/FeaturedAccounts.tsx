import AccountCard, { AccountData } from './cards/AccountCard';

const featuredAccounts: AccountData[] = [
  { id: 1, name: 'Valorant Account', desc: 'Full Access EU Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🔫', bg: 'linear-gradient(135deg, #1a0030, #8B0000)' },
  { id: 2, name: 'Brawl Stars 50K+ Trophies', desc: 'All Brawlers Unlocked | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⭐', bg: 'linear-gradient(135deg, #001a3a, #0066cc)' },
  { id: 3, name: 'Fortnite OG Account', desc: 'Renegade Raider + 150 Skins | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🎮', bg: 'linear-gradient(135deg, #003a1a, #006633)' },
  { id: 4, name: 'League of Challenger', desc: 'Level 500+ God Tier Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a1a00, #666600)' },
];

export default function FeaturedAccounts() {
  return (
    <section className="py-5 bg-deep-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="font-heading text-white fw-bold fs-3 mb-0">
            Daily Featured <span className="text-purple">Accounts</span>
          </h3>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small cursor-pointer hover-purple">See All (102) →</span>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: 12 }}>‹</button>
              <button className="btn btn-purple rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: 12 }}>3</button>
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
