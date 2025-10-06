export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  tech: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    id: "senior-developer",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    description: "Lead development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions and mentored junior developers.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    location: "San Francisco, CA",
  },
  {
    id: "fullstack-developer",
    company: "Digital Innovations",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained full-stack web applications using modern technologies. Implemented RESTful APIs and optimized database performance for better user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    location: "New York, NY",
  },
  {
    id: "junior-developer",
    company: "StartupXYZ",
    position: "Junior Frontend Developer",
    duration: "2019 - 2020",
    description: "Built responsive user interfaces and implemented interactive features for web applications. Gained experience in agile development methodologies and version control systems.",
    tech: ["JavaScript", "HTML5", "CSS3", "Vue.js", "Git"],
    location: "Austin, TX",
  },
];
