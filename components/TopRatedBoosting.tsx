import BoostingCard, { BoostingServiceData } from './cards/BoostingCard';

const boostingServices: BoostingServiceData[] = [
  { id: 1, name: 'Gaming Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🎮', bg: '#1a0030' },
  { id: 2, name: 'Feathershot Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🏹', bg: '#001a33' },
  { id: 3, name: 'Samurai Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '⚔️', bg: '#1a0000' },
  { id: 4, name: 'Grimreaper Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '💀', bg: '#0d0d0d' },
  { id: 5, name: 'Spartans Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🛡️', bg: '#001a1a' },
  { id: 6, name: 'Warriors Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '⚡', bg: '#1a1a00' },
  { id: 7, name: 'Brave Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🦁', bg: '#001a33' },
  { id: 8, name: 'Witch Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🔮', bg: '#1a001a' },
];

export default function TopRatedBoosting() {
  return (
    <section className="boosting-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '12px' }}>Top Rated <span>Boosting Services</span></h2>

        <div className="boosting-search-row">
          <div className="boosting-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
          <button className="filter-btn">
            All Games
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>

        <div className="row g-3">
          {boostingServices.map(svc => (
            <div key={svc.id} className="col-lg-3 col-md-6 col-6">
              <BoostingCard svc={svc} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn-see-all">
            See All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
