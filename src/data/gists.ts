export interface Gist {
  id: string;
  title: string;
  description?: string;
  gistId: string; // The GitHub gist ID from the URL
  url: string; // Full GitHub gist URL
  embedUrl: string; // URL for embedding
  tags?: string[];
  createdAt?: string;
}

export const gists: Gist[] = [
  {
    id: "tiktok-clone-compose",
    title: "TikTok Clone with Jetpack Compose",
    description: "A TikTok clone app built using Jetpack Compose, showcasing video feeds, user profiles, and interactions.",
    gistId: "804973fa7d6d442cc8d17358943f990a",
    url: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a",
    embedUrl: "https://gist.github.com/notsatria/804973fa7d6d442cc8d17358943f990a.js",
    tags: ["Jetpack Compose", "Android", "Kotlin"],
    createdAt: "2025-11-11",
  },
  {
    id: "shimmer-effect-compose",
    title: "Shimmer Effect with Jetpack Compose",
    description: "A simple implementation of shimmer loading effect in Jetpack Compose.",
    gistId: "ee44dd67724381574055e864d5923046",
    url: "https://gist.github.com/notsatria/ee44dd67724381574055e864d5923046",
    embedUrl: "https://gist.github.com/notsatria/ee44dd67724381574055e864d5923046.js",
    tags: ["Jetpack Compose", "Android", "Kotlin"],
    createdAt: "2025-11-11",
  },
  {
    id: "tiktok-clone-pip-mode",
    title: "TikTok Clone with PiP Mode Jetpack Compose",
    description: "A simple implementation of Picture-in-Picture (PiP) mode in a TikTok clone app using Jetpack Compose.",
    gistId: "ee44dd67724381574055e864d5923046",
    url: "https://gist.github.com/notsatria/85f675892da4545b5e00fd39a9186eba",
    embedUrl: "https://gist.github.com/notsatria/85f675892da4545b5e00fd39a9186eba.js",
    tags: ["Jetpack Compose", "Android", "Kotlin"],
    createdAt: "2025-11-25",
  },
];
