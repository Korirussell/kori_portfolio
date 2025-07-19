# Deploying to Vercel

This portfolio is optimized for Vercel deployment - the best platform for Next.js applications.

## Why Vercel?

✅ **Made for Next.js** - Created by the Next.js team  
✅ **Zero Configuration** - Works out of the box  
✅ **Better Performance** - Global CDN + Edge Network  
✅ **Image Optimization** - Automatic image optimization  
✅ **Free Tier** - Generous free plan for personal projects  
✅ **Automatic Deployments** - Deploy on every git push  

## Quick Setup (2 minutes)

### 1. Push to GitHub

```bash
# Navigate to your project directory
cd winxpsite

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Kori Russell's portfolio"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click **"New Project"**
4. **Import** your portfolio repository
5. Click **"Deploy"** (no configuration needed!)

### 3. Done! 🎉

Your site will be live at: `https://your-project-name.vercel.app`

## Custom Domain (Optional)

1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `korirussell.com`)
3. Follow DNS setup instructions
4. SSL certificate automatically provisioned

## Automatic Deployments

Every push to `main` branch automatically:
- Builds your site
- Deploys to production
- Updates your live site

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Features You Get

- **Preview Deployments**: Every PR gets a unique preview URL
- **Analytics**: Built-in performance analytics
- **Edge Functions**: For advanced features
- **Image Optimization**: Automatic WebP conversion
- **Global CDN**: Fast loading worldwide

## Pro Tips

- Branch deployments get preview URLs automatically
- Use Vercel CLI for advanced features: `npm i -g vercel`
- Environment variables managed in Vercel dashboard
- Automatic HTTPS for all deployments 