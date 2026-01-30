# Quick Deploy to Vercel - Checklist

## ⚡ Quick Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for production"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. **Add Environment Variables** (see below)
5. Click **"Deploy"**

### 3. Environment Variables to Add

Copy these from your `.env` file and add them in Vercel:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=scveggjp8vyc
STREAM_SECRET_KEY=9jt29bdxj9c2ka7krnzc64hsu9sgha6ane6xgggxfrfhp3nzvme9k36shjpef8h2
NEXT_PUBLIC_BASE_URL=https://your-project.vercel.app
```

**Important:** 
- Update `NEXT_PUBLIC_BASE_URL` after first deployment with your actual Vercel URL
- For production, use production keys from Clerk and Stream dashboards

### 4. Configure Clerk
After deployment, update Clerk Dashboard:
- Add your Vercel domain to allowed domains
- Update redirect URLs

### 5. Done! 🎉
Your app is live at: `https://your-project.vercel.app`

---

📖 **Full detailed guide:** See `VERCEL_DEPLOYMENT.md`
