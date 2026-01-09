import { createContext, useContext, useState, useEffect } from 'react';
import Client from 'shopify-buy';

const ShopifyContext = createContext();

export function ShopifyProvider({ children }) {
  const [client, setClient] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Shopify Buy client
    // These will come from environment variables
    const shopifyClient = Client.buildClient({
      domain: import.meta.env.VITE_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
      storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || 'your-token-here'
    });

    setClient(shopifyClient);

    // Create a checkout
    shopifyClient.checkout.create().then((checkout) => {
      setCheckout(checkout);
    });

    // Fetch products
    shopifyClient.product.fetchAll().then((products) => {
      setProducts(products);
      setIsLoading(false);
    }).catch((error) => {
      console.error('Error fetching products:', error);
      setIsLoading(false);
    });
  }, []);

  const addToCart = async (variantId, quantity = 1) => {
    if (!checkout || !client) return;

    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10)
      }
    ];

    try {
      const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
      setCheckout(updatedCheckout);
      return updatedCheckout;
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (lineItemId) => {
    if (!checkout || !client) return;

    try {
      const updatedCheckout = await client.checkout.removeLineItems(checkout.id, [lineItemId]);
      setCheckout(updatedCheckout);
      return updatedCheckout;
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItem = async (lineItemId, quantity) => {
    if (!checkout || !client) return;

    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];

    try {
      const updatedCheckout = await client.checkout.updateLineItems(checkout.id, lineItemsToUpdate);
      setCheckout(updatedCheckout);
      return updatedCheckout;
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const getCartCount = () => {
    if (!checkout || !checkout.lineItems) return 0;
    return checkout.lineItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    client,
    checkout,
    products,
    isLoading,
    addToCart,
    removeFromCart,
    updateCartItem,
    getCartCount,
    cartCount: getCartCount()
  };

  return (
    <ShopifyContext.Provider value={value}>
      {children}
    </ShopifyContext.Provider>
  );
}

export function useShopify() {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error('useShopify must be used within a ShopifyProvider');
  }
  return context;
}
