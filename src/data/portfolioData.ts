export const personalInfo = {
  name: "MOHAMED HAKI",
  title: "Mern Stack Developer",
  image: "/uploads/Mypicture.png",
  bio: "Développeur Full-Stack spécialisé dans la stack MERN (MongoDB, Nestjs, Express.js, React.js, Node.js), avec une solide expérience dans le développement d'applications web performantes, évolutives et sécurisées. Expert en conception d'API RESTful, intégration de JWT pour l'authentification, et développement d'interfaces utilisateurs réactives. Passionné par les pratiques de développement agile.",
  email: "mohamedhaki70@gmail.com",
  phone: "+212-644725030",
  location: "Maroc",
  social: {
    github: "HakiMohamed",
    linkedin: "mohamed-haki-64534a204",
    twitter: "mohamedhaki70"
  },
  // Code snippet to explain my skills and passions
  codeSnippet: `// intro 
  const developer = {
    name: "Mohamed Haki",
    stack: ["MongoDB", "Express.js", "Nestjs", "React.js", "Node.js"],
    passions: ["Clean Code", "backend development", "Debugging at 2AM"],
    bio: "Full-stack developer. Writes bugs faster than anyone can fix them (just kidding, I squash bugs too).",
    skills: [
      "Web Dev (AKA making buttons do things)",
      "Mobile Apps (for when the web isn't enough)",
      "APIs (because someone has to connect the dots)",
      "Management Software (yes, even for the managers)",
      "UX Solutions (designing buttons that users can't resist clicking)",
    ],
  
    introduce() {
      console.log(\`👨‍💻 Hi, I'm \${this.name}, your friendly neighborhood developer!\`);
      console.log(\`💼 My Stack: \${this.stack.join(", ")} (all the buzzwords included).\`);
      console.log(\`🎯 Passions: \${this.passions.join(", ")} - basically coding, designing, and caffeinating.\`);
      console.log(\`🌟 Bio: \${this.bio}\`);
      console.log(\`🛠️ Skills: Making apps, breaking apps, and then fixing them (eventually).\`);
    },
  };
  
  // Call the introduce method
  developer.introduce();
  `,
  
  terminalCommands: [
    { command: "npm install mern-stack", output: "Installing MERN dependencies..." },
    { command: "mohamed --version", output: "MERN Developer v3.0.0" },
    { command: "mohamed --skills", output: "Loading extensive skill set..." }
  ]
};


export const experiences = [
  {
    id: "1",
    title: "Développeur Full-Stack PHP Symfony",
    logo: "/uploads/logosPchalle.png",
    company: "PC HALLE Tanger",
    period: "13 Mai 2022 - 13 Juillet 2024",
    description: "Mise en place d'un système de plugins pour la plateforme de création de boutiques en ligne permettant aux utilisateurs de personnaliser et d'intégrer des fonctionnalités tierces.",
    technologies: ["PHP", "Symfony 6.4", "twig", "javascript", "mysql", "TailwindCss"],
    codeSnippet: `// Developer working with Symfony Plugin System
    class Developer {
      constructor(name) { 
        this.name = name; 
      }
    
      work() { 
        console.log(\`\${this.name} says: "I’m making plugins with Symfony, so users can add their own stuff... Like that time I added a '404 Not Found' page to the homepage!"\`);
      }
    }
    
    const dev = new Developer("Mohamed Haki");
    dev.work();`,
    metrics: {
      teamSize: 5,
      codeReviews: 45,
      deployments: 12,
      uptime: "99.9%",
    }
  },
  {
    id: "2",
    title: "Etudiant Développeur Full-Stack",
    company: "YouCode UM6P",
    logo: "/uploads/logosYoucode.png",
    period: "2023 - 2025",
    description: "Etudiant en développement full-stack à YouCode UM6P, une école innovante où l'apprentissage est basé sur une pédagogie par projets, favorisant la collaboration en équipe et le développement des compétences techniques et humaines.",
    technologies: [
      "React",
      "Nestjs",
      "Express.js",
      "Node.js",
      "PHP",
      "Laravel",
      "WebSocket",
      "MongoDB",
      "Jest",
      "Docker",
      "AWS",
      "EC2",
      "S3",
      "Cognito",
      "API Gateway",
      "Lambda",
      "SNS",
      "SQS",
      "Symfony",
      "Twig",
      "JavaScript",
      "MySQL",
      "TailwindCss"
    ],
    codeSnippet: `// Collaborative Project Management Simulation
  const projectWorkflow = (team) => {
    const tasks = ["Frontend Development", "Backend Development", "Database Design", "Testing", "Deployment"];
    
    console.log("🚀 YouCode Project Workflow");
    
    team.forEach((member, index) => {
      console.log(\`👤 Member: \${member.name} | Role: \${member.role}\`);
      console.log(\`Assigned Task: \${tasks[index % tasks.length]}\`);
    });
    
    console.log("🔄 Collaboration and Iterative Feedback:");
    tasks.forEach((task) => {
      console.log(\`✔️ Task Completed: \${task} | Reviewed and Improved by Team.\`);
    });
  
    console.log("✅ Final Project Delivered Successfully!");
  };
  
  // Example Team
  const team = [
    { name: "Mohamed Haki", role: "Full-Stack Developer" },
    { name: "El morjani Mohamed", role: "UI/UX Designer" },
    { name: "Mohamed tergui", role: "Backend Developer" },
    { name: "Oussama ben maazi", role: "Frontend Developer" },
    { name: "Yassine Fakihi", role: "DevOps Engineer" }
  ];
  
  projectWorkflow(team);`,
    metrics: {
      teamSize: 6,
      codeReviews: 120,
      deployments: 24,
      uptime: "99.8%"
    }
  }
  
];

