# 🚀 Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Code Quality
- [ ] All tests passing (`npm test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Code reviewed and approved

### Environment Variables
- [ ] `VITE_API_URL` - Backend API URL
- [ ] `VITE_GA_MEASUREMENT_ID` - Google Analytics ID
- [ ] `VITE_ENVIRONMENT` - Set to "production"
- [ ] All sensitive data in environment variables (not in code)

### Configuration
- [ ] `vercel.json` or `netlify.toml` configured
- [ ] `.htaccess` for Apache servers
- [ ] `_redirects` for Netlify
- [ ] Build output directory correct (`dist`)

## Deployment Steps

### Option 1: Vercel
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Link project: `vercel link`
- [ ] Set environment variables in Vercel dashboard
- [ ] Deploy: `vercel --prod`
- [ ] Verify deployment URL

### Option 2: Netlify
- [ ] Install Netlify CLI: `npm i -g netlify-cli`
- [ ] Login: `netlify login`
- [ ] Initialize: `netlify init`
- [ ] Set environment variables in Netlify dashboard
- [ ] Deploy: `netlify deploy --prod`
- [ ] Verify deployment URL

### Option 3: Traditional Hosting
- [ ] Build project: `npm run build`
- [ ] Upload `dist` folder contents to server
- [ ] Configure `.htaccess` (Apache) or Nginx config
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Test all routes work

## Post-Deployment

### Verification
- [ ] Homepage loads correctly
- [ ] All routes work (no 404 errors)
- [ ] Authentication flow works
- [ ] All games load and function
- [ ] AI tools work
- [ ] Images and assets load
- [ ] Mobile responsive design works
- [ ] Analytics tracking works
- [ ] No console errors

### Performance
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Assets cached properly
- [ ] CDN configured (if applicable)

### Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive data exposed
- [ ] CORS configured correctly
- [ ] Environment variables secured

### Monitoring
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Analytics configured
- [ ] Uptime monitoring active
- [ ] Performance monitoring active

## Rollback Plan
- [ ] Previous version backed up
- [ ] Rollback procedure documented
- [ ] Team notified of deployment

## Post-Launch
- [ ] Monitor error logs for 24 hours
- [ ] Check analytics for issues
- [ ] Gather user feedback
- [ ] Document any issues found

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Deployment URL**: _______________
**Status**: ☐ Success  ☐ Issues Found

