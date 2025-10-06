export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  detailedDescription?: string;
  features?: string[];
  showcaseImages?: string[];
  challenges?: string;
  solution?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and mobile-first design.",
    detailedDescription:
      "This portfolio website showcases my skills and projects in web development. Built with modern technologies and best practices, it features a responsive design, smooth animations, and an intuitive user experience. The site includes sections for projects, experience, certifications, and contact information.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "/assets/portfolio-preview.jpg",
    features: ["Responsive design with mobile-first approach", "Smooth animations using Framer Motion", "Modern UI with shadcn/ui components", "TypeScript for type safety", "Optimized performance with Vite", "SEO-friendly structure"],
    showcaseImages: ["/assets/projects/portfolio/portfolio-desktop-1.jpg", "/assets/projects/portfolio/portfolio-desktop-2.jpg", "/assets/projects/portfolio/portfolio-mobile-1.jpg", "/assets/projects/portfolio/portfolio-mobile-2.jpg"],
    challenges: "Creating a visually appealing and performant website that works seamlessly across all device sizes while maintaining clean, maintainable code.",
    solution: "Used Tailwind CSS for consistent styling, Framer Motion for smooth animations, and TypeScript for better code quality. Implemented a component-based architecture for reusability.",
    outcome: "A fully responsive, fast-loading portfolio website that effectively showcases projects and skills while providing an excellent user experience.",
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
    detailedDescription:
      "A comprehensive task management solution that allows teams to collaborate effectively. The application features real-time updates, user authentication, project organization, and task tracking capabilities. Built with modern full-stack technologies for scalability and performance.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
    image: "/assets/task-manager-preview.jpg",
    features: [
      "Real-time collaborative task management",
      "User authentication and authorization",
      "Project and team organization",
      "Drag-and-drop task interface",
      "File attachments and comments",
      "Email notifications and reminders",
      "Progress tracking and analytics",
    ],
    showcaseImages: [
      "/assets/projects/task-manager/dashboard-overview.jpg",
      "/assets/projects/task-manager/project-board.jpg",
      "/assets/projects/task-manager/task-details.jpg",
      "/assets/projects/task-manager/team-collaboration.jpg",
      "/assets/projects/task-manager/mobile-app.jpg",
    ],
    challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency and handling offline scenarios.",
    solution: "Used Socket.io for real-time communication, implemented optimistic UI updates, and added proper error handling and retry mechanisms.",
    outcome: "A robust task management platform used by multiple teams, increasing productivity by 40% and reducing project completion time.",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with payment integration, inventory management, and admin dashboard.",
    detailedDescription:
      "A complete e-commerce solution featuring a customer-facing storefront, comprehensive admin dashboard, and integrated payment processing. The platform supports multiple product categories, inventory management, order processing, and detailed analytics.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    image: "/assets/ecommerce-preview.jpg",
    features: [
      "Complete storefront with product catalog",
      "Secure payment processing with Stripe",
      "Inventory management system",
      "Order tracking and management",
      "Admin dashboard with analytics",
      "Customer account management",
      "Responsive design for all devices",
      "SEO optimization for better visibility",
    ],
    showcaseImages: [
      "/assets/projects/ecommerce/homepage.jpg",
      "/assets/projects/ecommerce/product-listing.jpg",
      "/assets/projects/ecommerce/product-details.jpg",
      "/assets/projects/ecommerce/shopping-cart.jpg",
      "/assets/projects/ecommerce/checkout-process.jpg",
      "/assets/projects/ecommerce/admin-dashboard.jpg",
    ],
    challenges: "Building a secure, scalable platform that handles high traffic, processes payments safely, and manages complex inventory operations.",
    solution: "Implemented Next.js for server-side rendering, used Prisma for type-safe database operations, and integrated Stripe for secure payment processing.",
    outcome: "Successfully launched platform processing $100K+ in monthly transactions with 99.9% uptime and positive user feedback.",
  },
];
