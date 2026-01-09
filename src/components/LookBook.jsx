import './LookBook.css';

function LookBook({ isExpanded }) {
  const moodBoardImages = [
    { id: 1, type: 'product', label: 'Vintage Chain Set' },
    { id: 2, type: 'product', label: 'Crystal Decanter' },
    { id: 3, type: 'product', label: 'Gold Accessories' },
    { id: 4, type: 'product', label: 'Striped Summer Set' },
    { id: 5, type: 'product', label: 'Luxury Collection' },
    { id: 6, type: 'product', label: 'Statement Piece' }
  ];

  return (
    <div className={`lookbook-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="mood-board">
        {moodBoardImages.slice(0, isExpanded ? 6 : 6).map((item, index) => (
          <div key={item.id} className="mood-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="mood-placeholder">
              <div className="placeholder-icon">
                {item.type === 'product' ? '👕' : '🎨'}
              </div>
            </div>
            {isExpanded && <p className="mood-label">{item.label}</p>}
          </div>
        ))}
      </div>
      {isExpanded && (
        <div className="lookbook-info">
          <h3>Latest Collection Inspiration</h3>
          <p className="collection-description">
            Explore the mood board behind our Spring 2026 collection.
            Each piece tells a story of creative expression and timeless style.
          </p>
          <div className="collection-stats">
            <div className="stat">
              <span className="stat-number">24</span>
              <span className="stat-label">Pieces</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Themes</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Vibes</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LookBook;
