import Head from 'next/head';
import { useState, useEffect } from 'react';

// ========== DATA ==========
const liveActivity = [
  { id: 1, name: 'Fortnite V-Bucks', sub: 'Add Now', price: '$25.00', time: 'Just now', icon: '🎮', iconClass: 'item-icon-fortnite' },
  { id: 2, name: 'Valorant Radiant Account', sub: '', price: '$450.00', time: '2 mins ago', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 3, name: 'LoL Diamond IV Boost', sub: '', price: '$89.00', time: '5 mins ago', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 4, name: '10,000 Brawl Gems', sub: '', price: '$120.00', time: '12 mins ago', icon: '💎', iconClass: 'item-icon-brawl' },
];

const recentlySold = [
  { id: 1, name: '10,000 Brawl Gems', price: '$120.00', time: '1 min ago', status: 'Sold', icon: '💎', iconClass: 'item-icon-brawl' },
  { id: 2, name: 'LoL Diamond IV Boost', price: '$89.00', time: '3 mins ago', status: 'Sold', icon: '⚔️', iconClass: 'item-icon-lol' },
  { id: 3, name: 'Valorant Radiant Account', price: '$450.00', time: '4 mins ago', status: 'Sold', icon: '🔫', iconClass: 'item-icon-valorant' },
  { id: 4, name: 'Fortnite V-Bucks', price: '$25.00', time: '5 mins ago', status: 'Sold', icon: '🎮', iconClass: 'item-icon-fortnite' },
];

