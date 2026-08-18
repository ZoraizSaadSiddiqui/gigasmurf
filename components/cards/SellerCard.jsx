export default function SellerCard({ seller }) {
  return (
    <div className={`seller-card ${seller.featured ? 'featured' : ''}`}>
      <div
        className="seller-avatar"
        style={{
          background: seller.bg,
          width: '100%',
          height: '120px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          marginBottom: '12px'
        }}
      >
        {seller.emoji}
      </div>
      <div className="seller-name">
        {seller.name} <span className="verified-dot" />
      </div>
      {seller.featured && (
        <>
          <div className="seller-stats">
            <div className="seller-stat">
              <div className="seller-stat-label">Success</div>
              <div className="seller-stat-val">{seller.success}</div>
            </div>
            <div className="seller-stat">
              <div className="seller-stat-label">Orders</div>
              <div className="seller-stat-val">{seller.orders}</div>
            </div>
            <div className="seller-stat">
              <div className="seller-stat-label">Rating</div>
              <div className="seller-stat-val">★ {seller.rating}</div>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <span className="top-badge">⭐ {seller.badge}</span>
          </div>
        </>
      )}
    </div>
  );
}
