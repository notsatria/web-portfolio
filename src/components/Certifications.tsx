import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, Award, Calendar } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  const openModal = (certificationId: string) => {
    setSelectedCertification(certificationId);
  };

  const closeModal = () => {
    setSelectedCertification(null);
  };

  const selectedCert = certifications.find((cert) => cert.id === selectedCertification);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Professional certifications that validate my expertise and commitment to continuous learning in various technologies and platforms.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <motion.div key={certification.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {certification.date}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{certification.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground">{certification.issuer}</CardDescription>
                {certification.credentialId && <p className="text-sm text-muted-foreground">ID: {certification.credentialId}</p>}
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                {certification.description && <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{certification.description}</p>}

                <div className="flex gap-2 mt-auto">
                  {certification.url && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={certification.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        View Details
                      </a>
                    </Button>
                  )}

                  {certification.certificateImage && (
                    <Button size="sm" onClick={() => openModal(certification.id)} className="flex items-center gap-2">
                      <Eye size={16} />
                      Certificate
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertification} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent onClose={closeModal} className="max-w-5xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  {selectedCert.name}
                </DialogTitle>
                <DialogDescription>
                  {selectedCert.issuer} • {selectedCert.date}
                  {selectedCert.credentialId && ` • ID: ${selectedCert.credentialId}`}
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center justify-center p-4 bg-muted/30 rounded-lg">
                {selectedCert.certificateImage ? (
                  selectedCert.certificateImage.endsWith(".pdf") ? (
                    <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl mb-4">📄</div>
                        <p className="text-lg font-medium mb-2">PDF Certificate</p>
                        <p className="text-sm text-muted-foreground mb-4">Click the button below to view the full certificate</p>
                        <Button asChild>
                          <a href={selectedCert.certificateImage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink size={16} />
                            Open PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedCert.certificateImage}
                      alt={`${selectedCert.name} Certificate`}
                      className="max-w-full max-h-96 object-contain rounded-lg shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "block";
                      }}
                    />
                  )
                ) : (
                  <div className="text-center py-12">
                    <Award className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-lg font-medium">Certificate Image Not Available</p>
                    <p className="text-sm text-muted-foreground">The certificate image will be displayed here once uploaded.</p>
                  </div>
                )}

                {/* Fallback message for broken images */}
                <div style={{ display: "none" }} className="text-center py-12">
                  <Award className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">Certificate Image Not Found</p>
                  <p className="text-sm text-muted-foreground">The certificate image could not be loaded. Please check the file path.</p>
                </div>
              </div>

              {selectedCert.description && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">About this certification:</h4>
                  <p className="text-sm text-muted-foreground">{selectedCert.description}</p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
