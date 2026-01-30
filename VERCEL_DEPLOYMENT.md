# Deploy VirtuMeet to Vercel - Step by Step Guide

## Prerequisites
- ✅ GitHub account
- ✅ Vercel account (sign up at https://vercel.com)
- ✅ Your code pushed to a GitHub repository

## Step 1: Push Your Code to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - VirtuMeet production ready"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/virtuMeet.git
git branch -M main
git push -u origin main
```

## Step 2: Sign Up / Log In to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended for easiest setup)

## Step 3: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories. Find and click **"Import"** next to your `virtuMeet` repository
3. Vercel will automatically detect it's a Next.js project

## Step 4: Configure Project Settings

### Build Settings (usually auto-detected):
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)
- **Root Directory:** `./` (leave as default)

### Environment Variables

**IMPORTANT:** Add all these environment variables in Vercel before deploying:

Click **"Environment Variables"** and add each one:

1. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
   - Value: Your Clerk publishable key (from Clerk Dashboard)

2. **CLERK_SECRET_KEY**
   - Value: Your Clerk secret key (from Clerk Dashboard)

3. **NEXT_PUBLIC_CLERK_SIGN_IN_URL**
   - Value: `/sign-in`

4. **NEXT_PUBLIC_CLERK_SIGN_UP_URL**
   - Value: `/sign-up`

5. **NEXT_PUBLIC_STREAM_API_KEY**
   - Value: Your Stream API key (from Stream Dashboard)

6. **STREAM_SECRET_KEY**
   - Value: Your Stream secret key (from Stream Dashboard)

7. **NEXT_PUBLIC_BASE_URL**
   - Value: `https://your-project-name.vercel.app` (or your custom domain)
   - **Note:** You can update this after deployment with your actual domain

### For Each Environment Variable:
- Check ✅ **Production**
- Check ✅ **Preview** (optional, for preview deployments)
- Check ✅ **Development** (optional, for local development)

## Step 5: Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 2-5 minutes)
3. You'll see the deployment progress in real-time

## Step 6: Get Your Deployment URL

Once deployment completes:
- Your app will be live at: `https://your-project-name.vercel.app`
- Vercel automatically provides a URL like: `https://virtuMeet-abc123.vercel.app`

## Step 7: Update Environment Variables with Production URL

1. Go to your project settings in Vercel
2. Navigate to **"Environment Variables"**
3. Update **NEXT_PUBLIC_BASE_URL** to your actual Vercel URL:
   - Example: `https://virtuMeet-abc123.vercel.app`
4. Redeploy (or it will auto-redeploy if you have auto-deploy enabled)

## Step 8: Configure Clerk for Production

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your application
3. Go to **"Domains"** or **"Settings"**
4. Add your Vercel domain:
   - `https://your-project-name.vercel.app`
5. Update **"Allowed Redirect URLs"**:
   - Add: `https://your-project-name.vercel.app`
   - Add: `https://your-project-name.vercel.app/sign-in`
   - Add: `https://your-project-name.vercel.app/sign-up`
6. Save changes

## Step 9: (Optional) Add Custom Domain

1. In Vercel project settings, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your custom domain (e.g., `virtuMeet.com`)
4. Follow Vercel's instructions to configure DNS
5. Update **NEXT_PUBLIC_BASE_URL** to your custom domain
6. Update Clerk settings with your custom domain

## Step 10: Verify Deployment

Test these features:
- ✅ Sign up / Sign in works
- ✅ Create a meeting
- ✅ Join a meeting
- ✅ Personal room link generation
- ✅ Meeting links work correctly

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `package.json` has correct scripts

### Authentication Not Working
- Verify Clerk keys are correct
- Check Clerk dashboard for allowed domains
- Ensure redirect URLs are configured

### Video Not Working
- Verify Stream API keys are correct
- Check Stream dashboard for API status

### Environment Variables Not Working
- Make sure variables are set for **Production** environment
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

## Automatic Deployments

Vercel automatically deploys:
- **Production:** When you push to `main` branch
- **Preview:** When you push to other branches or create a Pull Request

## Useful Vercel Features

- **Analytics:** View your app's performance
- **Logs:** Check server logs and errors
- **Functions:** Monitor serverless function performance
- **Speed Insights:** Track page load times

## Next Steps

1. ✅ Test all features on production
2. ✅ Set up monitoring/analytics
3. ✅ Configure custom domain (optional)
4. ✅ Set up error tracking (optional)

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
