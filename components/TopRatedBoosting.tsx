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

const sectionStyle: CSSProperties = {
  width: '100%',
  background: 'linear-gradient(180deg, #11072D 0%, #0d0420 100%)',
};

const containerStyle: CSSProperties = {
  width: '1230px',
  maxWidth: '100%',
  boxSizing: 'border-box',
  minHeight: '1241px',
  paddingTop: '50px',
  paddingBottom: '70px',
  gap: '56px',
};

const titleStyle: CSSProperties = {
  width: '909px',
  maxWidth: '100%',
  height: '57px',
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '42px',
  fontWeight: 700,
  lineHeight: 1,
};

const filtersStyle: CSSProperties = {
  width: '841px',
  maxWidth: '100%',
  height: '72px',
  gap: '16px',
};

const searchStyle: CSSProperties = {
  width: '651px',
  height: '72px',
  minWidth: 0,
  padding: '20px 24px',
  gap: '10px',
  borderRadius: '100px',
  background: 'rgba(160, 35, 236, .1)',
  boxShadow: '0 0 8px rgba(160, 35, 236, .3)',
  color: 'rgba(255, 255, 255, .7)',
};

const searchInputStyle: CSSProperties = {
  minWidth: 0,
  padding: 0,
  border: 0,
  borderRadius: 0,
  background: 'transparent',
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '16px',
  lineHeight: '22px',
  boxShadow: 'none',
};

const filterButtonStyle: CSSProperties = {
  width: '174px',
  height: '59px',
  padding: '14px 24px',
  gap: '8px',
  border: '2px solid #a023ec',
  borderRadius: '105px',
  background: '#a023ec',
  color: '#fff',
  fontFamily: "'Manrope', sans-serif",
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1,
  whiteSpace: 'nowrap',
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 285px)',
  width: '1215px',
  maxWidth: '100%',
  gap: '36px 25px',
  margin: 0,
  padding: 0,
};

const gridColumnStyle: CSSProperties = {
  width: '285px',
  maxWidth: 'none',
  padding: 0,
};

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

const responsiveStyles = `
  [data-top-rated-boosting-search-input]::placeholder {
    color: rgba(255, 255, 255, .5);
  }

  [data-top-rated-boosting-search-input]:focus {
    background: transparent;
    color: #fff;
    box-shadow: none;
  }

  [data-top-rated-boosting-filter-button]:hover,
  [data-top-rated-boosting-filter-button]:focus-visible {
    border-color: #a023ec;
    background: #a023ec;
    color: #fff;
  }

  @media (max-width: 1239.98px) {
    [data-top-rated-boosting-container] {
      width: 100% !important;
      min-height: auto !important;
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    [data-top-rated-boosting-grid] {
      grid-template-columns: repeat(2, 285px) !important;
      width: 595px !important;
    }
  }

  @media (max-width: 767.98px) {
    [data-top-rated-boosting-container] {
      padding-right: 16px !important;
      padding-left: 16px !important;
      gap: 32px !important;
    }

    [data-top-rated-boosting-title] {
      height: auto !important;
      font-size: 32px !important;
    }

    [data-top-rated-boosting-filters] {
      height: auto !important;
      flex-direction: column !important;
    }

    [data-top-rated-boosting-search],
    [data-top-rated-boosting-filter-button] {
      width: 100% !important;
    }

    [data-top-rated-boosting-grid] {
      grid-template-columns: 285px !important;
      width: 285px !important;
      gap: 24px !important;
    }
  }
`;

export default function TopRatedBoosting() {
  return (
    <>
      <section style={sectionStyle}>
        <div data-top-rated-boosting-container className="container d-flex flex-column align-items-center" style={containerStyle}>
          <h2 data-top-rated-boosting-title className="mb-0 text-center" style={titleStyle}>
            Top Rated <span style={{ color: '#a023ec' }}>Boosting Services</span>
          </h2>

          <div data-top-rated-boosting-filters className="d-flex align-items-center" style={filtersStyle}>
            <label data-top-rated-boosting-search className="d-flex align-items-center" style={searchStyle} htmlFor="boosting-search">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input data-top-rated-boosting-search-input id="boosting-search" type="search" className="form-control" placeholder="Search..." aria-label="Search boosting services" style={searchInputStyle} />
            </label>
            <button data-top-rated-boosting-filter-button type="button" className="btn d-flex align-items-center justify-content-center" style={filterButtonStyle}>
              All Games
              <svg width="12" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
          </div>

          <div data-top-rated-boosting-grid className="row" style={gridStyle}>
            {boostingServices.map((svc) => (
              <div key={svc.id} className="col-12 col-md-6 col-xl-3" style={gridColumnStyle}>
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
      <style>{responsiveStyles}</style>
    </>
  );
}