export const skills = [
  {
    name: "Frontend",
    level: 90,
    category: "Development",
    icon: "🎨",
    description: "Développement d'interfaces utilisateur modernes et réactives",
    experience: "2 ans",
    projects: 15,
    technologies: [
      { name: "React.js", level: 90, projects: 10 },
      { name: "Vuejs", level: 85, projects: 5 },
      { name: "TailwindCSS", level: 90, projects: 12 },
      { name: "Bootstrap", level: 85, projects: 8 },
      { name: "Jquery", level: 80, projects: 2 },
      { name: "Nextjs", level: 80, projects: 2 },
    ]
  },
  {
    name: "Backend",
    level: 85,
    category: "Development",
    icon: "⚙️",
    description: "Développement de serveurs et APIs robustes",
    experience: "2 ans",
    projects: 12,
    technologies: [
      { name: "Node.js", level: 85},
      { name: "Express.js", level: 90, projects: 5 },
      { name: "MongoDB", level: 85 },
      { name: "Nestjs", level: 80, projects: 5 },
      { name: "Laravel", level: 80, projects: 10 },
      { name: "Symfony", level: 80, projects: 3 },
    ]
  },
  {
    name: "DevOps",
    level: 75,
    category: "Operations",
    icon: "🚀",
    description: "Déploiement et gestion d'applications",
    experience: "2 ans",
    projects: 10,
    technologies: [
      { name: "Docker", level: 80, projects: 6 },
      { name: "AWS", level: 75, projects: 4 },
      { name: "EC2", level: 75, projects: 4 },
      { name: "S3", level: 70, projects: 3 },
      { name: "Cognito", level: 70, projects: 3 },
      { name: "API Gateway", level: 70, projects: 3 },
      { name: "Lambda", level: 70, projects: 3 },
      { name: "SNS", level: 70, projects: 3 },
      { name: "SQS", level: 70, projects: 3 },
      { name: "RDS", level: 70, projects: 3 },
    ]
  },
  {
    name: "Database",
    level: 70,
    category: "Database",
    icon: "🗄️",
    description: "Gestion des bases de données",
    experience: "2 ans",
    projects: 8,
    technologies: [
      { name: "MySQL", level: 80, projects: 15 },
      { name: "MongoDB", level: 75, projects: 16 },
      { name: "PostgreSQL", level: 70, projects: 10 },
      { name: "SQLite", level: 65, projects: 5 },
    ]
  }
];

