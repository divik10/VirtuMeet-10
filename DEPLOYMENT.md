# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Update `NEXT_PUBLIC_BASE_URL` with your production domain (e.g., `https://virtuMeet.com`)
- [ ] Replace test API keys with production keys:
  - [ ] Get production Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com)
  - [ ] Get production Stream keys from [Stream Dashboard](https://getstream.io/dashboard)
- [ ] Ensure all environment variables are set in your hosting platform

### 2. Clerk Configuration
- [ ] Update application name in Clerk Dashboard to "VirtuMeet"
- [ ] Configure production domain in Clerk Dashboard
- [ ] Set up production OAuth redirect URLs
- [ ] Disable GitHub OAuth if not needed (or keep it disabled as configured)

### 3. Stream Configuration
- [ ] Verify Stream API keys are production keys
- [ ] Configure any production-specific Stream settings

### 4. Build & Test
```bash
# Build the application
npm run build

# Test the production build locally
npm start
```

### 5. Deployment Platforms

#### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

#### Other Platforms
- Ensure Node.js 18+ is supported
- Set build command: `npm run build`
- Set start command: `npm start`
- Add all environment variables from `.env.example`

## Production Optimizations Applied

✅ **Next.js Config**
- Compression enabled
- SWC minification enabled
- React Strict Mode enabled
- Removed `X-Powered-By` header

✅ **Error Handling**
- Console errors only in development
- Proper error boundaries

✅ **URL Handling**
- Dynamic base URL with fallback to `window.location.origin`

## Post-Deployment

1. Test all authentication flows
2. Test video meeting creation and joining
3. Verify meeting links work correctly
4. Check mobile responsiveness
5. Monitor error logs

## Security Notes

- Never commit `.env` file to version control
- Use production API keys only in production
- Enable HTTPS/SSL certificates
- Configure CORS if needed
- Review Clerk and Stream security settings
