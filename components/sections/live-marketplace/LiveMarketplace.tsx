import { siteContent } from '@/content/site-content';
import FlashDealCard from '@/components/cards/FlashDealCard';
import MarketActivityCard from '@/components/cards/MarketActivityCard';

export default function LiveMarketplace() {
  const { marketplace } = siteContent;
  return (
    <section className="live-activity-section d-flex flex-column align-items-center">
      <h2 className="marketplace-title">{marketplace.title} <span className="marketplace-title__accent">{marketplace.accentTitle}</span></h2>
      <div className="live-activity-cards-row d-flex align-items-stretch gap-4">
        <div className="live-market-card"><div className="market-widget-card d-flex flex-column h-100"><div className="market-widget-card__header d-flex align-items-center"><span className="badge-live" /><h5 className="market-widget-card__title">{marketplace.liveTitle}</h5></div>{marketplace.liveActivity.map((item) => <MarketActivityCard key={item.id} item={item} />)}</div></div>
        <div className="live-market-card"><div className="market-widget-card d-flex flex-column h-100"><div className="market-widget-card__header d-flex align-items-center"><h5 className="market-widget-card__title">{marketplace.soldTitle}</h5></div>{marketplace.recentlySold.map((item) => <MarketActivityCard key={item.id} item={item} isSold />)}</div></div>
        <div className="live-market-card live-market-card--flash"><FlashDealCard /></div>
      </div>
    </section>
  );
}
