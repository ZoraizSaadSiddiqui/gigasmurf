export default function CTASection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#0D0420' }}>
      <div className="container">
        <div className="card card-dark p-5 text-center position-relative overflow-hidden" style={{ borderRadius: '20px' }}>
          <h2 className="font-heading text-white fw-extrabold fs-2 mb-3">Ready to Level Up Your Gaming Experience?</h2>
          <p className="text-white-50 small mx-auto mb-4" style={{ maxWidth: '480px', lineHeight: '1.7' }}>
            Join over 2 million gamers worldwide. Buy premium accounts, hire pro boosters, or start earning by selling your own gaming assets today.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="btn btn-purple rounded-pill px-4 py-3 fw-semibold">Create Free Account</button>
            <button className="btn btn-outline-light-custom rounded-pill px-4 py-3 fw-semibold">Become A Seller</button>
          </div>
        </div>
      </div>
    </section>
  );
}
