import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Code2, Calendar, Tag } from "lucide-react";
import { gists } from "@/data/gists";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GistsPage() {
  const navigate = useNavigate();

  const handleGistClick = (url: string) => {
    // Open in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="h-10 w-10 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Code Gists</h1>
          </div>
          <p className="text-muted-foreground">A collection of my code snippets, tips, and technical notes</p>
          <Button variant="outline" size="sm" onClick={() => navigate("/")} className="mt-4">
            ← Back to Portfolio
          </Button>
        </motion.div>

        {/* Gists List - Linktree Style */}
        <div className="space-y-4">
          {gists.map((gist, index) => (
            <motion.div key={gist.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary" onClick={() => handleGistClick(gist.url)}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                        {gist.title}
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      {gist.description && <CardDescription className="mt-1">{gist.description}</CardDescription>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    {gist.createdAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(gist.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    )}
                    {gist.tags && gist.tags.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap">
                        <Tag className="h-3.5 w-3.5" />
                        {gist.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {gists.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Code2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">No gists available yet</p>
            <p className="text-sm text-muted-foreground mt-2">Add your gists in src/data/gists.ts</p>
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Click any gist to view it on GitHub</p>
          <p className="text-xs text-muted-foreground mt-2">
            Direct links like <code className="bg-muted px-1 py-0.5 rounded">/gist1</code> will redirect to GitHub
          </p>
        </motion.div>
      </div>
    </div>
  );
}
