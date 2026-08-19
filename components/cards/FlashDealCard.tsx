'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { siteContent } from '@/content/site-content';

interface TimeState {
  h: number;
  m: number;
  s: number;
}

export default function FlashDealCard() {
  const { flashDeal } = siteContent.marketplace;
  const [time, setTime] = useState<TimeState>({
    h: 1,
    m: 42,
    s: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.h === 0 && prev.m === 0 && prev.s === 0) {
          return prev;
        }

        let { h, m, s } = prev;

        s -= 1;

        if (s < 0) {
          s = 59;
          m -= 1;
        }

        if (m < 0) {
          m = 59;
          h -= 1;
        }

        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (value: number) => String(value).padStart(2, '0');

  const remainingTime = `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}`;

  return (
    <article className="market-widget-card card h-100 d-flex flex-column flash-deal-card" aria-labelledby="flash-deal-title">
      <header className="flash-deal-card__header d-flex align-items-center justify-content-between">
        <h5 id="flash-deal-title" className="market-widget-card__title">{flashDeal.title}</h5>
        <span className="badge rounded-pill flash-deal-badge">{flashDeal.discount}</span>
      </header>

      <div className="flash-deal-card__content d-flex flex-column align-items-center">
        <Image
          src={flashDeal.image}
          alt={flashDeal.title}
          width={106}
          height={100}
          className="flash-deal-image"
        />
        <p className="flash-deal-card__description mb-0">
          {flashDeal.description}<span>{flashDeal.emphasis}</span>{flashDeal.suffix}
        </p>
      </div>

      <time className="flash-deal-timer" dateTime={`PT${time.h}H${time.m}M${time.s}S`} aria-label={`${time.h} hours, ${time.m} minutes, and ${time.s} seconds remaining`}>
        <svg className="flash-deal-timer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="flash-deal-timer-text" aria-live="off">{remainingTime}</span>
      </time>

      <button type="button" className="btn btn-purple flash-deal-card__button rounded-pill d-flex align-items-center justify-content-center gap-2">
        {flashDeal.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </article>
  );
}
