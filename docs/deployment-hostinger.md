🚀 Deployment Checklist - Hostinger Business Hosting
===========================================

## 📋 Pre-Deployment Checklist

### 1. Hosting Plan Verification
- [ ] Business Hosting Plan active
- [ ] Domain configured in Hostinger
- [ ] SSL certificate enabled
- [ ] Check available disk space (100 GB available)
- [ ] Verify bandwidth limits (Unlimited on Business plan)

### 2. Project Configuration
```json
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other large dependencies here
        }
      }
    }
  }
})
```

### 3. Environment Setup
```env
# .env.production
VITE_API_URL=https://your-domain.com/api
VITE_ASSET_URL=https://your-domain.com/assets
VITE_GA_ID=your-google-analytics-id
```

## 🔧 Build Process

### 1. Local Build Preparation
```bash
# Install dependencies
npm install

# Update all packages to latest stable versions
npm update

# Clean previous build
rm -rf dist/

# Build for production
npm run build
```

### 2. Build Verification
- [ ] Check dist/ directory structure:
```
dist/
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
└── favicon.ico
```
- [ ] Verify all assets are included
- [ ] Test built version locally
- [ ] Check bundle size optimizations

## 📤 Deployment Process

### 1. Hostinger Control Panel Setup
- [ ] Log in to Hostinger Control Panel
- [ ] Navigate to File Manager or FTP File Manager
- [ ] Locate public_html directory
- [ ] Backup existing files (if any)

### 2. File Upload
- [ ] Using File Manager:
  - [ ] Upload dist/ contents to public_html/
  - [ ] Verify file permissions (usually 644 for files, 755 for directories)

- [ ] Using FTP:
  ```bash
  # FTP Configuration
  Host: your-domain.com
  Port: 21
  Username: your-ftp-username
  Password: your-ftp-password
  ```

### 3. Server Configuration

#### Apache Configuration (.htaccess)
```apache
# public_html/.htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # HTTPS Redirect
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # React Router Support
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
  
  # Cache Control
  <FilesMatch "\.(jpg|jpeg|png|gif|ico|svg)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
  
  <FilesMatch "\.(css|js)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
  
  # Enable GZIP Compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
  </IfModule>
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header set X-XSS-Protection "1; mode=block"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

## ✅ Post-Deployment Checklist

### 1. Functionality Verification
- [ ] Visit website homepage
- [ ] Test all major routes
- [ ] Verify all API endpoints are working
- [ ] Check all static assets are loading
- [ ] Test responsive design on multiple devices

### 2. Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Verify GZIP compression is working
```bash
# Test GZIP
curl -H "Accept-Encoding: gzip" -I https://your-domain.com
```
- [ ] Test load times from different locations

### 3. Security Verification
- [ ] SSL is working (green lock in browser)
- [ ] Security headers are properly set
- [ ] Check for any exposed sensitive files
- [ ] Verify proper file permissions

### 4. SEO Verification
- [ ] Meta tags are present
- [ ] robots.txt is accessible
- [ ] sitemap.xml is accessible
- [ ] Check canonical URLs
- [ ] Verify Open Graph tags

### 5. Analytics & Monitoring
- [ ] Set up Hostinger statistics
- [ ] Configure Google Analytics
- [ ] Set up error tracking
- [ ] Configure performance monitoring

## 🔄 Rollback Plan

### 1. Backup Current Version
```bash
# Create backup directory
mkdir backup_YYYY_MM_DD

# Copy current files
cp -r public_html/* backup_YYYY_MM_DD/
```

### 2. Rollback Steps
- [ ] Access File Manager
- [ ] Rename current public_html to public_html_failed
- [ ] Restore from backup
- [ ] Verify site functionality

## 📞 Support Information

### Hostinger Support
- Control Panel: https://hpanel.hostinger.com
- Support Chat: Available 24/7 in hPanel
- Knowledge Base: https://support.hostinger.com

### Common Issues & Solutions

1. **500 Internal Server Error**
   - Check .htaccess configuration
   - Verify file permissions
   - Review error logs in hPanel

2. **Blank White Screen**
   - Check JavaScript console for errors
   - Verify index.html is in root directory
   - Check PHP version compatibility

3. **Assets Not Loading**
   - Verify asset paths are correct
   - Check file permissions
   - Clear browser cache
   - Verify CORS settings

## 🔍 Monitoring & Maintenance

### Daily Checks
- [ ] Website uptime
- [ ] Error rates
- [ ] Page load times
- [ ] API response times

### Weekly Tasks
- [ ] Review error logs
- [ ] Check disk space usage
- [ ] Monitor bandwidth usage
- [ ] Backup verification

### Monthly Tasks
- [ ] Security updates
- [ ] Performance optimization
- [ ] SEO metrics review
- [ ] Analytics report generation

---

Remember to update this checklist based on your specific requirements and experiences with the deployment process. 