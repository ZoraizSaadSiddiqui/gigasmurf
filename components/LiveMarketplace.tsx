import MarketActivityCard, { MarketActivityItem } from './cards/MarketActivityCard';
import FlashDealCard from './cards/FlashDealCard';

const liveActivity: MarketActivityItem[] = [
  { id: 1, name: 'Fortnite V-Bucks', sub: 'Just now', price: '$25.00', time: 'Just now', icon: '🎮', iconClass: 'item-icon-fortnite' },
  { id: 2, name: 'Valorant Radiant Account', sub: '2 mins ago', price: '$450.00', time: '2 mins ago', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 3, name: 'LoL Diamond IV Boost', sub: '5 mins ago', price: '$89.00', time: '5 mins ago', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 4, name: '10,000 Brawl Gems', sub: '12 mins ago', price: '$120.00', time: '12 mins ago', icon: '💎', iconClass: 'item-icon-brawl' },
];

const recentlySold: MarketActivityItem[] = [
  { id: 1, name: '10,000 Brawl Gems', price: '$120.00', time: '2 mins ago', status: 'Sold', icon: '💎', iconClass: 'item-icon-brawl' },
  { id: 2, name: 'LoL Diamond IV Boost', price: '$89.00', time: '3 mins ago', status: 'Sold', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 3, name: 'Valorant Radiant Account', price: '$450.00', time: '4 mins ago', status: 'Sold', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 4, name: 'Fortnite V-Bucks', price: '$25.00', time: '5 mins ago', status: 'Sold', icon: '🎮', iconClass: 'item-icon-fortnite' },
];

export default function LiveMarketplace() {
  return (
    <section className="live-activity-section d-flex flex-column align-items-center">
      <h2 className="marketplace-title">Live Marketplace <span className="marketplace-title__accent">Activity</span></h2>

      <div className="live-activity-cards-row d-flex align-items-stretch gap-4">
        <div className="live-market-card">
          <div className="market-widget-card d-flex flex-column h-100">
            <div className="market-widget-card__header d-flex align-items-center">
              <span className="badge-live" />
              <h5 className="market-widget-card__title">Live Market Activity</h5>
            </div>
            {liveActivity.map(item => <MarketActivityCard key={item.id} item={item} />)}
          </div>
        </div>

        <div className="live-market-card">
          <div className="market-widget-card d-flex flex-column h-100">
            <div className="market-widget-card__header d-flex align-items-center">
              <h5 className="market-widget-card__title">Recently Sold</h5>
            </div>
            {recentlySold.map(item => <MarketActivityCard key={item.id} item={item} isSold />)}
          </div>
        </div>

        <div className="live-market-card live-market-card--flash">
          <FlashDealCard />
        </div>
      </div>
    </section>
  );
}
