export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and mobile-first design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "/assets/portfolio-preview.jpg",
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
    image: "/assets/task-manager-preview.jpg",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    image: "/assets/ecommerce-preview.jpg",
  },
];
