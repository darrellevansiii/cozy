# Brand Assets Setup Guide

Your site has been updated to use your actual brand logo images! Follow these simple steps to add them:

## Images Needed

You need to save two images to the `public/images/` folder:

### 1. Cozy Logo (Header)
- **File name:** `cozy-logo.png`
- **Location:** `public/images/cozy-logo.png`
- **Image:** The "Cozy" logo with Japanese characters (ギャラリー) underneath
- **Recommended size:** At least 400px wide for best quality

### 2. Relax, Create Button
- **File name:** `relax-create.png`
- **Location:** `public/images/relax-create.png`
- **Image:** The "Relax, create." stylized script text
- **Recommended size:** At least 800px wide for best quality

## How to Add the Images

### Option 1: If Using Claude Code Web
1. Download both logo images to your computer
2. In Claude Code, look for the file browser on the left
3. Navigate to `public/images/`
4. Upload both image files there

### Option 2: If Cloning Locally
1. Clone your repository:
   ```bash
   git clone https://github.com/darrellevansiii/cozy.git
   cd cozy
   git checkout claude/cozy-gallery-site-CAKhc
   ```

2. Save your logo images to `public/images/`:
   - Save the Cozy logo as: `public/images/cozy-logo.png`
   - Save the Relax, create image as: `public/images/relax-create.png`

3. Commit and push:
   ```bash
   git add public/images/
   git commit -m "Add brand logo images"
   git push
   ```

### Option 3: Via GitHub Web Interface
1. Go to your repository on GitHub.com
2. Navigate to the `public` folder
3. Click "Add file" → "Upload files"
4. Create a folder called `images` (or enter folder name in path)
5. Upload both PNG files
6. Commit the changes

## Image Format Requirements

- **Format:** PNG (for transparent backgrounds) or JPG
- **Transparency:** PNG is recommended to preserve the logo quality against the blue sky background
- **File size:** Keep under 500KB each for fast loading

## What's Already Done

✅ **Code updated** - Components now reference the image files
✅ **CSS updated** - Proper sizing and hover effects added
✅ **Folder created** - `public/images/` directory ready
✅ **File paths set** - Looking for files at the correct locations

## After Adding Images

Once you've added the images, rebuild and deploy:

```bash
npm run build
npm run deploy
```

Or just redeploy through Vercel/Netlify and they'll automatically detect the new images!

## Troubleshooting

**Images not showing?**
- Check file names match exactly: `cozy-logo.png` and `relax-create.png`
- Make sure they're in `public/images/` not `src/images/`
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check image file formats are PNG or JPG

**Images too large/small?**
- Adjust the heights in `src/App.css`:
  - For Cozy logo: Line 54 `height: 120px;` (change value)
  - For Relax, create: Line 188 `max-width: 600px;` (change value)

---

Your brand assets will look amazing on the site! 🎨✨
