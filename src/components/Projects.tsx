import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Eye, CheckCircle, Target, Lightbulb, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProj = projects.find((proj) => proj.id === selectedProject);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow as a developer.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              {project.image && (
                <div className="aspect-video w-full bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="default" size="sm" onClick={() => openModal(project.id)} className="flex items-center gap-2 flex-1">
                    <Eye size={16} />
                    View Details
                  </Button>
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent onClose={closeModal} className="max-w-6xl max-h-[90vh] overflow-hidden">
          {selectedProj && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl mb-2">{selectedProj.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProj.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selectedProj.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedProj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProj.demo && (
                    <Button size="sm" asChild>
                      <a href={selectedProj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </DialogHeader>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[70vh] pr-2 space-y-6">
                {/* Project Description */}
                {selectedProj.description && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About this Project</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProj.description}</p>
                  </div>
                )}

                {/* Features */}
                {selectedProj.features && selectedProj.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProj.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Showcase Images */}
                {selectedProj.showcaseImages && selectedProj.showcaseImages.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Project Showcase</h3>
                    <div className="space-y-4">
                      {selectedProj.showcaseImages.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border bg-muted/30">
                          <img
                            src={image}
                            alt={`${selectedProj.title} showcase ${index + 1}`}
                            className="w-full h-auto object-contain"
                            style={{ aspectRatio: "1920/1080" }}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          {/* Fallback for missing images */}
                          <div style={{ display: "none" }} className="w-full h-60 flex items-center justify-center bg-muted text-muted-foreground">
                            <div className="text-center">
                              <div className="text-2xl mb-2">🖼️</div>
                              <p className="text-sm">Image {index + 1} - Coming Soon</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges, Solution, Outcome */}
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                  {selectedProj.challenges && (
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2 text-orange-600">
                        <Target className="h-4 w-4" />
                        Challenges
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{selectedProj.challenges}</p>
                    </div>
                  )}

                  {selectedProj.solution && (
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2 text-blue-600">
                        <Lightbulb className="h-4 w-4" />
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{selectedProj.solution}</p>
                    </div>
                  )}

                  {selectedProj.outcome && (
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        Outcome
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{selectedProj.outcome}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
