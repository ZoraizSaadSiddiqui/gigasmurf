export default function AccountCard({ acc }) {
  return (
    <div className="account-card">
      <div style={{ position: 'relative' }}>
        <div className="account-card-img-placeholder" style={{ background: acc.bg }}>
          <span style={{ fontSize: '50px' }}>{acc.emoji}</span>
        </div>
        <span className="promoted-badge">Promoted</span>
        <span className="heart-btn">🤍</span>
      </div>
      <div className="account-card-body">
        <div className="account-card-name">{acc.name}</div>
        <div className="account-card-desc">{acc.desc}</div>
        <div className="account-card-footer">
          <div className="seller-info">
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#A023EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>A</div>
            {acc.seller}
            <span className="verified-dot" />
          </div>
          <div className="star-rating">
            <span className="star">★</span> {acc.rating}
          </div>
        </div>
      </div>
      <div className="account-price-row">
        <div>
          <div className="price-label">Price</div>
          <div className="price-value">{acc.price}</div>
        </div>
        <button className="btn-buy">
          Buy
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
