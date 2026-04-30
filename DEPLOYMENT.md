# Deployment Guide - ScaleSight

## Issue: 404 Error on Page Refresh

The "404 NOT_FOUND" error when refreshing pages (like `/services/india`) is a common issue with Single Page Applications (SPAs). This happens because:

1. React Router handles routing on the client side
2. When you refresh, the browser requests the URL from the server
3. The server doesn't have a route for `/services/india`, only for `/`
4. Result: 404 error

## Solutions Implemented

### 1. For Netlify Deployment (Recommended)
- ✅ `netlify.toml` configured with proper redirects
- ✅ `public/_redirects` file as fallback
- All routes will redirect to `index.html` with 200 status

### 2. For Vercel Deployment
- ✅ `vercel.json` configured with rewrites
- Handles both API routes and SPA fallback

### 3. For Custom Server (Node.js)
- ✅ `server.js` updated to serve static files in production
- ✅ SPA fallback route added (must be after API routes)
- ✅ Production start script added to package.json

### 4. For Apache Servers
- ✅ `public/.htaccess` already configured
- Handles URL rewriting for SPA routing

## How to Deploy

### Netlify (Easiest)
```bash
# Build the project
npm run build

# Deploy to Netlify
# The netlify.toml will handle everything automatically
```

### Vercel
```bash
# Build the project
npm run build

# Deploy to Vercel
# The vercel.json will handle everything automatically
```

### Custom Node.js Server
```bash
# Build the project
npm run build

# Set environment variable
export NODE_ENV=production

# Start the server
npm start
```

### Apache Server
```bash
# Build the project
npm run build

# Upload the dist folder contents to your server
# The .htaccess file will handle routing
```

## Testing Locally

### Development Mode
```bash
npm run dev
```

### Production Preview
```bash
# Build first
npm run build

# Preview with Vite
npm run preview

# OR start production server
NODE_ENV=production npm start
```

## Browser Extension Errors

The "listener indicated an asynchronous response" errors are from browser extensions (not your code). They're harmless but annoying. To fix:

1. Open Chrome DevTools
2. Go to Console
3. Click the filter icon
4. Uncheck "Extension" to hide extension errors

Or disable extensions one by one to find the culprit.

## Common Issues

### Issue: Still getting 404 on refresh
**Solution**: Make sure you're using the correct deployment configuration for your platform

### Issue: API calls failing
**Solution**: Check that your API proxy is configured correctly in `vite.config.ts`

### Issue: Assets not loading
**Solution**: Ensure all asset paths start with `/` (e.g., `/logo.png` not `logo.png`)

## Environment Variables

For production, make sure to set:
```bash
NODE_ENV=production
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASS=your-app-password
RECIPIENT_EMAIL=recipient@example.com
```

## Support

If you continue to experience issues:
1. Check browser console for specific errors
2. Verify your deployment platform's documentation
3. Ensure all configuration files are in the correct location
