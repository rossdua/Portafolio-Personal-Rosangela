import { Project, Skill, Experience, SocialLink } from "@/types/portfolio";

export const personalInfo = {
  name: "Rosangela Brito",
  title: "Desarrolladora Full Stack",
  subtitle: "Creando experiencias digitales innovadoras",
  description:
    "Soy una desarrolladora apasionada con experiencia en desarrollo web moderno, especializada en crear aplicaciones web escalables y experiencias de usuario excepcionales.",
  email: "rosangela.brito@example.com",
  phone: "+1 (555) 123-4567",
  location: "Ciudad, País",
  profileImage: "/placeholder.svg",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con panel de administración, carrito de compras, y procesamiento de pagos.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    githubUrl: "https://github.com/rosangela/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    githubUrl: "https://github.com/rosangela/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/rosangela/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "Sitio web de portfolio personal con diseño moderno y animaciones suaves.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    githubUrl: "https://github.com/rosangela/portfolio",
    liveUrl: "https://rosangela-portfolio.com",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "Vue.js", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "TailwindCSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Python", level: 75, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Webpack/Vite", level: 80, category: "tools" },
  { name: "Jest/Vitest", level: 75, category: "tools" },

  // Design
  { name: "Figma", level: 80, category: "design" },
  { name: "Adobe XD", level: 75, category: "design" },
  { name: "UI/UX Design", level: 85, category: "design" },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Innovation Co.",
    position: "Senior Frontend Developer",
    duration: "2022 - Presente",
    description: [
      "Lideré el desarrollo de aplicaciones web complejas usando React y TypeScript",
      "Implementé mejores prácticas de desarrollo y arquitectura de componentes",
      "Colaboré con equipos multidisciplinarios para entregar productos de alta calidad",
      "Mentoré a desarrolladores junior y conduje revisiones de código",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "TailwindCSS"],
  },
  {
    id: "2",
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Desarrollé aplicaciones web full-stack desde la conceptualización hasta la implementación",
      "Optimicé el rendimiento de aplicaciones existentes, mejorando la velocidad de carga en un 40%",
      "Implementé APIs RESTful y integré servicios de terceros",
      "Participé en la planificación y estimación de proyectos",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "3",
    company: "Startup Ventures",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: [
      "Construí interfaces de usuario responsivas y accesibles",
      "Trabajé en estrecha colaboración con diseñadores UX/UI",
      "Implementé animaciones y microinteracciones para mejorar la experiencia de usuario",
      "Contribuí a la creación de un sistema de diseño consistente",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Figma"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rosangela",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rosangela-brito",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rosangela_dev",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:rosangela.brito@example.com",
    icon: "Mail",
  },
];
