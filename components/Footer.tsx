export default function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: '#0D0420' }}>
      <div className="container">
        <div className="card card-dark p-4 p-md-5" style={{ borderRadius: '20px' }}>
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="font-heading text-white fw-bold fs-4 mb-2">Gigas<span className="text-purple">murf</span></div>
              <p className="text-white-50 small mb-3" style={{ maxWidth: '220px', lineHeight: '1.7' }}>The ultimate secure marketplace for gamers to buy, sell, and boost. Built for the community, powered by trust.</p>
              <div className="d-flex gap-2">
                <div className="rounded-circle bg-white bg-opacity-10 text-white-50 d-flex align-items-center justify-content-center cursor-pointer hover-purple" style={{ width: 32, height: 32, fontSize: 13 }}>𝕏</div>
                <div className="rounded-circle bg-white bg-opacity-10 text-white-50 d-flex align-items-center justify-content-center cursor-pointer hover-purple" style={{ width: 32, height: 32, fontSize: 13 }}>f</div>
                <div className="rounded-circle bg-white bg-opacity-10 text-white-50 d-flex align-items-center justify-content-center cursor-pointer hover-purple" style={{ width: 32, height: 32, fontSize: 13 }}>in</div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h6 className="font-heading text-white fw-bold mb-3">Marketplace</h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Browse Accounts</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Rank Boosting</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Top Sellers</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">About Us</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h6 className="font-heading text-white fw-bold mb-3">Top Games</h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Valorant</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">League of Legends</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Fortnite</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Overwatch 2</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">CS2</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4">
              <h6 className="font-heading text-white fw-bold mb-3">Support & Legal</h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Privacy Policy</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Terms & use</a></li>
                <li><a href="#" className="text-white-50 small text-decoration-none hover-purple">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 mt-4 border-top border-secondary border-opacity-10 text-white-50 small">
            Copyright © 2026 Gigasmurf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
