import GameCard, { GameData } from './cards/GameCard';

const popularGames: GameData[] = [
  { id: 1, name: 'Overwatch 2', emoji: '🎯', bg: 'linear-gradient(135deg, #001855, #0050b3)', wide: true },
  { id: 2, name: 'League of Legends', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a0a00, #8B4513)' },
  { id: 3, name: 'Valorant', emoji: '🔫', bg: 'linear-gradient(135deg, #2a0000, #cc0033)' },
];

export default function PopularGamingAccounts() {
  return (
    <section className="py-5 bg-deep-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="font-heading text-white fw-bold fs-3 mb-0">
            Popular Gaming <span className="text-purple">Accounts</span>
          </h3>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: 12 }}>‹</button>
            <button className="btn btn-purple rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: 12 }}>›</button>
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
