# Quick Start Guide: Adding Your Gists

## Step 1: Find Your GitHub Gist Information

Go to your GitHub gist URL, for example:

```
https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a
```

The gist ID is: `804973fa7d6d442cc8d17358943f990a`

## Step 2: Edit src/data/gists.ts

Add your gist to the array:

```typescript
{
  id: "my-first-gist",           // Short name for URL (e.g., /my-first-gist)
  title: "React useDebounce Hook",
  description: "A custom React hook for debouncing values",
  gistId: "804973fa7d6d442cc8d17358943f990a",
  url: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a",
  embedUrl: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js",
  tags: ["React", "TypeScript", "Hooks"],
  createdAt: "2024-11-11"
}
```

## Step 3: Test It

1. **View all gists**: Navigate to `http://localhost:5173/gists`
2. **Test direct link**: Navigate to `http://localhost:5173/my-first-gist`
   - Should redirect to GitHub gist page

## Step 4: Share Your Gists

You can now share:

- `https://yourdomain.com/gists` - Shows all gists
- `https://yourdomain.com/my-first-gist` - Goes directly to that gist

## Example with Your Gist

From your embed code:

```html
<script src="https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js"></script>
```

Add to gists.ts:

```typescript
{
  id: "useful-snippet",
  title: "Useful Code Snippet",
  description: "Brief description of what this code does",
  gistId: "804973fa7d6d442cc8d17358943f990a",
  url: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a",
  embedUrl: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js",
  tags: ["JavaScript"],
  createdAt: "2024-11-11"
}
```

Now people can access it at: `yourdomain.com/useful-snippet`

## Tips

- Keep `id` URL-friendly (lowercase, hyphens, no spaces)
- Add descriptive titles and descriptions
- Use tags to categorize your gists
- Update `createdAt` with the actual date
