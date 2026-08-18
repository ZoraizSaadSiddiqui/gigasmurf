import MarketActivityCard, { MarketActivityItem } from './cards/MarketActivityCard';
import FlashDealCard from './cards/FlashDealCard';

const liveActivity: MarketActivityItem[] = [
  { id: 1, name: 'Fortnite V-Bucks', sub: 'Add Now', price: '$25.00', time: 'Just now', icon: '🎮', iconClass: 'item-icon-fortnite' },
  { id: 2, name: 'Valorant Radiant Account', sub: '', price: '$450.00', time: '2 mins ago', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 3, name: 'LoL Diamond IV Boost', sub: '', price: '$89.00', time: '5 mins ago', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 4, name: '10,000 Brawl Gems', sub: '', price: '$120.00', time: '12 mins ago', icon: '💎', iconClass: 'item-icon-brawl' },
];

const recentlySold: MarketActivityItem[] = [
  { id: 1, name: '10,000 Brawl Gems', price: '$120.00', time: '1 min ago', status: 'Sold', icon: '💎', iconClass: 'item-icon-brawl' },
  { id: 2, name: 'LoL Diamond IV Boost', price: '$89.00', time: '3 mins ago', status: 'Sold', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 3, name: 'Valorant Radiant Account', price: '$450.00', time: '4 mins ago', status: 'Sold', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 4, name: 'Fortnite V-Bucks', price: '$25.00', time: '5 mins ago', status: 'Sold', icon: '🎮', iconClass: 'item-icon-fortnite' },
];

export default function LiveMarketplace() {
  return (
    <section className="marketplace-section">
      <div className="container">
        <h2 className="section-title">Live Marketplace <span>Activity</span></h2>
        <div className="row g-4">
          {/* Live Market Activity */}
          <div className="col-lg-4">
            <div className="market-card">
              <div className="card-title">
                <span className="live-dot" /> Live Market Activity
              </div>
              {liveActivity.map(item => (
                <MarketActivityCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Recently Sold */}
          <div className="col-lg-4">
            <div className="market-card">
              <div className="card-title">Recently Sold</div>
              {recentlySold.map(item => (
                <MarketActivityCard key={item.id} item={item} isSold={true} />
              ))}
            </div>
          </div>

          {/* Flash Deal */}
          <div className="col-lg-4">
            <FlashDealCard />
          </div>
        </div>
      </div>
    </section>
  );
}
