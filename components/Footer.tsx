export default function Footer() {
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
