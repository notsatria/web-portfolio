import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (!isHomePage) {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handleGistsClick = () => {
    navigate("/gists");
    setIsOpen(false);
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold cursor-pointer hover:text-primary transition-colors" onClick={handleLogoClick}>
            Damar Satria Buana
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {isHomePage &&
              navItems.map((item) => (
                <button key={item.href} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary transition-colors">
                  {item.label}
                </button>
              ))}
            <button onClick={handleGistsClick} className="text-foreground hover:text-primary transition-colors font-medium">
              Gists
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden py-4 space-y-4">
            {isHomePage &&
              navItems.map((item) => (
                <button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left text-foreground hover:text-primary transition-colors">
                  {item.label}
                </button>
              ))}
            <button onClick={handleGistsClick} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Gists
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
