'use client';

export default function Navbar() {
  return (
    <nav className="navbar bg-deep-dark">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            alt="logo"
            className="navbar-logo"
          />
        </a>

        {/* Center nav links */}
        <div className="d-flex align-items-center gap-4">
          <a
            href="#"
            className="text-white text-decoration-none manrope-font"
          >
            Explore
          </a>

          <a
            href="#"
            className="text-white text-decoration-none manrope-font"
          >
            Top Sellers
          </a>

          <a
            href="#"
            className="text-white text-decoration-none manrope-font"
          >
            Support
          </a>
        </div>

        {/* Right icons + Sell button */}
        <div className="d-flex align-items-center gap-3">

          {/* Cart icon */}
          <a
            href="#"
            className="text-white position-relative d-inline-flex align-items-center justify-content-center text-decoration-none p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              width="20"
              height="20"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span className="badge-purple rounded-circle position-absolute d-flex align-items-center justify-content-center">
              1
            </span>
          </a>

          {/* User icon */}
          <a
            href="#"
            className="text-white d-inline-flex align-items-center justify-content-center text-decoration-none p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              width="20"
              height="20"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>

          {/* Sell button */}
          <button
            type="button"
            className="btn btn-purple rounded-pill px-4 py-2"
          >
            Sell
          </button>

        </div>
      </div>
    </nav>
  );
}