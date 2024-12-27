interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  features?: string[];
}

interface Experience {
  id: string;
  company: string;
  position: string;
  title: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
  stack: string[];
  technologies: string[];
  achievements: string[];
  codeSnippet: string;
} 