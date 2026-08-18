import GameCard from './cards/GameCard';

const popularGames = [
  { id: 1, name: 'Overwatch 2', emoji: '🎯', bg: 'linear-gradient(135deg, #001855, #0050b3)', wide: true },
  { id: 2, name: 'League of Legends', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a0a00, #8B4513)' },
  { id: 3, name: 'Valorant', emoji: '🔫', bg: 'linear-gradient(135deg, #2a0000, #cc0033)' },
];

export default function PopularGamingAccounts() {
  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-title">
            Popular Gaming <span>Accounts</span>
          </div>
          <div className="carousel-nav">
            <button className="carousel-btn">‹</button>
            <button className="carousel-btn active-btn">›</button>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-6">
            <GameCard game={popularGames[0]} isLarge={true} />
          </div>
          <div className="col-lg-3 col-md-6">
            <GameCard game={popularGames[1]} isLarge={false} />
          </div>
          <div className="col-lg-3 col-md-6">
            <GameCard game={popularGames[2]} isLarge={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
