'use client';

import { siteContent } from '@/content/site-content';

function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20 16.2 16.2" /></svg>;
}

function UserIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" /></svg>;
}

function LightningIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>;
}

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="hero-section text-center position-relative overflow-hidden py-5 d-flex align-items-center justify-content-center">
      <div className="custom-section mx-auto d-flex flex-column align-items-center justify-content-center">
        <div className="hero-content mx-auto">
          <div className="d-flex justify-content-center mb-4">
            <div className="hero-search-bar d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center w-100 gap-3">
                <span className="text-white-50 d-flex align-items-center"><SearchIcon /></span>
                <input type="text" placeholder={hero.searchPlaceholder} className="form-control bg-transparent text-white border-0 shadow-none p-0" />
              </div>
            </div>
          </div>

          <div className="popular-container d-flex align-items-center justify-content-center flex-wrap mx-auto mb-4">
            <span className="text-white-50 small">{hero.popularLabel}</span>
            {hero.popularTags.map((tag) => <button key={tag} type="button" className="popular-tag-btn d-inline-flex align-items-center justify-content-center">{tag}</button>)}
          </div>
        </div>

        <div className="hero-tabs-wrapper font-white d-flex justify-content-center align-items-center flex-wrap mx-auto mb-5">
          <button type="button" className="hero-tab-btn d-inline-flex align-items-center justify-content-center"><UserIcon /><span>{hero.tabs[0]}</span></button>
          <button type="button" className="hero-tab-btn d-inline-flex align-items-center justify-content-center"><span className="boosting-icon"><LightningIcon /></span><span>{hero.tabs[1]}</span></button>
        </div>

        <div className="categories-wrapper d-flex justify-content-center align-items-center flex-wrap mx-auto">
          {hero.categories.map((category) => (
            <button key={category.label} type="button" className="btn category-btn d-inline-flex align-items-center justify-content-center">
              <img src={category.image} alt={category.label} width="36" height="36" style={{ objectFit: 'contain' }} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
