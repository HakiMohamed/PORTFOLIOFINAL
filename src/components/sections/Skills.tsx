import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import CodeSnippet from '../effects/CodeSnippet';

interface SkillProps {
  skills: Array<{
    name: string;
    level: number;
    category: string;
    icon: string;
    description: string;
    experience: string;
    projects: number;
    technologies: Array<{
      name: string;
      level: number;
      projects: number;
      logo: string;
    }>;
  }>;
}

const Skills = ({ skills }: SkillProps) => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]?.name);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Frontend':
        return <FaCode />;
      case 'Backend':
        return <FaServer />;
      case 'DevOps':
        return <FaTools />;
      default:
        return <FaCode />;
    }
  };

  const codeExamples: { [key: string]: string } = {
    Frontend: `
 
  const projects = [
    { name: "Portfolio", status: "En cours" },
    { name: "E-commerce", status: "Terminé" },
    { name: "Dashboard", status: "En planification" }
  ];

  let coffeeLevel = "☕️ Full Tank";
  let bugCount = 3;

  console.log("🚀 Initializing Frontend Dashboard...");
  console.log("Current Coffee Level:", coffeeLevel);
  
  
  for(let i = bugCount; i > 0; i--) {
    console.log(\`🪲 Squashing bug #\${i}...\`);
    bugCount--;
  }

  console.log("📂 Current Projects:");
  projects.forEach(project => {
    console.log(\`- \${project.name}: \${project.status}\`);
  });

  console.log("🎉 All bugs squashed! Current count:", bugCount);
  `,
  
    Backend: `
  
  const issues = [
    "Database connection timeout",
    "Invalid API key",
    "Rate limit exceeded"
  ];

  const solutions = [
    "Try turning it off and on again",
    "Console.log is your best friend",
    "Have you tried Stack Overflow?",
    "Maybe blame the intern?"
  ];

  console.log("🔧 Backend Debug System Initialized");

  
  issues.forEach(issue => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    console.log(\`🔍 Issue detected: \${issue}\`);
    console.log(\`💡 Suggested solution: \${randomSolution}\n\`);
  });

  console.log("✅ All issues processed");
  `,
  
    DevOps: `
  
  const services = {
    app: {
      status: "running",
      containers: 3,
      memory: "512MB"
    },
    database: {
      status: "healthy",
      backup: "completed",
      connections: 5
    }
  };

  console.log("🐳 Docker Environment Status:");
  
  Object.entries(services).forEach(([service, config]) => {
    console.log(\`\\n📊 \${service.toUpperCase()} Service:\`);
    Object.entries(config).forEach(([key, value]) => {
      console.log(\`  - \${key}: \${value}\`);
    });
  });

  console.log("\\n✅ All services are operational");
  `,

    Database: `
  
  const mockDatabase = {
    projects: [
      { id: 1, name: "Site Web", status: "active" },
      { id: 2, name: "API REST", status: "completed" },
      { id: 3, name: "Mobile App", status: "pending" }
    ]
  };

  console.log("🌐 Connecting to MongoDB...");
  console.log("✅ Connection established!");

  
  console.log("\\n📚 Fetching all projects...");
  console.table(mockDatabase.projects);

 
  const newProject = {
    id: 4,
    name: "New Project",
    status: "planning"
  };

  mockDatabase.projects.push(newProject);
  console.log("\\n✨ New project added successfully:");
  console.log(newProject);
  `
};
  
  

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-8">
          {/* Skills List - Now always on top for mobile */}
          <div className="lg:col-span-4 order-1">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 space-x-3 lg:space-x-0 lg:space-y-4 snap-x lg:snap-none">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill.name)}
                  onHoverStart={() => setIsHovered(skill.name)}
                  onHoverEnd={() => setIsHovered(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-full p-4 md:p-6 rounded-lg text-left transition-all snap-center
                    ${selectedSkill === skill.name 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-xl md:text-2xl">
                      {getIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg">{skill.name}</h3>
                      <p className="text-xs md:text-sm opacity-75">{skill.experience}</p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-3 md:mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-green-300"
                    />
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skill Details - Now always below skills list on mobile */}
          <div className="lg:col-span-8 order-2">
            <AnimatePresence mode="wait">
              {skills.find(s => s.name === selectedSkill) && (
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="bg-gray-800 rounded-lg p-4 md:p-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    {skills
                      .find(s => s.name === selectedSkill)
                      ?.technologies.map((tech) => (
                        <motion.div
                          key={tech.name}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-700 p-3 md:p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-2">
                          {tech.logo &&
                          <img src={tech.logo}  alt={`${tech.name} logo`} className="w-6 h-6 object-contain"/>
                          }
                            <h4 className="text-white font-bold text-sm md:text-base">{tech.name}</h4>
                            <span className="text-green-500 text-sm md:text-base">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ duration: 1 }}
                              className="h-full bg-green-500"
                            />
                          </div>
                          <p className="text-gray-400 text-xs md:text-sm mt-2">
                            {tech.projects} Projects
                          </p>
                        </motion.div>
                      ))}
                  </div>

                  <div className="mt-4 md:mt-6">
                    <CodeSnippet
                      code={codeExamples[selectedSkill]}
                      language={'javascript'}
                      title={`${selectedSkill.toLowerCase()}-example`}
                      runnable={true}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;