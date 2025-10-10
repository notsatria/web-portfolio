export interface Experience {
  id: string;
  company: string;
  position: string;
  jobType?: string;
  duration: string;
  description?: string;
  bulletPoints?: string[];
  tech: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    id: "android-developer",
    company: "Nutapos (PT. Nusantara Berkah Digital)",
    position: "Android Developer",
    duration: "Aug 2024 - Present",
    description:
      "Contributed to the full development lifecycle of the Nutapos Point-of-Sale (POS) application for the Android platform. Key responsibilities included developing new features, resolving critical bugs, and optimizing performance to enhance user experience on both mobile phone and tablet devices.",
    bulletPoints: [
      "Successfully designed, developed, and shipped 50+ new features for both the mobile and tablet versions of the Nutapos application.",
      "Enhanced application stability and performance by resolving over 200 bug fixes, ranging from minor UI issues to critical performance flaws.",
      "Managed and optimized the codebase to support adaptive layouts, ensuring a consistent user experience across all targeted Android devices.",
      "Collaborated with cross-functional teams (UI/UX, QA) to translate business requirements into reliable technical solutions.",
    ],
    jobType: "Full-time",
    tech: ["Android", "XML", "Kotlin", "Git", "Jira", "Bitbucket"],
    location: "Yogyakarta, Indonesia",
  },
  {
    id: "flutter-developer",
    company: "Fitacademy (PT. Sebangku Jaya Abadi)",
    position: "Flutter Developer",
    duration: "Aug 2023 - Dec 2023",
    bulletPoints: [
      "Responsible for leading the Mobile Apps Developer team developing Fitacademy, a micro-learning platform released on Play Store using Flutter.",
      "Contributed to integrating API to mobile application, reducing the time required for new feature implementation by 20%.",
      "Participated in brainstorming sessions and provided innovative solutions to technical challenges, leading to the adoption of new technologies and improved development workflows.",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST API", "Git", "Github"],
    jobType: "Internship",
    location: "Yogyakarta, Indonesia",
  },
];
