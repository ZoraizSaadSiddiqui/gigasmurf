'use client';

interface CategoryPill {
  label: string;
  image: string;
}

const CATEGORIES: CategoryPill[] = [
  { label: 'Currency', image: '/cat-currency.png' },
  { label: 'Items', image: '/cat-items.png' },
  { label: 'Coaching', image: '/cat-coaching.png' },
  { label: 'Gift Cards', image: '/cat-giftcards.png' },
  { label: 'Top Ups', image: '/cat-topups.png' },
];

const POPULAR_TAGS = [
  'Valorant',
  'Brawl Stars',
  'Clash Royale',
  'Roblox',
  'Fortnite',
  'CS2',
];

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.2 16.2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );

}

export default function HeroSection() {

  return (
    <section className="hero-section text-center position-relative overflow-hidden py-5 d-flex align-items-center justify-content-center">

      {/* Background Overlay */}

     <div className="custom-section mx-auto d-flex flex-column align-items-center justify-content-center">

        {/* Search + Popular */}
        <div className="hero-content mx-auto">

          {/* Search Bar */}
          <div className="d-flex justify-content-center mb-4">
            <div className="hero-search-bar d-flex align-items-center justify-content-between">

              <div className="d-flex align-items-center w-100 gap-3">

                <span className="text-white-50 d-flex align-items-center">
                  <SearchIcon />
                </span>

                <input
                  type="text"
                  placeholder="Search for games, accounts, boosting services..."
                  className="form-control bg-transparent text-white border-0 shadow-none p-0"
                />

              </div>

            </div>
          </div>

          {/* Popular Tags */}
<div className="popular-container d-flex align-items-center justify-content-center flex-wrap mx-auto mb-4">

  <span className="text-white-50 small">
    Popular:
  </span>

  {POPULAR_TAGS.map((tag) => (
    <button
      key={tag}
      type="button"
      className="popular-tag-btn d-inline-flex align-items-center justify-content-center"
    >
      {tag}
    </button>
  ))}

</div>
</div>

{/* Accounts / Boosting Tabs */}
<div className="hero-tabs-wrapper font-white d-flex justify-content-center align-items-center flex-wrap mx-auto mb-5">

  <button
    type="button"
    className="hero-tab-btn d-inline-flex align-items-center justify-content-center"
  >
    <UserIcon />
    <span>Accounts</span>
  </button>

  <button
    type="button"
    className="hero-tab-btn d-inline-flex align-items-center justify-content-center"
  >
    <span className="boosting-icon">
      <LightningIcon />
    </span>
    <span>Boosting</span>
  </button>

</div>
        {/* Categories */}
        <div className="categories-wrapper d-flex justify-content-center align-items-center flex-wrap mx-auto">

          {CATEGORIES.map((category) => (
            <button
              key={category.label}
              type="button"
              className="btn category-btn d-inline-flex align-items-center justify-content-center"
            >

              <img
                src={category.image}
                alt={category.label}
                width="36"
                height="36"
                style={{ objectFit: 'contain' }}
              />

              <span>
                {category.label}
              </span>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}