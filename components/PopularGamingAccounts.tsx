import Image from 'next/image';
import { siteContent } from '@/content/site-content';

type PopularGame = (typeof siteContent.popularGamingAccounts)[number];

function PopularGameCard({ game }: { game: PopularGame }) {
  const isFeatured = 'featured' in game && game.featured;

  return (
    <article className={`popular-game-card ${isFeatured ? 'popular-game-card--featured' : ''}`}>
      <Image
        src={game.image}
        alt={`${game.name} gaming account`}
        fill
        priority={isFeatured}
        sizes={isFeatured ? '(max-width: 767px) 100vw, 632px' : '(max-width: 767px) 50vw, 274px'}
      />
      <div className="popular-game-card__shade" />
      <h4>{game.name}</h4>
      <span className={isFeatured ? 'popular-game-card__open' : 'popular-game-card__side-action'} aria-hidden="true">&#8599;</span>
    </article>
  );
}

export default function PopularGamingAccounts() {
  return (
    <section className="popular-gaming-section">
      <div className="popular-gaming-section__inner">
        <div className="popular-gaming-section__header">
          <h3>Popular Gaming <span>Accounts</span></h3>
          <div className="popular-gaming-section__controls">
            <button type="button" aria-label="Previous popular game">&lsaquo;</button>
            <button type="button" className="is-active" aria-label="Next popular game">&rsaquo;</button>
          </div>
        </div>

        <div className="popular-gaming-section__cards">
          {siteContent.popularGamingAccounts.map((game) => <PopularGameCard key={game.id} game={game} />)}
        </div>
      </div>
    </section>
  );
}
