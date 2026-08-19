import Image from 'next/image';

export interface GameData {
  id: number;
  name: string;
  image: string;
  featured?: boolean;
}

interface GameCardProps {
  game: GameData;
  isLarge?: boolean;
}

export default function GameCard({ game, isLarge = false }: GameCardProps) {
  return (
    <article className={`popular-game-card ${isLarge ? 'popular-game-card--featured' : ''}`}>
      <Image
        src={game.image}
        alt={`${game.name} gaming account`}
        fill
        sizes={isLarge ? '(max-width: 767px) 100vw, 632px' : '(max-width: 767px) 50vw, 274px'}
        priority={isLarge}
      />
      <div className="popular-game-card__shade" />
      <h4>{game.name}</h4>
      {isLarge && <span className="popular-game-card__open" aria-hidden="true">↗</span>}
      {!isLarge && <span className="popular-game-card__side-action" aria-hidden="true">↗</span>}
    </article>
  );
}
