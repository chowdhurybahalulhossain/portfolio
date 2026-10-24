export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  contributions: string[];
  achievements: string[];
  githubUrl: string;
  demoUrl?: string;
  architectureHighlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration?: string;
  responsibilities: string[];
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
  field?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const resumeData = {
  personal: {
    name: "BAHALUL HOSSAIN CHOWDHURY",
    shortName: "Bahalul Hossain",
    title: "Full-Stack Developer & Software Engineer",
    targetRoles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend Developer",
      "Junior Software Engineer"
    ],
    location: "Dhaka, Bangladesh",
    phone: "01921806099",
    phoneFormatted: "+880 1921 806099",
    email: "utshobchowdhury35@gmail.com",
    github: "https://github.com/chowdhurybahalulhossain",
    linkedin: "https://www.linkedin.com/in/chowdhury-bahalul-hossain-a78738361/",
    profilePhoto: "/bahalul_portrait.jpg",
    resumePdf: "/Bahalul_Hossain_Chowdhury_Resume.pdf",
    summary:
      "Computer Science and Engineering graduate from IUBAT (CGPA 3.10/4.00) with 7 months of professional software support experience and hands-on full-stack web development experience. Experienced with JavaScript, Node.js, Express.js, React, PostgreSQL, MSSQL, Socket.io, authentication, and database-driven applications. Currently learning Python and seeking Software Engineer, Backend Developer, Full-Stack Developer, or Junior Software Engineer opportunities.",
  },

  skills: {
    languages: [
      { name: "JavaScript", level: "Primary", highlight: true },
      { name: "C", level: "Foundation" },
      { name: "C++", level: "Foundation" },
      { name: "Python", level: "Currently Learning", badge: "Learning" },
    ],
    frontend: [
      { name: "React", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
    ],
    backend: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Socket.io", highlight: true },
    ],
    databases: [
      { name: "PostgreSQL", highlight: true },
      { name: "Microsoft SQL Server (MSSQL)", highlight: true },
    ],
    tools: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Postman", highlight: true },
    ],
    concepts: [
      { name: "MVC Architecture", highlight: true },
      { name: "Authentication", highlight: true },
      { name: "JWT", highlight: true },
      { name: "Role-Based Authorization", highlight: true },
      { name: "REST API Development", highlight: true },
    ],
  },

  experiences: [
    {
      company: "3S Softtech Limited",
      role: "Junior Software Support Engineer",
      period: "November 2025 – May 2026",
      duration: "7 Months",
      responsibilities: [
        "Installed, configured, and maintained software/tools for internal or client systems.",
        "Documented recurring technical issues and solutions for the support team.",
        "Analyzed operational workflows to minimize downtime and enhance client-side issue resolution.",
      ],
      highlights: [
        "Delivered hands-on client and system infrastructure support",
        "Created systematic technical knowledge documentation for recurring issues",
      ],
      technologies: ["System Configuration", "Client Support", "Technical Documentation", "Tool Maintenance"],
    },
    {
      company: "SkyTech Limited",
      role: "Junior Executive",
      period: "July – October 2026",
      duration: "4 Months",
      responsibilities: [
        "Called and qualified sales leads for a telesales team and consistently met assigned sales targets.",
        "Conducted professional verbal communications, client requirements qualification, and follow-ups.",
      ],
      highlights: [
        "Consistently attained and exceeded assigned sales quotas",
        "Demonstrated strong interpersonal, verbal, and persuasive communication skills",
      ],
      technologies: ["Lead Qualification", "Client Communication", "Target Achievement", "Sales Pipeline"],
    },
  ] as Experience[],

  projects: [
    {
      id: "linkup",
      name: "LinkUp",
      tagline: "Real-Time Chat Application",
      category: "Full-Stack Real-Time System",
      description:
        "A full-stack real-time chat application using Node.js, Express, Socket.io, and PostgreSQL, enabling instant message delivery without page refresh with comprehensive security and rich interactive features.",
      technologies: [
        "Node.js",
        "Express.js",
        "Socket.io",
        "PostgreSQL",
        "bcrypt",
        "WebSockets",
        "Sessions",
      ],
      contributions: [
        "Engineered instant bidirectional messaging using Socket.io and PostgreSQL without page refresh.",
        "Implemented secure authentication with bcrypt password hashing and persistent server-side sessions.",
        "Developed rich interactive features including image sharing, custom emoji picker, live typing indicators, online-user presence, and light/dark theme customization.",
      ],
      achievements: [
        "Real-time event broadcasting with low-latency WebSocket connections",
        "Zero data-loss message logging with relational PostgreSQL persistence",
        "Responsive UI with dynamic dark/light theme switching",
      ],
      architectureHighlights: [
        "WebSocket Event Gateway for instantaneous message dispatching",
        "Bcrypt salted hashing with session-based state management",
        "Relational message history queries with indexing",
      ],
      githubUrl: "https://github.com/chowdhurybahalulhossain/realtime-chat-app",
    },
    {
      id: "plugnplay",
      name: "PlugNPlay",
      tagline: "E-Commerce Store & Admin Management Platform",
      category: "Full-Stack E-Commerce & MVC",
      description:
        "A full-stack e-commerce application built with Node.js, Express, PostgreSQL, and MVC architecture featuring a normalized relational schema, role-based security, admin controls, and Stripe payment integration.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MVC Architecture",
        "JWT",
        "Stripe API",
        "REST API",
      ],
      contributions: [
        "Built full-stack e-commerce application using Node.js, Express, PostgreSQL, and MVC architecture with a normalized schema for products, carts, and orders.",
        "Implemented JWT authentication and role-based authorization for customer/admin accounts using protected middleware routes.",
        "Built an interactive admin panel for product inventory and order lifecycle management and integrated Stripe payment processing.",
      ],
      achievements: [
        "Protected endpoint routing using custom JWT authorization middleware",
        "Secure checkout workflow with Stripe payment tokenization and webhooks",
        "Normalized 3NF relational PostgreSQL schema for orders, carts, and inventory",
      ],
      architectureHighlights: [
        "Clean Model-View-Controller (MVC) modular directory structure",
        "Role-Based Access Control (RBAC) separating regular shoppers from admin operations",
        "Transaction-safe order processing and inventory deduction",
      ],
      githubUrl: "https://github.com/chowdhurybahalulhossain/PlugNPlay-Ecommerce-Store",
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Science and Engineering (BCSE)",
      institution: "IUBAT — International University of Business Agriculture and Technology",
      period: "2022 – 2026",
      result: "CGPA: 3.10 / 4.00",
      field: "Computer Science & Engineering",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gazipur Metropolitan College",
      period: "2018 – 2020",
      result: "GPA: 5.00 / 5.00 (Golden / Perfect Score)",
      field: "Science",
    },
  ] as Education[],

  certifications: [
    {
      title: "Frontend Developer Certificate",
      issuer: "Creative IT",
      year: "2022",
    },
    {
      title: "SQL Certificate",
      issuer: "Creative IT",
      year: "2023",
    },
    {
      title: "Graphics Design Course",
      issuer: "Creative IT",
      year: "2023",
    },
  ] as Certification[],

  leadership: {
    role: "Senior Vice President",
    organization: "Cultural Club — Gazipur Metropolitan College",
    duration: "1 Year",
    impact:
      "Led student cultural initiatives, organized events, and managed team coordination, demonstrating strong cross-functional communication and leadership.",
  },

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Bangla", proficiency: "Native / Bilingual" },
  ],
};
