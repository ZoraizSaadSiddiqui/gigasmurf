'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TimeState {
  h: number;
  m: number;
  s: number;
}

export default function FlashDealCard() {
  const [time, setTime] = useState<TimeState>({
    h: 1,
    m: 42,
    s: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
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

        if (h < 0) {
          return { h: 0, m: 0, s: 0 };
        }

        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (value: number) => String(value).padStart(2, '0');

  return (
    <div className="market-widget-card card h-100">

      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="font-heading text-white fw-bold mb-0">
          Flash Deal
        </h5>

    <span className="badge rounded-pill flash-deal-badge">
  40%
</span>
      </div>

      {/* Image */}
      <div className="flash-deal-card__image ">
        <Image
          src="/boy.jpg"
          alt="Flash deal gaming offer"
          width={106}
          height={100}
          className="flash-deal-image"
        />
      

      {/* Description */}
      <p className="text-white-50 small mb-3">
        Unlock Mythic Valorant Skins for{' '}
        <span className="text-purple fw-semibold">
          40% OFF
        </span>
        . Limited slots left.
      </p>
      </div>

    {/* Timer */}
<div className="flash-deal-timer mb-3">
  <svg
    className="flash-deal-timer-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(133, 41, 255, 1)"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>

  <span className="flash-deal-timer-text">
    {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
  </span>
</div>

      {/* Button */}
      <button className="btn btn-purple rounded-pill w-100 py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold">
        Grab Deal

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </div>
  );
}
