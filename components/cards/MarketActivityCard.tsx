import { GameIcon } from './GameIcons';

export interface MarketActivityItem {
  id: number;
  name: string;
  sub?: string;
  price: string;
  time: string;
  status?: string;
  icon?: string;
  iconClass?: string;
}

interface MarketActivityCardProps {
  item: MarketActivityItem;
  isSold?: boolean;
}

export default function MarketActivityCard({ item, isSold = false }: MarketActivityCardProps) {
  return (
    <div className="market-activity-item d-flex align-items-center justify-content-between">
      <div className="market-activity-item__left d-flex align-items-center">
        <GameIcon iconClass={item.iconClass} />
        <div className="market-activity-item__text">
          <h6 className="market-activity-item__name">{item.name}</h6>
          <span className="market-activity-item__sub">
            {isSold ? <><span className="market-activity-item__sold-label">{item.status ?? 'Sold'}</span><span>{item.time}</span></> : item.sub ?? item.time}
          </span>
        </div>
      </div>
      <span className="market-activity-item__price">{item.price}</span>
    </div>
  );
}
