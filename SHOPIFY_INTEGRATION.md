# Shopify Integration Guide

This document explains how to integrate your Cozy Gallery site with Shopify, both as a standalone headless storefront and as an embedded experience within your Shopify store.

## Table of Contents
1. [Headless Storefront Setup (Storefront API)](#headless-storefront-setup)
2. [Embed in Shopify Store](#embed-in-shopify-store)
3. [Testing & Deployment](#testing--deployment)

---

## Headless Storefront Setup

The site is configured to work as a standalone storefront using Shopify's Storefront API. This allows you to keep the MySpace aesthetic while connecting to your Shopify products and checkout.

### Step 1: Create a Custom App in Shopify

1. Go to your Shopify Admin → **Apps** → **App and sales channel settings**
2. Click **Develop apps** → **Create an app**
3. Name it "Cozy Gallery Storefront"
4. Click **Configure Storefront API scopes**
5. Enable these permissions:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_product_tags`
6. Click **Save**
7. Go to **API credentials** tab
8. Click **Install app**
9. Copy your **Storefront API access token**

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your Shopify credentials:
   ```
   VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
   VITE_SHOPIFY_STOREFRONT_TOKEN=your-actual-token-here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### Step 3: How It Works

Once configured, the site will:
- ✅ Fetch real products from your Shopify store
- ✅ Display them in the Shop carousel
- ✅ Allow adding items to cart
- ✅ Show cart count in the Bag button
- ✅ Redirect to Shopify checkout when user clicks "Proceed to Checkout"

**Fallback:** If Shopify isn't configured, the site displays mock products so you can still test the UI.

---

## Embed in Shopify Store

You can embed your Cozy Gallery site inside your main Shopify store as a custom page.

### Option 1: iFrame Embed (Simplest)

After deploying your site to GitHub Pages or another host:

1. Go to Shopify Admin → **Online Store** → **Pages** → **Add page**
2. Name it "Gallery" or "Experience"
3. Click **Show HTML** (< > button)
4. Paste this code:

```html
<div class="cozy-gallery-embed">
  <iframe
    src="https://darrellevansiii.github.io/cozy/"
    width="100%"
    height="2000"
    frameborder="0"
    style="border: none; overflow: hidden;"
    scrolling="no">
  </iframe>
</div>

<style>
  .cozy-gallery-embed {
    margin: 0 -40px; /* Removes page padding for full-width */
  }

  /* Make iframe responsive */
  @media (max-width: 768px) {
    .cozy-gallery-embed iframe {
      height: 3000px; /* Adjust for mobile */
    }
  }
</style>

<script>
  // Auto-resize iframe based on content (optional)
  window.addEventListener('message', function(e) {
    if (e.data.type === 'cozy-gallery-resize') {
      document.querySelector('.cozy-gallery-embed iframe').style.height = e.data.height + 'px';
    }
  });
</script>
```

5. Click **Save**
6. Your Cozy Gallery is now accessible at `yourdomain.com/pages/gallery`

### Option 2: Custom Theme Section (Advanced)

For better integration, create a custom theme section:

1. Go to **Online Store** → **Themes** → **Actions** → **Edit code**
2. In **Sections**, click **Add a new section**
3. Name it `cozy-gallery.liquid`
4. Paste this code:

```liquid
<div class="cozy-gallery-section">
  <iframe
    src="{{ section.settings.gallery_url }}"
    width="100%"
    height="{{ section.settings.iframe_height }}"
    frameborder="0">
  </iframe>
</div>

{% schema %}
{
  "name": "Cozy Gallery",
  "settings": [
    {
      "type": "url",
      "id": "gallery_url",
      "label": "Gallery URL",
      "default": "https://darrellevansiii.github.io/cozy/"
    },
    {
      "type": "range",
      "id": "iframe_height",
      "min": 500,
      "max": 3000,
      "step": 100,
      "unit": "px",
      "label": "Height",
      "default": 2000
    }
  ],
  "presets": [
    {
      "name": "Cozy Gallery"
    }
  ]
}
{% endschema %}

<style>
  .cozy-gallery-section iframe {
    border: none;
    display: block;
  }
</style>
```

5. Now you can add "Cozy Gallery" as a section in the theme customizer!

### Option 3: Direct Navigation Link

Simply add a navigation link to your deployed site:

1. **Online Store** → **Navigation** → **Main menu**
2. Add link:
   - Name: "Gallery" or "Experience"
   - URL: `https://darrellevansiii.github.io/cozy/`
   - Opens in: New tab

---

## Testing & Deployment

### Local Testing

1. Set up your `.env` file with Shopify credentials
2. Run `npm run dev`
3. Test adding products to cart
4. Verify cart count updates
5. Check that checkout redirects to Shopify

### Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at: `https://darrellevansiii.github.io/cozy/`

### Deploy to Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Environment Variables for Production

When deploying, make sure to add your environment variables in your hosting platform:

- **GitHub Pages**: Use GitHub Secrets (Settings → Secrets → Actions)
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment

---

## Features Included

✅ **Shopify Storefront API Integration**
- Fetches real products from your store
- Supports variants and pricing
- Auto-syncs inventory

✅ **Shopping Cart**
- Add/remove items
- Update quantities
- Persistent cart using Shopify checkout
- Cart count badge on Bag button

✅ **Checkout**
- Redirects to Shopify checkout
- Maintains cart state
- Supports all Shopify payment methods

✅ **Fallback Mode**
- Displays mock products if Shopify isn't configured
- Allows UI testing without credentials

---

## Customization

### Product Display Logic

Products are mapped from Shopify in `src/components/Shop.jsx`:

```javascript
const formattedProducts = shopifyProducts.map((product) => ({
  id: product.id,
  shopifyId: product.variants[0].id,
  name: product.title,
  price: `$${product.variants[0].price.amount}`,
  // Customize color mapping based on your product variants:
  color: product.variants[0].title.includes('Blue') ? '#5B9BD5' : '#1F1F1F',
  image: product.productType?.toLowerCase().includes('hoodie') ? 'hoodie' : 'tee'
}));
```

Adjust the color mapping and image types to match your actual product structure.

### Styling

The cart modal and shopping experience maintain the MySpace aesthetic:
- Blue sky gradient backgrounds
- White borders and glassmorphism
- Retro styling with modern functionality

---

## Troubleshooting

**Products not loading?**
- Verify your `.env` variables are correct
- Check that products are published to your Storefront channel in Shopify
- Check browser console for API errors

**Checkout not working?**
- Ensure `unauthenticated_write_checkouts` scope is enabled
- Verify your Storefront API token is valid
- Check that your Shopify store has checkout enabled

**Cart count not updating?**
- Clear browser cache
- Restart dev server after changing `.env`
- Check that ShopifyProvider is wrapping the App component

---

## Support

For Shopify API documentation: https://shopify.dev/docs/api/storefront

For Cozy Gallery specific issues, check the repository issues page.

---

**Built with ❤️ for Cozy Gallery**
