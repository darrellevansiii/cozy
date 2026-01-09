import { useShopify } from '../context/ShopifyContext';
import './CartModal.css';

function CartModal({ isOpen, onClose }) {
  const { checkout, removeFromCart, updateCartItem } = useShopify();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (checkout && checkout.webUrl) {
      window.open(checkout.webUrl, '_blank');
    }
  };

  const lineItems = checkout?.lineItems || [];
  const subtotal = checkout?.subtotalPrice ? `$${checkout.subtotalPrice.amount}` : '$0.00';

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cart-modal-close" onClick={onClose}>×</button>

        <div className="cart-modal-header">
          <h2>Shopping Bag</h2>
        </div>

        <div className="cart-modal-body">
          {lineItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your bag is empty</p>
              <p className="cart-empty-subtitle">Add some cozy items to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {lineItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      {item.variant.image ? (
                        <img src={item.variant.image.src} alt={item.title} />
                      ) : (
                        <div className="cart-item-placeholder">
                          {item.variant.product.productType?.includes('Hoodie') ? '🧥' : '👕'}
                        </div>
                      )}
                    </div>

                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p className="cart-item-variant">{item.variant.title}</p>
                      <p className="cart-item-price">${item.variant.price.amount}</p>

                      <div className="cart-item-quantity">
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span>Subtotal:</span>
                  <span className="cart-subtotal-amount">{subtotal}</span>
                </div>

                <button className="cart-checkout-button" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>

                <p className="cart-note">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
