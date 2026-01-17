# 🚀 Deployment Guide - AI for Students Platform

This guide covers deploying the AI for Students platform to production.

## 📋 Prerequisites

- Node.js 18+ and npm installed
- Git installed
- Access to a hosting provider (Vercel, Netlify, AWS, etc.)
- Domain name (optional but recommended)

## 🏗️ Build Process

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.production` file with the following variables:

```env
VITE_API_URL=https://api.aiforstudents.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENVIRONMENT=production
```

### 3. Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### 4. Verify Build

```bash
npm run preview
```

Test the production build locally before deploying.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Configure**:
   - Set environment variables in Vercel dashboard
   - Configure custom domain (optional)
   - Set up automatic deployments from Git

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

3. **Configure**:
   - Add `netlify.toml` configuration file
   - Set environment variables
   - Configure build settings

### Option 3: AWS S3 + CloudFront

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**:
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure caching rules

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload contents of `dist` folder to `public_html` or `www` directory
   - Ensure `.htaccess` is configured for SPA routing

3. **Configure server**:
   - Set up URL rewriting for React Router
   - Configure HTTPS
   - Set proper MIME types

## ⚙️ Server Configuration

### Apache (.htaccess)

Create `.htaccess` in the `dist` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

```nginx
server {
    listen 80;
    server_name aiforstudents.com;
    root /var/www/aiforstudents/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔒 Security Considerations

### 1. Environment Variables

- Never commit `.env` files to Git
- Use secure environment variable management
- Rotate API keys regularly

### 2. HTTPS

- Always use HTTPS in production
- Configure SSL certificates
- Enable HSTS headers

### 3. Content Security Policy

Add CSP headers to prevent XSS attacks:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';
```

### 4. CORS Configuration

Configure CORS properly if using a separate API:

```javascript
// Backend CORS config
{
  origin: 'https://aiforstudents.com',
  credentials: true
}
```

## 📊 Monitoring & Analytics

### 1. Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID
3. Add to environment variables: `VITE_GA_MEASUREMENT_ID`
4. Analytics will automatically initialize

### 2. Error Tracking

Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Custom error logging

### 3. Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up uptime monitoring

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📦 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test authentication flow
- [ ] Check all routes work
- [ ] Verify API connections
- [ ] Test on mobile devices
- [ ] Check analytics tracking
- [ ] Verify SEO meta tags
- [ ] Test performance (Lighthouse)
- [ ] Check error handling
- [ ] Verify HTTPS is working
- [ ] Test all games and tools
- [ ] Check accessibility

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors: `npm run type-check`

### Routes Not Working

- Ensure server is configured for SPA routing
- Check `.htaccess` or Nginx configuration
- Verify `base` path in Vite config

### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Rebuild after adding new variables
- Check hosting provider's env var configuration

### Performance Issues

- Enable code splitting
- Optimize images
- Enable compression
- Use CDN for static assets

## 📈 Optimization Tips

1. **Enable Compression**: Gzip/Brotli compression
2. **CDN**: Use CDN for static assets
3. **Caching**: Configure proper cache headers
4. **Lazy Loading**: Already implemented in code
5. **Image Optimization**: Use WebP format with fallbacks

## 🔄 Updates & Maintenance

### Regular Updates

1. Keep dependencies updated
2. Monitor security advisories
3. Update Node.js version
4. Review and update dependencies monthly

### Backup Strategy

- Version control (Git)
- Database backups (if applicable)
- Configuration backups
- Regular deployment snapshots

---

**Need Help?** Contact the development team or refer to the main documentation.

