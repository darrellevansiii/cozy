# Quick Deploy Guide - View Your Cozy Gallery Site NOW

Your site is built and ready! Here are the fastest ways to view it online.

## ⚡ Fastest Options (5 minutes or less)

### Option 1: Netlify Drop (Drag & Drop - NO ACCOUNT NEEDED)

1. **Download** `cozy-gallery-production.zip` from this project
2. **Extract** the zip file
3. Go to https://app.netlify.com/drop
4. **Drag the entire `dist` folder** onto the page
5. **DONE!** You'll get an instant URL like `https://random-name-123.netlify.app`

**Pros:** Instant, free, no account, free HTTPS
**Time:** 2 minutes

---

### Option 2: Vercel (GitHub Integration)

1. Go to https://vercel.com
2. Sign up with your GitHub account (free)
3. Click "Add New Project"
4. Import your `cozy` repository
5. Select branch: `claude/cozy-gallery-site-CAKhc`
6. Framework preset: Vite
7. Click "Deploy"
8. **DONE!** You'll get a URL like `https://cozy.vercel.app`

**Pros:** Auto-deploys on git push, custom domains, free HTTPS
**Time:** 5 minutes

---

### Option 3: GitHub Pages (From Your Computer)

1. On your Mac, clone the repo:
   ```bash
   git clone https://github.com/darrellevansiii/cozy.git
   cd cozy
   git checkout claude/cozy-gallery-site-CAKhc
   ```

2. Install and deploy:
   ```bash
   npm install
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to https://github.com/darrellevansiii/cozy/settings/pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Click Save

4. **DONE!** Your site will be at:
   ```
   https://darrellevansiii.github.io/cozy/
   ```

**Pros:** Free hosting, custom domain support
**Time:** 5 minutes

---

### Option 4: Surge.sh (Command Line - Super Fast)

On your Mac:

```bash
# Install surge globally
npm install -g surge

# Navigate to your project
cd /path/to/cozy

# Deploy the dist folder
surge dist/ cozy-gallery.surge.sh
```

**DONE!** Instantly live at `https://cozy-gallery.surge.sh`

**Pros:** Fastest CLI deployment, free
**Time:** 2 minutes

---

## 📦 Files Ready for Download

- **`cozy-gallery-production.zip`** - Production build (ready to host anywhere)
- **`dist/`** folder - Extracted files ready to upload

---

## 🎨 What You'll See

Once deployed, your site will have:
- ✅ Scrolling ticker with Brooklyn time & Bible verse
- ✅ Interactive Shop carousel
- ✅ Radio player with animated equalizer
- ✅ Video player with plasma TV
- ✅ Look Book mood board
- ✅ Cursor customizer (desktop)
- ✅ Shopping cart (works with Shopify when configured)
- ✅ Full MySpace aesthetic

---

## 🛍️ To Enable Shopify

Once your site is live:

1. Copy your live URL
2. Follow **SHOPIFY_INTEGRATION.md** to set up API
3. Add environment variables to your hosting platform
4. Redeploy

---

## 💡 Recommended: Netlify Drop

**Why?**
- No account needed
- Literally drag and drop
- Instant live URL
- Free SSL certificate
- Takes 2 minutes

Just download the zip, extract it, and drag the `dist` folder to https://app.netlify.com/drop

---

## Need Help?

All deployment options are free and beginner-friendly. Pick the one that sounds easiest to you!

**Netlify** = Easiest (drag & drop)
**Vercel** = Best for continuous deployment
**GitHub Pages** = Best for official projects
**Surge** = Fastest CLI option
