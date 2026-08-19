import type { CSSProperties } from 'react';
import BoostingCard from './cards/BoostingCard';
import { siteContent } from '@/content/site-content';

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
  fontFamily: 'Poppins',
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
  fontFamily: '',
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
  background: 'transparent',
  color: '#fff',
  fontFamily: 'Manrope',
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
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '30px',
  whiteSpace: 'nowrap',
};

const sellAllArrowStyle: CSSProperties = {
  width: '16px',
  height: '24px',
  flex: '0 0 16px',
  color: '#a023ec',
};

export default function TopRatedBoosting() {
  const { boosting } = siteContent;
  return (
    <>
      <section data-top-rated-boosting style={sectionStyle}>
        <div data-top-rated-boosting-container className="container d-flex flex-column align-items-center" style={containerStyle}>
          <h2 data-top-rated-boosting-title className="mb-0 text-center" style={titleStyle}>
            {boosting.title} <span style={{ color: '#a023ec' }}>{boosting.accentTitle}</span>
          </h2>

          <div data-top-rated-boosting-filters className="d-flex align-items-center" style={filtersStyle}>
            <label data-top-rated-boosting-search className="d-flex align-items-center" style={searchStyle} htmlFor="boosting-search">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input data-top-rated-boosting-search-input id="boosting-search" type="search" className="form-control" placeholder={boosting.searchPlaceholder} aria-label="Search boosting services" style={searchInputStyle} />
            </label>
            <button data-top-rated-boosting-filter-button type="button" className="btn d-flex align-items-center justify-content-center" style={filterButtonStyle}>
              {boosting.filterLabel}
              <svg width="12" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
          </div>

          <div data-top-rated-boosting-grid className="row" style={gridStyle}>
            {boosting.services.map((svc) => (
              <div key={svc.id} className="col-12 col-md-6 col-xl-3" style={gridColumnStyle}>
                <BoostingCard svc={svc} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center" style={sellAllWrapperStyle}>
            <button type="button" className="btn d-inline-flex align-items-center justify-content-center" style={sellAllButtonStyle}>
              <span style={{ flexShrink: 0 }}>{boosting.sellAllLabel}</span>
              <svg style={sellAllArrowStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
