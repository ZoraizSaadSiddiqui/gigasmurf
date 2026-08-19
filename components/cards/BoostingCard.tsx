import Image from 'next/image';

export interface BoostingServiceData {
  id: number;
  name: string;
  maxLevel: string;
  startingPrice: string;
  image: string;
}

export interface BoostingCardProps {
  svc: BoostingServiceData;
}

export default function BoostingCard({ svc }: BoostingCardProps) {
  return (
    <article className="boosting-card card h-100">
      <div className="boosting-card__image position-relative">
        <Image src={svc.image} alt={svc.name} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 252px" />
      </div>
      <div className="boosting-card__body card-body d-flex flex-column">
        <h3 className="boosting-card__title">{svc.name}</h3>
        <div className="boosting-card__details">
          <div className="d-flex justify-content-between"><span>Max Level</span><strong>{svc.maxLevel}</strong></div>
          <div className="d-flex justify-content-between"><span>Starting price</span><strong>{svc.startingPrice}</strong></div>
        </div>
        <div className="boosting-card__seller d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="boosting-card__seller-avatar position-relative"><Image src="/boy.jpg" alt="AceTrader" fill sizes="24px" /></span>
            <span>AceTrader</span>
            <svg className="boosting-card__verified" viewBox="0 0 12 12" aria-label="Verified seller"><path fill="currentColor" d="M6 0l1.3 1.2 1.8-.1.7 1.6 1.5 1-.5 1.7.5 1.7-1.5 1-.7 1.6-1.8-.1L6 12 4.7 10.8l-1.8.1-.7-1.6-1.5-1 .5-1.7-.5-1.7 1.5-1 .7-1.6 1.8.1L6 0z" /><path d="M3.55 6.12l1.53 1.52 3.36-3.35" fill="none" stroke="#11072d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span className="boosting-card__rating"><span>&#9733;</span> 4.9</span>
        </div>
      </div>
    </article>
  );
}
