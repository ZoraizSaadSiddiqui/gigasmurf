import Image from 'next/image';
import type { AccountData } from '@/content/site-content';

export type { AccountData } from '@/content/site-content';
export interface AccountCardProps { acc: AccountData; }

export default function AccountCard({ acc }: AccountCardProps) {
  return (
    <article className={`account-card card h-100 overflow-hidden ${acc.id === 1 ? 'account-card--glowing' : ''}`}>
      <div className="account-card__art position-relative">
        <Image src={acc.image} alt={acc.name} fill sizes="(max-width: 767px) 100vw, 320px" priority={acc.id === 1} />
        <span className="account-card__promoted badge rounded-pill">Promoted</span>
        <button aria-label={`Save ${acc.name}`} className="account-card__favorite btn rounded-circle d-flex align-items-center justify-content-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" /></svg></button>
      </div>
      <div className="account-card__body card-body">
        <h4 className="account-card__name">{acc.name}</h4>
        <p className="account-card__description">
          {acc.desc}
          <span className="account-card__views">
            <svg className="account-card__eye" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1.5 8s2.35-4 6.5-4 6.5 4 6.5 4-2.35 4-6.5 4S1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="8" r="1.85" stroke="currentColor" strokeWidth="1.35" />
            </svg>
            340
          </span>
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="account-card__seller d-flex align-items-center gap-2">
            <span className="account-card__avatar"><Image src="/boy.jpg" alt="AceTrader" fill sizes="24px" /></span>
            <span>{acc.seller}</span>
            <svg className="account-card__verified" viewBox="0 0 12 12" aria-label="Verified seller"><path fill="currentColor" d="M6 0l1.3 1.2 1.8-.1.7 1.6 1.5 1-.5 1.7.5 1.7-1.5 1-.7 1.6-1.8-.1L6 12 4.7 10.8l-1.8.1-.7-1.6-1.5-1 .5-1.7-.5-1.7 1.5-1 .7-1.6 1.8.1L6 0z" /><path d="M3.55 6.12l1.53 1.52 3.36-3.35" fill="none" stroke="#11072d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span className="account-card__rating"><span>&#9733;</span> {acc.rating}</span>
        </div>
        <footer className="account-card__footer d-flex align-items-center justify-content-between"><div><span>Price</span><strong>{acc.price}</strong></div><button className="account-card__buy btn btn-purple rounded-pill d-flex align-items-center gap-2">Buy <svg aria-hidden="true" viewBox="0 0 12 24" fill="none"><path d="m3 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button></footer>
      </div>
    </article>
  );
}
