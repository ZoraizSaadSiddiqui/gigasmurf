'use client';
import { useState, useEffect } from 'react';

export default function FlashDealCard() {
  const [time, setTime] = useState({ h: 1, m: 42, s: 10 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let s = prev.s - 1;
        let m = prev.m;
        let h = prev.h;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  return (
    <div className="flash-deal-card">
      <div className="flash-deal-header">
        <div className="card-title mb-0">Flash Deal</div>
        <span className="flash-badge">40%</span>
      </div>
      <div className="flash-deal-img">🎮</div>
      <div className="flash-deal-text">
        Unlock Mythic Valorant Skins for <span>40% OFF</span>. Limited slots left.
      </div>
      <div className="countdown">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      </div>
      <button className="btn-grab">
        Grab Deal
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  );
}
