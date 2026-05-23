export const personalInfo = {
  name: "Hamna Javed",
  title: "Software Engineer / React Native Developer",
  intro: "React Native Developer with 2+ years of experience building scalable cross-platform mobile applications using React Native, TypeScript, Redux, and REST APIs.",
  email: "hamnajaved351@gmail.com",
  phone: "+92 336 6061195",
  linkedin: "https://www.linkedin.com/in/hamna-javed-648767321",
  github: "https://github.com/myselfhamna",
  socials: [
    { name: "GitHub", url: "https://github.com/myselfhamna", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hamna-javed-648767321", icon: "Linkedin" },
    { name: "Email", url: "mailto:hamnajaved351@gmail.com", icon: "Mail" },
  ],
};

export const aboutData = {
  summary: `With 2+ years of experience in software development, I specialize in building robust and scalable applications. My expertise spans across React Native for cross-platform mobile development, frontend engineering with React and Angular, and backend development using Spring Boot.

  I have hands-on experience with real-time systems, payment integrations, authentication systems, and have worked with Micro Frontend architecture. I'm passionate about creating seamless user experiences and writing clean, maintainable code.

  Currently working at Khired Network, I leverage modern tools and AI-assisted development to deliver high-quality solutions efficiently.`,
};

export const skillsData = {
  frontend: [
    { name: "React", level: 80 },
    { name: "Angular", level: 50 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 85 },
  ],
  mobile: [
    { name: "React Native", level: 95 },
  ],
  backend: [
    { name: "Spring Boot", level: 45 },
    { name: "REST APIs", level: 90 },
  ],
  stateManagement: [
    { name: "Redux", level: 85 },
    { name: "Redux Toolkit", level: 90 },
  ],
  authentication: [
    { name: "Firebase Auth", level: 85 },
    { name: "Google Auth", level: 80 },
    { name: "Apple Auth", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "GitLab", level: 75 },
    { name: "Postman", level: 85 },
  ],
  testing: [
    { name: "Jest", level: 80 },
    { name: "React Testing Library", level: 85 },
  ],
};

export const experienceData = [
  {
    id: 1,
    company: "Khired Networks",
    role: "Software Engineer",
    duration: "Nov 2023 – Present",
    responsibilities: [
      "Worked on Micro Frontend architecture for modular application development",
      "Developed independently deployable modules for enhanced scalability",
      "Built cross-platform mobile applications using React Native",
      "Integrated third-party APIs and libraries for extended functionality",
      "Optimized application performance for better user experience",
      "Used AI-assisted development tools to improve productivity and code quality",
    ],
    technologies: ["React Native", "Micro Frontend", "TypeScript", "Redux", "Spring Boot"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "SimpleRishta",
    description: "A comprehensive matrimony application with secure authentication, real-time communication, payment systems, and identity verification features.",
    featured: true,
    image: "/images/simplerishta.jpeg",
    features: [
      "Google Authentication",
      "User Verification",
      "Face Verification",
      "Real-time Chat",
      "Family Profile Management",
      "Notifications",
      "Image Uploads",
      "Google Pay Integration",
      "Apple Pay Integration",
      "Payment Validation",
      "API Integration",
    ],
    technologies: ["React Native", "Redux", "Firebase", "REST APIs"],
    githubUrl: "https://github.com/myselfhamna",
    appStoreUrl: "https://apps.apple.com/pk/app/simple-rishta/id6736655350",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.simplerishta.app",
  },
  {
    id: 2,
    title: "Smart Workforce",
    description: "An All-in-One Workforce Management Solution for Enhanced Productivity. Meet your entire workforce management needs from a single dashboard and automate scheduling and attendance with our cloud-based, all-in-one HR suite.",
    featured: false,
    image: "/images/smartworkforce.jpeg",
    features: [
      "Employee Attendance",
      "Cloud-based HR Suite",
      "Automated Scheduling",
      "Workforce Dashboard",
      "Single Platform Management",
      "Real-time Monitoring",
    ],
    technologies: ["React Native", "Redux", "REST APIs", "Cloud Integration"],
    githubUrl: "https://github.com/myselfhamna",
    appStoreUrl: "https://apps.apple.com/pk/app/smartworkforce/id1619929579",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kwfmapp",
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];