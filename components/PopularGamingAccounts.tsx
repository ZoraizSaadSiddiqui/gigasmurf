import { siteContent } from '@/content/site-content';
import GameCard from './cards/GameCard';

export default function PopularGamingAccounts() {
  return (
    <section className="popular-gaming-section">
      <div className="popular-gaming-section__inner">
        <div className="popular-gaming-section__header">
          <h3>Popular Gaming <span>Accounts</span></h3>
          <div className="popular-gaming-section__controls">
            <button aria-label="Previous popular game">‹</button>
            <button className="is-active" aria-label="Next popular game">›</button>
          </div>
        </div>

        <div className="popular-gaming-section__cards">
          {siteContent.popularGamingAccounts.map((game) => (
            <GameCard key={game.id} game={game} isLarge={'featured' in game && game.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
