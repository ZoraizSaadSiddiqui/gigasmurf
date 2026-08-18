'use client';

export default function Navbar() {
  return (
    <nav className="navbar-gigasmurf navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Gigas<span>murf</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          <div className="navbar-nav mx-auto align-items-lg-center gap-lg-3">
            <a href="#" className="nav-link nav-link-item active">Explore</a>
            <a href="#" className="nav-link nav-link-item">Top Sellers</a>
            <a href="#" className="nav-link nav-link-item">Support</a>
          </div>
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="nav-icons d-flex align-items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
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
