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
  // React Component: The bug-free version... or so we hope.
  const MohamedHakiDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [coffeeLevel, setCoffeeLevel] = useState("☕️ Full Tank");
    const [bugCount, setBugCount] = useState(0);
  
    useEffect(() => {
      console.log("🚀 Initializing... Please don't break anything.");
      fetchProjects();
    }, []);
  
    const fetchProjects = async () => {
      const response = await fetch("/api/getProjects");
      const data = await response.json();
      setProjects(data);
      console.log("📂 Projects loaded. You can now continue pretending to work.");
    };
  
    const squashBug = () => {
      if (bugCount > 0) {
        setBugCount(bugCount - 1);
        console.log("🪲 Bug squashed. One less reason to cry.");
      } else {
        console.log("🎉 No bugs left! Wait, should I check the backlog?");
      }
    };
  
    return (
      <div>
        <h1>👨‍💻 Mohamed Haki's Dev Hub - Keeping bugs to a minimum (mostly)</h1>
        <h2>Coffee Level: {coffeeLevel}</h2>
        <h2>Bugs Remaining: {bugCount}</h2>
        <button onClick={() => squashBug()}>Squash a Bug (or pretend to)</button>
        <h2>🚧 Active Projects:</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project.name} - Because we can always add more features (right?)</li>
          ))}
        </ul>
      </div>
    );
  };`,
  
    Backend: `
  // Express API: Because everyone loves REST... unless it's broken.
  app.post('/api/debug', (req, res) => {
    const { issue } = req.body;
  
    if (!issue) {
      console.log("❌ Issue description missing. Was this a feature request?");
      return res.status(400).json({ error: "Please provide the issue. I'm not a mind reader." });
    }
  
    const solutions = [
      "Try turning it off and on again. Works every time. (Just kidding, but seriously...)",
      "Console.log is your best friend. Just ask the debugger.",
      "Have you tried Stack Overflow? They know everything.",
      "Maybe blame the intern? I mean, it's their fault, right?"
    ];
  
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    console.log(\`🔍 Debugging: \${issue}\`);
    res.json({ message: "Here's a tip:", solution: randomSolution });
  });`,
  
    DevOps: `
  // Docker Compose: Because who doesn't love containers?
  version: '3'
  services:
    mohamed-haki-app:
      build: .
      ports:
        - "3000:3000"
      environment:
        - NODE_ENV=production
        - HUMOR_MODE=ENABLED
        - BUGS_ALLOWED=0  # Zero bugs. We hope.
      volumes:
        - .:/app
      command: ["npm", "run", "start"]
      restart: always  # Like your code that never stops running
      networks:
        - mohamed-haki-net
  
    mohamed-haki-db:
      image: mongo:latest
      environment:
        - MONGO_INITDB_ROOT_USERNAME=root
        - MONGO_INITDB_ROOT_PASSWORD=example
      ports:
        - "27017:27017"
      networks:
        - mohamed-haki-net
      restart: always
  
  networks:
    mohamed-haki-net:
      driver: bridge
  
  # When it works, celebrate. When it doesn't, Docker logs are your best friend.
  `,
  Database: `
  // Node.js - Connecting to MongoDB: Querying your data like a pro... or a coffee-deprived developer.
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://mohamed-haki-mongo-db:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('🌐 Connected to MongoDB - Finally, it worked! 😅'))
  .catch(err => console.error('❌ MongoDB connection error: Oops, something went wrong... 🤔', err));

// Define a schema and model for projects (because "Just Wing It" isn't a database strategy)
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Project = mongoose.model('Project', projectSchema);

// Fetch projects from MongoDB (hopefully without a crash, but no promises)
Project.find({}, (err, projects) => {
  if (err) {
    console.error('❌ Error fetching projects: Maybe it’s time to pray to the database gods...', err);
    return;
  }
  console.log('Projects from MongoDB: Look at all these cool projects! (I hope none of them are broken)');
  console.table(projects); // Fancy table view for those project lovers
});

// Example: Insert a new project (because who doesn't love adding more tasks to their list?)
const newProject = new Project({
  name: 'New Project',
  description: 'A brand new project. No sleep required, we got coffee! ☕️',
});

newProject.save((err) => {
  if (err) {
    console.error('❌ Error saving project: Did the database take the day off?', err);
  } else {
    console.log('🎉 New project saved successfully! Now we just need to find time to finish it.');
  }
});

  `,
  };
  
  

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills List */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill.name)}
                  onHoverStart={() => setIsHovered(skill.name)}
                  onHoverEnd={() => setIsHovered(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 rounded-lg text-left transition-all
                    ${selectedSkill === skill.name 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">
                      {getIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                      <p className="text-sm opacity-75">{skill.experience}</p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
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

          {/* Skill Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {skills.find(s => s.name === selectedSkill) && (
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {skills
                      .find(s => s.name === selectedSkill)
                      ?.technologies.map((tech) => (
                        <motion.div
                          key={tech.name}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-700 p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-white font-bold">{tech.name}</h4>
                            <span className="text-green-500">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ duration: 1 }}
                              className="h-full bg-green-500"
                            />
                          </div>
                          <p className="text-gray-400 text-sm mt-2">
                            {tech.projects} projets
                          </p>
                        </motion.div>
                      ))}
                  </div>

                  <CodeSnippet
                    code={codeExamples[selectedSkill]}
                    language={selectedSkill === 'DevOps' ? 'yaml' : 'typescript'}
                    title={`${selectedSkill.toLowerCase()}-example`}
                  />
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