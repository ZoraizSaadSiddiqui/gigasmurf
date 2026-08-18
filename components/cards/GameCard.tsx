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
    <div className="card border-0 rounded-4 overflow-hidden position-relative cursor-pointer" style={{ height: '220px' }}>
      <div
        className="w-100 h-100 d-flex align-items-center justify-content-center"
        style={{ background: game.bg }}
      >
        <span style={{ fontSize: isLarge ? '80px' : '60px' }}>{game.emoji}</span>
      </div>
      <div className="position-absolute inset-0 w-100 h-100 d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
        <h5 className="font-heading text-white fw-bold mb-0" style={{ fontSize: isLarge ? '20px' : '15px' }}>{game.name}</h5>
      </div>
      {isLarge && (
        <div className="position-absolute bottom-0 end-0 m-3 rounded-circle bg-purple text-white d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, fontSize: 14 }}>
          ↗
        </div>
      )}
    </div>
  );
}
