# Digital Ocean App Platform Deployment Guide

## Problem

Digital Ocean App Platform doesn't handle client-side routing automatically, causing 404 errors when accessing routes like `/gists` or `/gist1` directly.

## Solution

We've implemented multiple fallback mechanisms:

### 1. Configuration Files

#### `.do/app.yaml`

- Configures Digital Ocean to treat this as a static site
- Sets `error_document` to `index.html` for fallback routing
- Enables catchall routing

#### `public/_redirects`

- Netlify-style redirects that also work on some platforms
- Redirects all routes to `index.html` with 200 status

#### `public/404.html`

- Fallback page that captures 404 errors
- Uses JavaScript to redirect back to the app with the original path
- Stores the path in sessionStorage for React Router

### 2. App-Level Handling

The main `App.tsx` now checks for redirected paths and navigates accordingly.

## Digital Ocean Deployment Steps

### Option 1: Using the Dashboard (Recommended)

1. **Go to Digital Ocean App Platform**

   - Navigate to Apps → Create App

2. **Connect Your Repository**

   - Select GitHub
   - Choose `notsatria/web-portfolio`
   - Select `main` branch

3. **Configure Build Settings**

   - Build Command: `npm run build`
   - Output Directory: `dist`
   - **Important**: Set as "Static Site" not "Web Service"

4. **Configure Error Handling**

   - In App Settings → Settings
   - Set "Error Document" to: `index.html`
   - Or use the `.do/app.yaml` configuration

5. **Environment Variables** (if needed)

   - Add any required environment variables

6. **Deploy**

### Option 2: Using App Spec (YAML)

1. **In your Digital Ocean dashboard**:

   - Go to your app
   - Settings → App Spec
   - Replace with the content from `.do/app.yaml`

2. **Or via CLI**:

```bash
doctl apps create --spec .do/app.yaml
```

## Testing After Deployment

Test these URLs:

1. `https://yourdomain.com/` - Should load portfolio
2. `https://yourdomain.com/gists` - Should load gists page
3. `https://yourdomain.com/gist1` - Should redirect to GitHub
4. Refresh on any route - Should not show 404

## Troubleshooting

### Routes Still Showing 404

1. **Check Error Document Setting**:

   - In App Platform dashboard
   - Go to Settings
   - Ensure "Error Document" is set to `index.html`

2. **Verify Build Output**:

   - Check that `dist` folder contains:
     - `index.html`
     - `404.html`
     - `_redirects`

3. **Check App Type**:

   - Ensure app is configured as "Static Site"
   - Not "Web Service"

4. **Clear Browser Cache**:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Manual Configuration

If the YAML doesn't work, manually configure in the dashboard:

```
Component Type: Static Site
Build Command: npm run build
Output Directory: dist
Index Document: index.html
Error Document: index.html
```

## Alternative: Using HashRouter

If all else fails, you can switch to HashRouter which works everywhere:

In `src/App.tsx`, change:

```tsx
import { HashRouter as Router } from "react-router-dom";
```

URLs will become:

- `yourdomain.com/#/gists`
- `yourdomain.com/#/gist1`

This always works but looks less clean.

## Verification

After deployment, check the browser console:

- Should see no 404 errors
- Routes should load correctly
- Check Network tab for proper status codes

## Important Notes

1. **404.html Fallback**: This handles Direct URL access
2. **\_redirects File**: Provides additional fallback
3. **sessionStorage**: Preserves the intended route during redirect
4. **App-Level Check**: React Router picks up the stored path

All three work together to ensure routing works on Digital Ocean.
