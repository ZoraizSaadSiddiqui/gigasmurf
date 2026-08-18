'use client';
import { useState } from 'react';

type TabType = 'accounts' | 'boosting';

interface CategoryPill {
  label: string;
  icon: string;
}

const CATEGORIES: CategoryPill[] = [
  { label: 'Currency', icon: '💰' },
  { label: 'Items', icon: '👕' },
  { label: 'Coaching', icon: '🏆' },
  { label: 'Gift Cards', icon: '🎁' },
  { label: 'Top Ups', icon: '💎' },
];

const POPULAR_TAGS: string[] = ['Valorant', 'Brawl Stars', 'Clash Royale', 'Roblox', 'Fortnite', 'CS2'];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabType>('accounts');

  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />
      {/* Decorative stars */}
      <span className="deco-star" style={{ top: '20%', left: '5%' }}>✦</span>
      <span className="deco-star" style={{ top: '60%', right: '8%', fontSize: '12px' }}>✦</span>
      <span className="deco-star" style={{ top: '40%', left: '15%', fontSize: '8px' }}>✦</span>

      <div className="container hero-content">
        {/* Search */}
        <div className="search-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search for games, accounts, boosting services..." />
        </div>

        {/* Popular tags */}
        <div className="popular-tags">
          <span className="tag-label">Popular:</span>
          {POPULAR_TAGS.map(t => (
            <a key={t} className="tag">{t}</a>
          ))}
        </div>

        {/* Toggle */}
        <div className="hero-toggle">
          <button
            className={`toggle-btn ${activeTab === 'accounts' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('accounts')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Accounts
          </button>
          <button
            className={`toggle-btn ${activeTab === 'boosting' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('boosting')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            Boosting
          </button>
        </div>

        {/* Category pills */}
        <div className="category-pills">
          {CATEGORIES.map(c => (
            <div key={c.label} className="cat-pill">
              <span className="cat-icon">{c.icon}</span>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
