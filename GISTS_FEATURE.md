# GitHub Gists Feature

This portfolio now includes a dedicated gists page that displays your GitHub gists in a Linktree-style layout with automatic redirects.

## 🎯 Features

1. **Gists List Page** (`/gists`): Shows all your gists in a mobile-first Linktree-style layout
2. **Direct Gist Links** (`/gist1`, `/gist2`, etc.): Automatically redirects to the GitHub gist page
3. **Responsive Design**: Mobile-first approach with beautiful cards
4. **Smooth Navigation**: Integrated with existing navbar and routing

## 📁 File Structure

```
src/
├── data/
│   └── gists.ts              # Gist data configuration
├── pages/
│   ├── GistsPage.tsx         # Main gists list page (Linktree style)
│   ├── GistRedirect.tsx      # Handles direct gist URL redirects
│   └── HomePage.tsx          # Portfolio home page wrapper
└── components/
    └── Navbar.tsx            # Updated with Gists link
```

## 🚀 Usage

### Adding Your Gists

Edit `src/data/gists.ts` and add your gist information:

```typescript
{
  id: "gist1",                    // Short ID for URL (e.g., /gist1)
  title: "React Custom Hook",     // Display title
  description: "A useful React custom hook for...",
  gistId: "804973fa7d6d442cc8d17358943f990a",  // From GitHub URL
  url: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a",
  embedUrl: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js",
  tags: ["React", "TypeScript"],
  createdAt: "2024-01-15"
}
```

### Getting Gist Information from GitHub

1. Go to your GitHub gist (e.g., `https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a`)
2. The gist ID is the last part of the URL: `804973fa7d6d442cc8d17358943f990a`
3. Use this information to create your gist entry

### Example Gist from Your Request

From: `<script src="https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js"></script>`

Add to `gists.ts`:

```typescript
{
  id: "my-awesome-code",
  title: "My Awesome Code Snippet",
  description: "Description of what this code does",
  gistId: "804973fa7d6d442cc8d17358943f990a",
  url: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a",
  embedUrl: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js",
  tags: ["JavaScript"],
  createdAt: "2024-11-11"
}
```

## 🔗 URL Structure

1. **Main Portfolio**: `https://yourdomain.com/`
2. **Gists List**: `https://yourdomain.com/gists`
3. **Direct Gist Redirect**: `https://yourdomain.com/gist1` → Redirects to GitHub

## 🎨 Mobile-First Design

The gists page is designed with a mobile-first approach:

- Clean, card-based layout
- Large tap targets for mobile
- Responsive spacing and typography
- Smooth transitions and hover effects
- Works perfectly on all screen sizes

## 🌐 Deployment Configuration

The project includes configuration files for popular hosting platforms:

### Netlify

- `public/_redirects` - Handles client-side routing

### Vercel

- `vercel.json` - Rewrites for SPA routing

### Other Platforms

For other hosting platforms, ensure all routes redirect to `index.html` for client-side routing to work.

## 📱 Navigation

- Click "Gists" in the navbar to view all gists
- Click any gist card to open it on GitHub (new tab)
- Use direct URLs like `/gist1` to share specific gists
- Click logo to return to portfolio home

## 🎯 User Flow

1. **User visits `/gists`**: Sees a list of all your gists
2. **User clicks a gist card**: Opens gist in new GitHub tab
3. **User visits `/gist1`**: Automatic redirect to GitHub gist page
4. **User visits invalid gist**: Redirects to `/gists` after 3 seconds

## 🔧 Customization

### Styling

Edit the components to match your design:

- Card hover effects
- Color scheme
- Spacing and layout

### Adding More Features

- Add search/filter functionality
- Group gists by tags
- Add pagination for many gists
- Embed gists directly (instead of redirecting)

## 📊 Example Data

The project includes 3 example gists. Replace them with your actual gists in `src/data/gists.ts`.

## 🚨 Important Notes

1. Update `gistId` with your actual GitHub gist IDs
2. Keep `id` short and URL-friendly (no spaces or special characters)
3. The redirect happens client-side, so it works as a SPA
4. For production, ensure your hosting platform supports client-side routing

## 🎉 Benefits

- **Shareable Links**: Easy to share specific code snippets
- **Professional Presentation**: Better than raw gist links
- **SEO Friendly**: Each gist has its own route
- **Mobile Optimized**: Great experience on all devices
- **Integrated**: Seamless part of your portfolio
