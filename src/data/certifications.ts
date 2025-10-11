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
    id: "bangkit-academy",
    name: "Bangkit Academy Graduate - Android Learning Path",
    issuer: "Bangkit Academy",
    date: "Jul 2024",
    credentialId: "BA24/GRAD/XXIV-07/A338D4KY3877",
    certificateImage: "/assets/certificates/bangkit.pdf",
    description: "Bangkit is a Google-led academy designed to produce high-caliber technical talent for world-class Indonesian technology companies and startups.",
  },
  {
    id: "android-developer-expert",
    name: "Menjadi Android Developer Expert",
    issuer: "Dicoding Indonesia",
    date: "Oct 2024",
    credentialId: "JLX1425JJX72",
    url: "https://www.dicoding.com/certificates/JLX1425JJX72",
    certificateImage: "/assets/certificates/dicoding_android_expert.pdf",
  },
  {
    id: "android-jetpack-compose",
    name: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
    issuer: "Dicoding Indonesia",
    date: "Oct 2024",
    credentialId: "53XEQOK5VXRN",
    url: "https://www.dicoding.com/certificates/53XEQOK5VXRN",
    certificateImage: "/assets/certificates/dicoding_android_jetpack_compose.pdf",
  },
  {
    id: "android-intermediate",
    name: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    date: "May 2024",
    credentialId: "KEXL11Y80XG2",
    url: "https://www.dicoding.com/certificates/KEXL11Y80XG2",
    certificateImage: "/assets/certificates/dicoding_android_intermediate.pdf",
  },
  {
    id: "flutter-intermediate",
    name: "Belajar Multi-Platform App Development dengan Flutter",
    issuer: "Dicoding Indonesia",
    date: "March 2024",
    credentialId: "IDCAMP2023/L1-MP-022",
    certificateImage: "/assets/certificates/dicoding_flutter_intermediate.pdf",
  },
];
