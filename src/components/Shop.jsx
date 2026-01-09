import { useState } from 'react';
import './Shop.css';

const products = [
  {
    id: 1,
    name: 'Cozy Blue Hoodie',
    price: '$85',
    color: '#5B9BD5',
    image: 'hoodie'
  },
  {
    id: 2,
    name: 'Cozy Black Hoodie',
    price: '$85',
    color: '#1F1F1F',
    image: 'hoodie'
  },
  {
    id: 3,
    name: 'Cozy White Tee',
    price: '$45',
    color: '#FFFFFF',
    image: 'tee'
  },
  {
    id: 4,
    name: 'Cozy Red Hoodie',
    price: '$85',
    color: '#D55B5B',
    image: 'hoodie'
  }
];

function Shop({ isExpanded }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className={`shop-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="product-display">
        <button className="nav-arrow left" onClick={prevProduct}>
          ‹
        </button>

        <div className="product-showcase">
          {currentProduct.image === 'hoodie' ? (
            <div className="hoodie-silhouette" style={{ backgroundColor: currentProduct.color }}>
              <div className="hood"></div>
              <div className="body"></div>
              <div className="sleeve left"></div>
              <div className="sleeve right"></div>
              <div className="pocket"></div>
              <div className="drawstring left"></div>
              <div className="drawstring right"></div>
            </div>
          ) : (
            <div className="tee-silhouette" style={{ backgroundColor: currentProduct.color }}>
              <div className="tee-body"></div>
              <div className="tee-sleeve left"></div>
              <div className="tee-sleeve right"></div>
            </div>
          )}
        </div>

        <button className="nav-arrow right" onClick={nextProduct}>
          ›
        </button>
      </div>

      {isExpanded && (
        <div className="product-info">
          <h3>{currentProduct.name}</h3>
          <p className="price">{currentProduct.price}</p>
          <div className="product-dots">
            {products.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="add-to-cart">Add to Bag</button>
        </div>
      )}
    </div>
  );
}

export default Shop;