const featuredAccounts = [
  { id: 1, name: 'Valorant Account', desc: 'Full Access EU Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🔫', bg: 'linear-gradient(135deg, #1a0030, #8B0000)' },
  { id: 2, name: 'Brawl Stars 50K+ Trophies', desc: 'All Brawlers Unlocked | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⭐', bg: 'linear-gradient(135deg, #001a3a, #0066cc)' },
  { id: 3, name: 'Fortnite OG Account', desc: 'Renegade Raider + 150 Skins | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '🎮', bg: 'linear-gradient(135deg, #003a1a, #006633)' },
  { id: 4, name: 'League of Challenger', desc: 'Level 500+ God Tier Account | ⓡ 340', seller: 'AceTrader', rating: '4.9', price: '$1,299', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a1a00, #666600)' },
];

const popularGames = [
  { id: 1, name: 'Overwatch 2', emoji: '🎯', bg: 'linear-gradient(135deg, #001855, #0050b3)', wide: true },
  { id: 2, name: 'League of Legends', emoji: '⚔️', bg: 'linear-gradient(135deg, #1a0a00, #8B4513)' },
  { id: 3, name: 'Valorant', emoji: '🔫', bg: 'linear-gradient(135deg, #2a0000, #cc0033)' },
];

const boostingServices = [
  { id: 1, name: 'Gaming Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🎮', bg: '#1a0030' },
  { id: 2, name: 'Feathershot Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🏹', bg: '#001a33' },
  { id: 3, name: 'Samurai Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '⚔️', bg: '#1a0000' },
  { id: 4, name: 'Grimreaper Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '💀', bg: '#0d0d0d' },
  { id: 5, name: 'Spartans Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🛡️', bg: '#001a1a' },
  { id: 6, name: 'Warriors Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '⚡', bg: '#1a1a00' },
  { id: 7, name: 'Brave Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🦁', bg: '#001a33' },
  { id: 8, name: 'Witch Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', emoji: '🔮', bg: '#1a001a' },
];

const sellers = [
  { id: 1, name: 'BoostKing', emoji: '👾', bg: '#1A0B2E', featured: false },
  { id: 2, name: 'MythicSeller', emoji: '🎮', bg: '#260B4A', featured: true, success: '99.8%', orders: '4k+', rating: '4.9', badge: 'Top-Rated' },
  { id: 3, name: 'LegendStore', emoji: '⚡', bg: '#1A0B2E', featured: false },
];

// ========== COMPONENTS ==========

function Navbar() {
  return (
    <nav className="navbar-gigasmurf">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            Gigas<span>murf</span>
          </div>
          <div className="d-flex align-items-center gap-4">
            <a href="#" className="nav-link-item">Explore</a>
            <a href="#" className="nav-link-item">Top Sellers</a>
            <a href="#" className="nav-link-item">Support</a>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="nav-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <button className="btn-sell">Sell</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [activeTab, setActiveTab] = useState('accounts');
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />
      {/* Decorative stars */}
      <span className="deco-star" style={{top:'20%',left:'5%'}}>✦</span>
      <span className="deco-star" style={{top:'60%',right:'8%',fontSize:'12px'}}>✦</span>
      <span className="deco-star" style={{top:'40%',left:'15%',fontSize:'8px'}}>✦</span>

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
          {['Valorant','Brawl Stars','Clash Royale','Roblox','Fortnite','CS2'].map(t => (
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
          {[
            { label: 'Currency', icon: '💰' },
            { label: 'Items', icon: '👕' },
            { label: 'Coaching', icon: '🏆' },
            { label: 'Gift Cards', icon: '🎁' },
            { label: 'Top Ups', icon: '💎' },
          ].map(c => (
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

function LiveMarketplace() {
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

  const pad = n => String(n).padStart(2,'0');

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
                <div key={item.id} className="market-item">
                  <div className="market-item-left">
                    <div className={`market-item-icon ${item.iconClass}`}>{item.icon}</div>
                    <div>
                      <div className="market-item-name">{item.name}</div>
                      <div className="market-item-time">{item.sub || item.time}</div>
                    </div>
                  </div>
                  <div className="market-item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Sold */}
          <div className="col-lg-4">
            <div className="market-card">
              <div className="card-title">Recently Sold</div>
              {recentlySold.map(item => (
                <div key={item.id} className="market-item">
                  <div className="market-item-left">
                    <div className={`market-item-icon ${item.iconClass}`}>{item.icon}</div>
                    <div>
                      <div className="market-item-name">{item.name}</div>
                      <div className="market-item-sold">{item.status} • {item.time}</div>
                    </div>
                  </div>
                  <div className="market-item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flash Deal */}
          <div className="col-lg-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedAccounts() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-title">
            Daily Featured <span>Accounts</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="see-all-link">See All (102) →</span>
            <div className="carousel-nav">
              <button className="carousel-btn">‹</button>
              <button className="carousel-btn active-btn">3</button>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {featuredAccounts.map(acc => (
            <div key={acc.id} className="col-lg-3 col-md-6">
              <div className="account-card">
                <div style={{ position: 'relative' }}>
                  <div className="account-card-img-placeholder" style={{ background: acc.bg }}>
                    <span style={{ fontSize: '50px' }}>{acc.emoji}</span>
                  </div>
                  <span className="promoted-badge">Promoted</span>
                  <span className="heart-btn">🤍</span>
                </div>
                <div className="account-card-body">
                  <div className="account-card-name">{acc.name}</div>
                  <div className="account-card-desc">{acc.desc}</div>
                  <div className="account-card-footer">
                    <div className="seller-info">
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#A023EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>A</div>
                      {acc.seller}
                      <span className="verified-dot" />
                    </div>
                    <div className="star-rating">
                      <span className="star">★</span> {acc.rating}
                    </div>
                  </div>
                </div>
                <div className="account-price-row">
                  <div>
                    <div className="price-label">Price</div>
                    <div className="price-value">{acc.price}</div>
                  </div>
                  <button className="btn-buy">
                    Buy
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularGamingAccounts() {
  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-title">
            Popular Gaming <span>Accounts</span>
          </div>
          <div className="carousel-nav">
            <button className="carousel-btn">‹</button>
            <button className="carousel-btn active-btn">›</button>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-6">
            <div className="game-card-large" style={{ height: '220px' }}>
              <div className="game-img-placeholder" style={{ background: popularGames[0].bg, height: '100%' }}>
                <span style={{ fontSize: '80px' }}>{popularGames[0].emoji}</span>
              </div>
              <div className="game-overlay">
                <div className="game-title">{popularGames[0].name}</div>
              </div>
              <div className="game-arrow-btn">↗</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="game-card-large" style={{ height: '220px' }}>
              <div className="game-img-placeholder" style={{ background: popularGames[1].bg, height: '100%' }}>
                <span style={{ fontSize: '60px' }}>{popularGames[1].emoji}</span>
              </div>
              <div className="game-overlay">
                <div className="game-title" style={{ fontSize: '15px' }}>{popularGames[1].name}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="game-card-large" style={{ height: '220px' }}>
              <div className="game-img-placeholder" style={{ background: popularGames[2].bg, height: '100%' }}>
                <span style={{ fontSize: '60px' }}>{popularGames[2].emoji}</span>
              </div>
              <div className="game-overlay">
                <div className="game-title" style={{ fontSize: '15px' }}>{popularGames[2].name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRatedBoosting() {
  return (
    <section className="boosting-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '12px' }}>Top Rated <span>Boosting Services</span></h2>

        <div className="boosting-search-row">
          <div className="boosting-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
          <button className="filter-btn">
            All Games
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>

        <div className="row">
          {boostingServices.map(svc => (
            <div key={svc.id} className="col-lg-3 col-md-6 col-6">
              <div className="boosting-card">
                <div className="boosting-card-img-placeholder" style={{ background: svc.bg }}>
                  <span style={{ fontSize: '40px' }}>{svc.emoji}</span>
                </div>
                <div className="boosting-card-body">
                  <div className="boosting-card-name">{svc.name}</div>
                  <div className="boosting-meta">
                    <div>
                      <div className="boosting-meta-item">Max Level</div>
                      <div className="boosting-meta-val">{svc.maxLevel}</div>
                    </div>
                    <div>
                      <div className="boosting-meta-item">Starting price</div>
                      <div className="boosting-meta-val">{svc.startingPrice}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="seller-info">
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#A023EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>A</div>
                      AceTrader
                      <span className="verified-dot" />
                    </div>
                    <div className="star-rating">
                      <span className="star">★</span> 4.9
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-see-all">
            Sell All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TopVerifiedSeller() {
  return (
    <section className="seller-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '8px' }}>Top Verified <span>Seller</span></h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'Poppins, sans-serif', marginBottom: '40px' }}>
          Buy with confidence from our highest-rated community members.
        </p>

        <div className="seller-carousel">
          <button className="carousel-nav-btn">‹</button>

          {sellers.map(s => (
            <div key={s.id} className={`seller-card ${s.featured ? 'featured' : ''}`}>
              <div className="seller-avatar" style={{ background: s.bg, width: '100%', height: '120px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', marginBottom: '12px' }}>
                {s.emoji}
              </div>
              <div className="seller-name">
                {s.name} <span className="verified-dot" />
              </div>
              {s.featured && (
                <>
                  <div className="seller-stats">
                    <div className="seller-stat">
                      <div className="seller-stat-label">Success</div>
                      <div className="seller-stat-val">{s.success}</div>
                    </div>
                    <div className="seller-stat">
                      <div className="seller-stat-label">Orders</div>
                      <div className="seller-stat-val">{s.orders}</div>
                    </div>
                    <div className="seller-stat">
                      <div className="seller-stat-label">Rating</div>
                      <div className="seller-stat-val">★ {s.rating}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <span className="top-badge">⭐ {s.badge}</span>
                  </div>
                </>
              )}
            </div>
          ))}

          <button className="carousel-nav-btn">›</button>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Ready to Level Up Your Gaming Experience?</h2>
          <p className="cta-desc">
            Join over 2 million gamers worldwide. Buy premium accounts, hire pro boosters, or start earning by selling your own gaming assets today.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">Create Free Account</button>
            <button className="btn-cta-secondary">Become A Seller</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-inner">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="footer-logo">Gigas<span>murf</span></div>
              <p className="footer-desc">The ultimate secure marketplace for gamers to buy, sell, and boost. Built for the community, powered by trust.</p>
              <div className="footer-socials">
                <div className="social-btn">𝕏</div>
                <div className="social-btn">f</div>
                <div className="social-btn">in</div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <div className="footer-col-title">Marketplace</div>
              <ul className="footer-links">
                <li><a href="#">Browse Accounts</a></li>
                <li><a href="#">Rank Boosting</a></li>
                <li><a href="#">Top Sellers</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <div className="footer-col-title">Top Games</div>
              <ul className="footer-links">
                <li><a href="#">Valorant</a></li>
                <li><a href="#">League of Legends</a></li>
                <li><a href="#">Fortnite</a></li>
                <li><a href="#">Overwatch 2</a></li>
                <li><a href="#">CS2</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-col-title">Support & Legal</div>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & use</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            Copyright © 2026 Gigasmurf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========== MAIN PAGE ==========
export default function Home() {
  return (
    <>
      <Head>
        <title>Gigasmurf - Gaming Marketplace</title>
        <meta name="description" content="Buy, sell and boost gaming accounts securely" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <LiveMarketplace />
      <FeaturedAccounts />
      <PopularGamingAccounts />
      <TopRatedBoosting />
      <TopVerifiedSeller />
      <CTASection />
      <Footer />
    </>
  );
}
