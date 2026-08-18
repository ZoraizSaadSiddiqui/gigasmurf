export interface GameData {
  id: number;
  name: string;
  emoji: string;
  bg: string;
  wide?: boolean;
}

export interface GameCardProps {
  game: GameData;
  isLarge?: boolean;
}

export default function GameCard({ game, isLarge = false }: GameCardProps) {
  return (
    <div className="game-card-large" style={{ height: '220px' }}>
      <div className="game-img-placeholder" style={{ background: game.bg, height: '100%' }}>
        <span style={{ fontSize: isLarge ? '80px' : '60px' }}>{game.emoji}</span>
      </div>
      <div className="game-overlay">
        <div className="game-title" style={{ fontSize: isLarge ? undefined : '15px' }}>{game.name}</div>
      </div>
      {isLarge && <div className="game-arrow-btn">↗</div>}
    </div>
  );
}
