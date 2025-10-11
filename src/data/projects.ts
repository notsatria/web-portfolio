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
    description: "Modern look Android Point-of-Sale (POS) application for mobile and tablet devices, developed using Kotlin and XML. Feature-rich with a focus on usability and performance.",
    tech: ["Android", "Kotlin", "XML", "MVVM", "Hilt", "Retrofit", "Room", "Datastore", "Material 3"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "/assets/projects/nutapos-1.png",
    features: [
      "User-friendly interface with intuitive navigation",
      "Comprehensive sales and stock management",
      "Create transactions with multiple payment methods",
      "Generate detailed sales reports",
      "Support for multiple user roles and permissions across devices",
    ],
    showcaseImages: ["/assets/projects/nutapos-1.png"],
  },
  {
    id: "bajet",
    title: "Bajet - Cashflow Management App",
    description: "A modern Android app to help users manage their income, expenses, and monthly budget efficiently. Built using Jetpack Compose, Room, Kotlin Flow, and MVVM architecture.",
    tech: ["Jetpack Compose", "Room", "Kotlin Flow", "MVVM", "Hilt", "DataStore", "Material 3"],
    github: "https://github.com/notsatria/bajet.git",
    image: "assets/projects/bajet-1.png",
    features: ["Add/Edit/Delete income and expenses", "Monthly budget setup", "Cashflow summary graphs", "Analytics and reports", "Dark mode support"],
    showcaseImages: ["assets/projects/bajet-1.png"],
  },
  {
    id: "warkat",
    title: "Warkat - Remittance App",
    description: "A remittance simulation app that allows users to send and receive money internationally with ease. Built with Jetpack Compose",
    tech: ["Jetpack Compose", "Retrofit", "Hilt", "Datastore", "Material 3"],
    github: "https://github.com/notsatria/warkat.git",
    image: "/assets/projects/warkat-1.png",
    features: ["Authentication with JWT", "Send and receive money internationally", "Real-time transaction status updates", "Transaction history and receipts", "User profile management"],
    showcaseImages: ["/assets/projects/warkat-1.png"],
  },
  {
    id: "supachat",
    title: "Supachat - Realtime Chat App",
    description: "Real-time chat app built with Jetpack Compose, Supabase, and Firebase Cloud Messaging.",
    tech: ["Jetpack Compose", "Supabase Database", "Supabase Auth", "Supabase Functions", "Firebase Cloud Messaging", "Datastore", "MVVM"],
    github: "https://github.com/notsatria/supachat.git",
    image: "assets/projects/supachat-1.png",
    features: ["Real-time messaging", "User authentication", "Push notifications", "Media sharing", "User profiles"],
    showcaseImages: ["assets/projects/supachat-1.png"],
  },
  {
    id: "sepathu",
    title: "Sepathu - Shoe Store App",
    description: "A modern e-commerce app for buying and selling shoes. Built with Jetpack Compose.",
    tech: ["Jetpack Compose", "Room", "MVVM"],
    github: "https://github.com/notsatria/sepathu-compose.git",
    image: "assets/projects/sepathu-1.png",
    features: ["Browse shoe catalog", "Add to cart and checkout"],
    showcaseImages: ["assets/projects/sepathu-1.png"],
  },
  {
    id: "muuvis",
    title: "Muuvis - Movie App",
    description: "A movie app that provides information about movies, including details, trailers, and reviews. Built with Jetpack Compose and TMDB API.",
    tech: ["Android XML", "Retrofit", "Hilt", "Datastore", "Material 3"],
    github: "https://github.com/notsatria/muuvis.git",
    image: "assets/projects/muuvis-1.png",
    features: ["Browse popular and top-rated movies", "Search for movies", "View movie details and trailers", "User reviews and ratings"],
    showcaseImages: ["assets/projects/muuvis-1.png"],
  },
  {
    id: "kaloree",
    title: "Kaloree - Calorie Tracker App",
    description: "A calorie tracker app that helps users monitor their daily calorie intake and manage their diet effectively based on image classification. Built with Flutter and TensorFlow Lite.",
    tech: ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "Bloc", "Clean Architecture"],
    github: "https://github.com/notsatria/kaloree.git",
    image: "assets/projects/kaloree-1.png",
    features: ["Image-based food recognition", "Calorie tracking and history", "Personalized diet recommendations", "User authentication and profile management"],
    showcaseImages: ["assets/projects/kaloree-1.png"],
  },
  {
    id: "avd-manager",
    title: "AVD Manager - Android Virtual Device Manager",
    description: "A desktop application to manage Android Virtual Devices (AVDs) easily. Built with Flutter.",
    tech: ["Flutter", "Dart", "Provider"],
    github: "https://github.com/notsatria/avd-manager-desktop.git",
    image: "assets/projects/avd-manager-1.png",
    demo: "https://youtu.be/-Sg0ZgUS3lA?si=99amMtvxj1aqmCiC",
    features: ["Start and stop AVDs", "Connect to AVD via ADB"],
    showcaseImages: ["assets/projects/avd-manager-1.png"],
  },
];
