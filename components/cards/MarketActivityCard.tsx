export interface MarketActivityItem {
  id: number;
  name: string;
  sub?: string;
  price: string;
  time: string;
  status?: string;
  icon: string;
  iconClass: string;
}

export interface MarketActivityCardProps {
  item: MarketActivityItem;
  isSold?: boolean;
}

export default function MarketActivityCard({ item, isSold = false }: MarketActivityCardProps) {
  return (
    <div className="market-item">
      <div className="market-item-left">
        <div className={`market-item-icon ${item.iconClass}`}>{item.icon}</div>
        <div>
          <div className="market-item-name">{item.name}</div>
          {isSold ? (
            <div className="market-item-sold">{item.status} • {item.time}</div>
          ) : (
            <div className="market-item-time">{item.sub || item.time}</div>
          )}
        </div>
      </div>
      <div className="market-item-price">{item.price}</div>
    </div>
  );
}
