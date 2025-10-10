export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  features?: string[];
  showcaseImages?: string[];
  challenges?: string;
  solution?: string;
  outcome?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "nutapos",
    title: "Nutapos",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and mobile-first design.",
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
    id: "bajet",
    title: "Bajet - Cashflow Management App",
    description: "A modern Android app to help users manage their income, expenses, and monthly budget efficiently. Built using Jetpack Compose, Room, Kotlin Flow, and MVVM architecture.",
    tech: ["Jetpack Compose", "Room", "Kotlin Flow", "MVVM", "Hilt", "DataStore", "Material 3"],
    github: "https://github.com/notsatria/bajet.git",
    image: "src/assets/projects/bajet.png",
    features: ["Add/Edit/Delete income and expenses", "Monthly budget setup", "Cashflow summary graphs", "Analytics and reports", "Dark mode support"],
    showcaseImages: ["src/assets/projects/bajet.png"],
    challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency and handling offline scenarios.",
    solution: "Used Socket.io for real-time communication, implemented optimistic UI updates, and added proper error handling and retry mechanisms.",
    outcome: "A robust task management platform used by multiple teams, increasing productivity by 40% and reducing project completion time.",
  },
  {
    id: "warkat",
    title: "Warkat - Remittance App",
    description: "A remittance simulation app that allows users to send and receive money internationally with ease. Built with Jetpack Compose",
    tech: ["Jetpack Compose", "Retrofit", "Hilt", "Datastore", "Material 3"],
    github: "https://github.com/notsatria/warkat.git",
    image: "/assets/ecommerce-preview.jpg",
    features: ["Authentication with JWT", "Send and receive money internationally", "Real-time transaction status updates", "Transaction history and receipts", "User profile management"],
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
  {
    id: "supachat",
    title: "Supachat - Realtime Chat App",
    description: "Real-time chat app built with Jetpack Compose, Supabase, and Firebase Cloud Messaging.",
    tech: ["Jetpack Compose", "Supabase Database", "Supabase Auth", "Supabase Functions", "Firebase Cloud Messaging", "Datastore", "MVVM"],
    github: "https://github.com/notsatria/supachat.git",
    image: "src/assets/projects/supachat.png",
  },
  {
    id: "sepathu",
    title: "Sepathu - Shoe Store App",
    description: "A modern e-commerce app for buying and selling shoes. Built with Jetpack Compose.",
    tech: ["Jetpack Compose", "Room", "MVVM"],
    github: "https://github.com/notsatria/sepathu-compose.git",
    image: "src/assets/projects/sepathu.png",
  },
  {
    id: "muuvis",
    title: "Muuvis - Movie App",
    description: "A movie app that provides information about movies, including details, trailers, and reviews. Built with Jetpack Compose and TMDB API.",
    tech: ["Android XML", "Retrofit", "Hilt", "Datastore", "Material 3"],
    github: "https://github.com/notsatria/muuvis.git",
    image: "src/assets/projects/muuvis.png",
  },
  {
    id: "kaloree",
    title: "Kaloree - Calorie Tracker App",
    description: "A calorie tracker app that helps users monitor their daily calorie intake and manage their diet effectively based on image classification. Built with Flutter and TensorFlow Lite.",
    tech: ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "Bloc", "Clean Architecture"],
    github: "https://github.com/notsatria/kaloree.git",
    image: "src/assets/projects/kaloree.png",
  },
  {
    id: "avd-manager",
    title: "AVD Manager - Android Virtual Device Manager",
    description: "A desktop application to manage Android Virtual Devices (AVDs) easily. Built with Flutter.",
    tech: ["Flutter", "Dart", "Provider"],
    github: "https://github.com/notsatria/avd-manager-desktop.git",
    image: "src/assets/projects/avd_manager.png",
    demo: "https://youtu.be/-Sg0ZgUS3lA?si=99amMtvxj1aqmCiC",
  },
];
