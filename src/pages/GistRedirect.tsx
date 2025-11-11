import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gists } from "@/data/gists";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";

export default function GistRedirect() {
  const { gistId } = useParams<{ gistId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the gist by ID
    const gist = gists.find((g) => g.id === gistId);

    if (gist) {
      // Redirect to GitHub gist
      window.location.href = gist.url;
    } else {
      // If gist not found, redirect to gists page after a short delay
      const timer = setTimeout(() => {
        navigate("/gists");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [gistId, navigate]);

  const gist = gists.find((g) => g.id === gistId);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        {gist ? (
          <>
            <Loader2 className="h-16 w-16 mx-auto mb-6 text-primary animate-spin" />
            <h1 className="text-2xl font-bold mb-2">Redirecting to GitHub Gist...</h1>
            <p className="text-muted-foreground mb-4">{gist.title}</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ExternalLink className="h-4 w-4" />
              <code className="bg-muted px-2 py-1 rounded">{gist.url}</code>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              If you're not redirected automatically,{" "}
              <a href={gist.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                click here
              </a>
            </p>
          </>
        ) : (
          <>
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold mb-2">Gist Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The gist <code className="bg-muted px-2 py-1 rounded">/{gistId}</code> doesn't exist.
            </p>
            <p className="text-sm text-muted-foreground">Redirecting to gists page...</p>
          </>
        )}
      </motion.div>
    </div>
  );
}
