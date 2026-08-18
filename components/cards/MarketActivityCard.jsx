export default function MarketActivityCard({ item, isSold = false }) {
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
