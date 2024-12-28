export const personalInfo = {
  name: "MOHAMED HAKI",
  title: "Mern Stack Developer",
  image: "/uploads/Mypicture.png",
  bio: "Full-Stack Developer specialized in MERN stack (MongoDB, Nestjs, Express.js, React.js, Node.js), with solid experience in developing high-performance, scalable, and secure web applications. Expert in RESTful API design, JWT authentication integration, and responsive user interface development. Passionate about agile development practices.",
  email: "mohamedhaki70@gmail.com",
  phone: "+212-641725930",
  location: "Morocco",
  social: {
    github: "HakiMohamed",
    linkedin: "mohamed-haki-64534a204",
    twitter: "mohamedhaki70"
  },
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
    title: "Full-Stack PHP Symfony Developer",
    logo: "/uploads/logosPchalle.png",
    company: "PC HALLE Tangier",
    period: "May 13, 2022 - July 13, 2024",
    description: "Implementation of a plugin system for the online store creation platform allowing users to customize and integrate third-party functionalities.",
    technologies: ["PHP", "Symfony 6.4", "twig", "javascript", "mysql", "TailwindCss"],
    codeSnippet: `// Developer working with Symfony Plugin System
    class Developer {
      constructor(name) { 
        this.name = name; 
      }
    
      work() { 
        console.log(\`\${this.name} says: "I'm making plugins with Symfony, so users can add their own stuff... Like that time I added a '404 Not Found' page to the homepage!"\`);
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
    title: "Full-Stack Developer Student",
    company: "YouCode UM6P",
    logo: "/uploads/logosYoucode.png",
    period: "2023 - 2025",
    description: "Full-stack development student at YouCode UM6P, an innovative school where learning is based on project-based pedagogy, promoting team collaboration and development of technical and soft skills.",
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
    codeSnippet: `
    // Experience at YouCode: Learning by Doing and Collaboration
    const youcodeExperience = () => {
      console.log("🎓 Welcome to YouCode: Where Learning Meets Real-World Practice!");
    
      // Core YouCode Values
      const values = [
        "🚀 Learn by Doing",
        "🤝 Team Collaboration",
        "💡 Problem-Solving",
        "🌟 Real-World Projects"
      ];
    
      console.log("💻 Core Values at YouCode:");
      values.forEach((value) => console.log(value));
    
      // Example of a Collaborative Project Workflow
      const projectWorkflow = (team) => {
        const tasks = [
          "Frontend Development",
          "Backend Development",
          "Database Design",
          "Testing",
          "Deployment"
        ];
    
        console.log("\\n🚧 YouCode Collaborative Project Workflow");
    
        team.forEach((member, index) => {
          console.log(\`👤 Member: \${member.name} | Role: \${member.role}\`);
          console.log(\`🔧 Assigned Task: \${tasks[index % tasks.length]}\`);
        });
    
        console.log("\\n🔄 Team Collaboration and Iterative Feedback:");
        tasks.forEach((task) => {
          console.log(\`✔️ Task Completed: \${task} | Reviewed and Improved by Team.\`);
        });
    
        console.log("\\n✅ Final Project Delivered Successfully!");
      };
    
      // Example Team
      const team = [
        { name: "Mohamed Haki", role: "Full-Stack Developer" },
        { name: "El Morjani Mohamed", role: "UI/UX Designer" },
        { name: "Mohamed Tergui", role: "Backend Developer" },
        { name: "Oussama Ben Maazi", role: "Frontend Developer" },
        { name: "Yassine Fakihi", role: "DevOps Engineer" }
      ];
    
      projectWorkflow(team);
    
      console.log("\\n🎉 At YouCode, we learn, collaborate, and succeed together!");
    };
    
    // Run the YouCode experience simulation
    youcodeExperience();
    `
    ,
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
    description: "Development of modern and reactive user interfaces",
    experience: "2 years",
    projects: 15,
    technologies: [
      { 
        name: "React.js", 
        level: 90, 
        projects: 10,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      },
      { 
        name: "Vuejs", 
        level: 85, 
        projects: 5,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
      },
      { 
        name: "TailwindCSS", 
        level: 90, 
        projects: 12,
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      },
      { 
        name: "Bootstrap", 
        level: 85, 
        projects: 8,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
      },
      { 
        name: "Jquery", 
        level: 80, 
        projects: 2,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
      },
      { 
        name: "Nextjs", 
        level: 80, 
        projects: 2,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
      },
    ]
  },
  {
    name: "Backend",
    level: 85,
    category: "Development",
    icon: "⚙️",
    description: "Development of robust servers and APIs",
    experience: "2 years",
    projects: 12,
    technologies: [
      { 
        name: "Node.js", 
        level: 85, 
        projects: 8,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
      },
      { 
        name: "Express.js", 
        level: 90, 
        projects: 5,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
      },
      { 
        name: "Nestjs", 
        level: 80, 
        projects: 5,
        logo: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
      },
      { 
        name: "Laravel", 
        level: 80, 
        projects: 10,
        logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
      },
      { 
        name: "Symfony", 
        level: 80, 
        projects: 3,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/symfony/symfony-original.svg"
      },
    ]
  },
  {
    name: "DevOps",
    level: 75,
    category: "Operations",
    icon: "🚀",
    description: "Application deployment and management",
    experience: "2 years",
    projects: 10,
    technologies: [
      { 
        name: "Docker", 
        level: 80, 
        projects: 6,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
      },
      { 
        name: "AWS", 
        level: 75, 
        projects: 4,
        logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png"
      },
      { 
        name: "EC2", 
        level: 75, 
        projects: 4,
        logo: "https://static-00.iconduck.com/assets.00/aws-ec2-icon-423x512-iaajemnx.png"
      },
      { 
        name: "S3", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
      },
      { 
        name: "Cognito", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-cognito.svg"
      },
      { 
        name: "API Gateway", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-api-gateway.svg"
      },
      { 
        name: "Lambda", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda.svg"
      },
      { 
        name: "SNS", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-sns.svg"
      },
      { 
        name: "SQS", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-sqs.svg"
      },
      { 
        name: "RDS", 
        level: 70, 
        projects: 3,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-rds.svg"
      }
    ]
  },
  {
    name: "Database",
    level: 70,
    category: "Database",
    icon: "🗄️",
    description: "Database management",
    experience: "2 years",
    projects: 8,
    technologies: [
      { 
        name: "MySQL", 
        level: 80, 
        projects: 15,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
      },
      { 
        name: "MongoDB", 
        level: 85,
        projects: 7,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
      },
      { 
        name: "PostgreSQL", 
        level: 70, 
        projects: 10,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
      },
      { 
        name: "SQLite", 
        level: 65, 
        projects: 5,
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg"
      }
    ]
  }
];

export const education = [
  {
    id: "1",
    logo: "/uploads/logosYoucode.png",
    logo2: "/uploads/simplone1.png",
    logo3: "/uploads/UM6P.png",
    institution: "YouCode UM6P",
    degree: "Full-Stack Developer Training",
    period: "2023 - 2025",
    description: "Intensive full-stack web development training with YouCode UM6P and Simplon.co, based on active pedagogy and simulated real projects. This program, designed to reflect professional requirements, emphasizes team collaboration, project management, and the use of agile tools and methodologies, as in a modern tech company. Ideal for developing job-ready technical and professional skills."
  },
  {
    id: "2",
    logo: "/uploads/logofsjes.png",
    institution: "FSJES Cadi ayad",
    degree: "Law Studies",
    period: "2020/2022",
    description: "Third-year student in the French Law Department in Marrakech"
  },
  {
    id: "3",
    logo: "/uploads/ministre.png",
    institution: "AL MASSIRA High School",
    degree: "High School Diploma",
    period: "2020",
    location: "TATA",
    description: "High School Diploma in Human Sciences"
  }
];

export const languages = [
  {
    language: "French",
    level: "Intermediate",
    proficiency: 70
  },
  {
    language: "English",
    level: "Intermediate",
    proficiency: 50
  },
  {
    language: "Arabic",
    level: "Native",
    proficiency: 100
  }
];

export const interests = [
  "API Development",
  "Web Application Development",
  "Mobile Application Development",
  "Management Application Development",
];

export const softSkills = [
  "Initiative",
  "Adaptability",
  "Teamwork",
  "Motivation",
  "Problem Solving",
  "Organization",
];

export const projects = [
  {
    id: "1",
    title: "Chat Platform",
    description: "Real-time messaging application with microservices",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614427771727-77613715f08c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607427225127-a0c164e79d91?w=800&auto=format&fit=crop"
    ],
    technologies: ["React", "Node.js", "WebSocket", "MongoDB","nestjs","JWT","Docker","AWS","EC2","S3"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Real-time messaging",
      "Secure authentication",
      "Group management"
    ]
  },
  {
    id: "2",
    title: "alloMedia",
    description: "Home delivery application",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop"
    ],
    technologies: ["React", "Node.js", "MongoDB", "JWT","Tailwindss", "docker","EC2","S3","SNS"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "Order system",
      "Real-time tracking",
      "Secure payment",
      "Order management",
      "Driver management",
      "Customer management",
      "Book management",
      "Order management",
    ]
  },
  {
    id: "3",
    title: "Booking Platform",
    description: "Meeting room management system",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "React"],
    githubUrl: "https://github.com/HakiMohamed/meetroom",
    liveUrl: "https://github.com/HakiMohamed/meetroom",
    features: [
      "Online booking",
      "Availability management",
      "Automatic notifications",
      "Reservation management",
      "Customer management",
      "Room management",
      "Event management",
      "User management",
      "Role management",
    ]
  },
  {
    id: "4",
    title: "Library Management Platform",
    description: "Library management system",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop"
    ],
    technologies: ["Node.js", "Nestjs", "MongoDB", "React","JWT","Docker","AWS","EC2","S3","cognito","api gateway","lambda","sns","sqs","s3"],
    githubUrl: "https://github.com/HakiMohamed",
    liveUrl: "#",
    features: [
      "User management",
      "Book management",
      "Loan management",
      "Return management",
      "Reservation management",
      "Role management",
    ]
  },
  {
    id: "5",
    title: "Social Network Platform",
    description: "Social network management system",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop"
    ],
    technologies: ["Laravel", "blade", "mysql","javascript","jquery","tailwindcss","ajax","socialite"],
    githubUrl: "https://github.com/elkhailihamza/YouConnect/tree/F-HAKI/youconnect/storage",
    liveUrl: "https://github.com/elkhailihamza/YouConnect/tree/F-HAKI/youconnect/storage",
    features: [
      "User management",
      "Post management",
      "Comment management",
      "Like management",
      "Friend management",
      "Group management",
      "Notification management",
      "Message management",
    ]
  },
  {
    id: "6",
    title: "Real Estate Platform",
    description: "Platform for selling, buying and renting real estate properties",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop"
    ],
    technologies: ["Laravel", "blade", "mysql","javascript","jquery","tailwindcss","ajax","socialite"],
    githubUrl: "https://github.com/HakiMohamed/AGENCY",
    liveUrl: "https://github.com/HakiMohamed/AGENCY",
    features: [
      "Property listing management",
      "Advanced property search",
      "User authentication",
      "Property booking system",
      "Real estate agent profiles",
      "Property image gallery",
      "Contact form integration",
      "Favorite properties list"
    ]
  }
];
