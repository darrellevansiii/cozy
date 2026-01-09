# 🚀 Deploy Your Cozy Gallery Site NOW

Your site is built and ready! Follow these steps to deploy and get your live URL in 2 minutes.

## ⚡ Fastest Method: Vercel (Recommended)

### Step 1: Go to Vercel
**Click this link:** https://vercel.com/new

### Step 2: Sign In
- Click **"Continue with GitHub"**
- Authorize Vercel (it's free and secure)

### Step 3: Import Your Repository
1. You'll see a list of your GitHub repositories
2. Find **`darrellevansiii/cozy`**
3. Click **"Import"**

### Step 4: Configure Project
Vercel will auto-detect your settings, but verify these:

- **Framework Preset:** Vite ✅ (should auto-detect)
- **Root Directory:** `./` (leave as is)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 5: Select Branch
**IMPORTANT:** Change branch from `main` to:
```
claude/cozy-gallery-site-CAKhc
```

### Step 6: Environment Variables (Optional - Skip for Now)
You can add Shopify credentials later. Click **"Deploy"** for now.

### Step 7: Deploy! 🎉
- Click the big **"Deploy"** button
- Wait 1-2 minutes while it builds
- You'll get a live URL like: `https://cozy-yourname.vercel.app`

---

## 🎨 Your Live Site Will Have:

✅ All the MySpace aesthetic and interactivity
✅ Scrolling ticker with Brooklyn time
✅ Shop carousel with products
✅ Radio player with equalizer
✅ Video player with plasma TV
✅ Look Book mood board
✅ Shopping cart (ready for Shopify)
✅ Custom cursor customizer

⚠️ **Note:** Logo images won't show until you add them to `public/images/` (see BRAND_ASSETS_SETUP.md)

---

## 📝 Alternative: Quick Commands (If on Your Mac)

If you prefer command line:

```bash
# Clone the repo
git clone https://github.com/darrellevansiii/cozy.git
cd cozy
git checkout claude/cozy-gallery-site-CAKhc

# Install Vercel CLI
npm install -g vercel

# Deploy!
vercel

# Follow the prompts - it will guide you through
```

---

## 🔄 Future Updates

Once deployed, any time you push to your branch, Vercel will automatically redeploy! Just:

1. Make changes
2. Commit and push to GitHub
3. Vercel rebuilds automatically
4. Your site updates in ~1 minute

---

## ✨ After Deployment

Once your site is live:

1. **Add Your Logo Images**
   - Upload to `public/images/` folder
   - Commit and push
   - Vercel will redeploy with logos

2. **Configure Shopify** (optional)
   - Add environment variables in Vercel dashboard
   - Follow SHOPIFY_INTEGRATION.md guide

3. **Custom Domain** (optional)
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS settings

---

## 🆘 Troubleshooting

**Can't find your repository?**
- Make sure you're logged into GitHub
- Refresh the Vercel page
- Check that the repository is public or you have access

**Build fails?**
- Make sure branch is: `claude/cozy-gallery-site-CAKhc`
- Check that all files are committed and pushed

**Need help?**
Let me know and I can walk you through it!

---

**Your Cozy Gallery site is ready to go live! 🎨✨**

Just click that Vercel link and follow the steps - you'll have your live site in minutes!
