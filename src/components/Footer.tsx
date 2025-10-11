import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-t bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Damar Satria Buana. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/notsatria" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/damarsatria" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://youtube.com/@notsatriadev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="mailto:notsatria.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
