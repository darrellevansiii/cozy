import { useState, useEffect } from 'react';
import { useShopify } from '../context/ShopifyContext';
import './Shop.css';

// Fallback products if Shopify isn't configured
const mockProducts = [
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
  const { products: shopifyProducts, isLoading, addToCart } = useShopify();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState(mockProducts);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // Use Shopify products if available, otherwise use mock products
    if (!isLoading && shopifyProducts && shopifyProducts.length > 0) {
      const formattedProducts = shopifyProducts.map((product) => ({
        id: product.id,
        shopifyId: product.variants[0].id,
        name: product.title,
        price: `$${product.variants[0].price.amount}`,
        color: product.variants[0].title.includes('Blue') ? '#5B9BD5' :
               product.variants[0].title.includes('Black') ? '#1F1F1F' :
               product.variants[0].title.includes('White') ? '#FFFFFF' :
               product.variants[0].title.includes('Red') ? '#D55B5B' : '#5B9BD5',
        image: product.productType?.toLowerCase().includes('hoodie') ? 'hoodie' : 'tee',
        shopifyProduct: product
      }));
      setDisplayProducts(formattedProducts);
    }
  }, [shopifyProducts, isLoading]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProducts.length) % displayProducts.length);
  };

  const handleAddToCart = async () => {
    const currentProduct = displayProducts[currentIndex];

    if (currentProduct.shopifyId) {
      setIsAdding(true);
      await addToCart(currentProduct.shopifyId, 1);
      setIsAdding(false);

      // Show success feedback
      alert(`Added ${currentProduct.name} to your bag!`);
    } else {
      // Fallback for mock products
      alert(`${currentProduct.name} - Configure Shopify to enable checkout`);
    }
  };

  const currentProduct = displayProducts[currentIndex];

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
            {displayProducts.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add to Bag'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Shop;