export const education = [
  {
    id: "1",
    logo: "/uploads/logosYoucode.png",
    logo2: "/uploads/Logo_simplon.co.svg",
    institution: "YouCode UM6P",
    degree: "Formation Développeur Full-Stack",
    period: "2023 - 2025",
    description: "Formation intensive en développement web full-stack avec YouCode UM6P et Simplon.co, basée sur une pédagogie active et des projets réels simulés. Ce programme, conçu pour refléter les exigences du monde professionnel, met l'accent sur la collaboration en équipe, la gestion de projets, et l'utilisation d'outils et méthodologies agiles, comme dans une entreprise tech moderne. Idéal pour développer des compétences techniques et professionnelles prêtes à l'emploi."
  },
  {
    id: "2",
    logo: "/uploads/logosCadiayad.png",
    institution: "FSJES Cadi ayad",
    degree: "Etudes en Droit",
    period: "2020/2022",
    description: "Étudiant en troisième année au Département de droit en français à Marrakech"
  },
  {
    id: "3",
    institution: "Lycée AL MASSIRA",
    degree: "Baccalauréat",
    period: "2020",
    location: "TATA",
    description: "Baccalauréat en sciences humaines "
  }
];

export const languages = [
 
  {
    language: "Français",
    level: "Intermédiaire",
    proficiency: 70
  },
  {
    language: "Anglais",
    level: "Intermédiaire",
    proficiency: 50
  },
  {
    language: "Arabe",
    level: "Langue maternelle",
    proficiency: 100
  }
];

export const interests = [
  "Développement d'API",
  "Développement d'Applications Web",
  "Développement d'Applications Mobile",
  "Développement d'Applications de Gestion",
];

export const softSkills = [
  "Sens de l'Initiative",
  "Adaptabilité",
  "Travail en Équipe",
  "Motivation",
  "Résolution de problèmes",
  "Organisation",
];

export const projects = [
  {
    id: "1",
    title: "Plateforme de Chat",
    description: "Application de messagerie en temps réel avec microservices",
    image: "/projects/chat-app.png",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB","nestjs","JWT","Docker","AWS","EC2","S3"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Messagerie en temps réel",
      "Authentification sécurisée",
      "Gestion des groupes"
    ]
  },
  {
    id: "2",
    title: "alloMedia",
    description: "Application de livraison à domicile",
    image: "/projects/delivery-app.png",
    technologies: ["React", "Node.js", "MongoDB", "JWT","Tailwindss", "docker","EC2","S3","SNS"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Système de commande",
      "Suivi en temps réel",
      "Paiement sécurisé",
      "Gestion des commandes",
      "Gestion des livreurs",
      "Gestion des clients",
      "Gestion des livres",
      "Gestion des commandes",
    ]
  },
  {
    id: "3",
    title: "Plateforme de Réservation",
    description: "Système de gestion des salles de réunion",
    image: "/projects/booking-app.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "React"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Réservation en ligne",
      "Gestion des disponibilités",
      "Notifications automatiques",
      "Gestion des réservations",
      "Gestion des clients",
      "Gestion des salles",
      "Gestion des événements",
      "Gestion des utilisateurs",
      "Gestion des rôles",
    ]
  },
  
  {
    id: "4",
    title: "Plateforme de Gestion de la Bibliothèque",
    description: "Système de gestion de la bibliothèque",
    image: "/projects/library-app.png",
    technologies: ["Node.js", "Nestjs", "MongoDB", "React","JWT","Docker","AWS","EC2","S3","cognito","api gateway","lambda","sns","sqs","s3"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Gestion des utilisateurs",
      "Gestion des livres",
      "Gestion des emprunts",
      "Gestion des retours",
      "Gestion des réservations",
      "Gestion des rôles",
    ]
  },
  // add platforme de resaux sociale avec laravel
  {
    id: "5",
    title: "Plateforme de Réseaux Sociaux",
    description: "Système de gestion de la bibliothèque",
    image: "/projects/library-app.png",
    technologies: ["Laravel", "blade", "mysql","javascript","jquery","tailwindcss","ajax","socialite"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Gestion des utilisateurs",
      "Gestion des posts",
      "Gestion des commentaires",
      "Gestion des likes",
      "Gestion des amis",
      "Gestion des groupes",
      "Gestion des notifications",
      "Gestion des messages",
    ]
  },
  // add platforme de real estate avec laravel
  {
    id: "6",
    title: "Plateforme de Real Estate",
    description: "Plateforme de vent et achat et location de propriétés immobiliers ",
    image: "/projects/library-app.png",
    technologies: ["Laravel", "blade", "mysql","javascript","jquery","tailwindcss","ajax","socialite"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
  }
];