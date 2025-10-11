import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:motsatria.email@example.com";
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to work together!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Let's Talk
              </CardTitle>
              <CardDescription>I'm always open to discussing new opportunities, projects, or just having a chat about technology.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleEmailClick} className="w-full">
                Send me an email
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Connect With Me
              </CardTitle>
              <CardDescription>Find me on these platforms or reach out directly via email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <a href="https://github.com/notsatria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={16} />
                  github.com/notsatria
                </a>
                <a href="https://linkedin.com/in/damarsatria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={16} />
                  linkedin.com/in/damarsatria
                </a>
                <a href="https://youtube.com/@notsatriadev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Youtube size={16} />
                  youtube.com/@notsatriadev
                </a>
                <a href="mailto:notsatria.dev@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} />
                  notsatria.dev@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
