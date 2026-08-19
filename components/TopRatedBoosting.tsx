import type { CSSProperties } from 'react';
import BoostingCard, { BoostingServiceData } from './cards/BoostingCard';

const boostingServices: BoostingServiceData[] = [
  { id: 1, name: 'Gaming Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/5.jpg' },
  { id: 2, name: 'Feathershot Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/6.jpg' },
  { id: 3, name: 'Samurai Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/7.jpg' },
  { id: 4, name: 'Grimreaper Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/8.jpg' },
  { id: 5, name: 'Spartans Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/9.jpg' },
  { id: 6, name: 'Warriors Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/10.jpg' },
  { id: 7, name: 'Brave Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/11.jpg' },
  { id: 8, name: 'Witch Rank Boost', maxLevel: 'Radiant', startingPrice: '$15', image: '/12.jpg' },
];

const sellAllWrapperStyle: CSSProperties = {
  width: '159px',
  height: '64px',
};

const sellAllButtonStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '159px',
  height: '64px',
  padding: '11.67px 36px',
  gap: '12px',
  border: '2px solid #a023ec',
  borderRadius: '105px',
  background: 'rgba(160, 35, 236, 0.1)',
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '30px',
};

const sellAllArrowStyle: CSSProperties = {
  width: '16px',
  height: '24px',
  flex: '0 0 16px',
  color: '#a023ec',
};

export default function TopRatedBoosting() {
  return (
    <section className="top-rated-boosting-section">
      <div className="container top-rated-boosting-container d-flex flex-column align-items-center">
        <h2 className="top-rated-boosting-title mb-0 text-center">
          Top Rated <span>Boosting Services</span>
        </h2>

        <div className="top-rated-boosting-filters d-flex align-items-center">
          <label className="top-rated-boosting-search d-flex align-items-center" htmlFor="boosting-search">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input id="boosting-search" type="search" className="form-control" placeholder="Search..." aria-label="Search boosting services" />
          </label>
          <button type="button" className="btn top-rated-boosting-filter-button d-flex align-items-center justify-content-center">
            All Games
            <svg width="12" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
        </div>

        <div className="row top-rated-boosting-grid">
          {boostingServices.map((svc) => (
            <div key={svc.id} className="col-12 col-md-6 col-xl-3 top-rated-boosting-grid__column">
              <BoostingCard svc={svc} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center" style={sellAllWrapperStyle}>
          <button type="button" className="btn d-inline-flex align-items-center justify-content-center" style={sellAllButtonStyle}>
            <span>Sell All</span>
            <svg style={sellAllArrowStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
