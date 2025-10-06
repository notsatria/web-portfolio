export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  certificateImage?: string; // Path to certificate image/PDF
  description?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-123456",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    certificateImage: "/assets/certificates/aws-solutions-architect.pdf",
    description: "Validates expertise in designing distributed systems on AWS. Covers compute, networking, storage, and database services.",
  },
  {
    id: "react-developer",
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-789012",
    url: "https://developers.facebook.com/docs/development/",
    certificateImage: "/assets/certificates/react-developer.jpg",
    description: "Demonstrates proficiency in React fundamentals, hooks, state management, and modern React development practices.",
  },
  {
    id: "javascript-algorithms",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    credentialId: "FCC-JS-345678",
    url: "https://freecodecamp.org/certification/",
    certificateImage: "/assets/certificates/javascript-algorithms.jpg",
    description: "Comprehensive understanding of JavaScript programming, algorithms, data structures, and problem-solving techniques.",
  },
  {
    id: "google-cloud-professional",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-DEV-456789",
    url: "https://cloud.google.com/certification/cloud-developer",
    certificateImage: "/assets/certificates/gcp-developer.pdf",
    description: "Expertise in developing scalable applications using Google Cloud Platform services and best practices.",
  },
];
