export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[]; // Nouveau tableau pour les images du slider
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
} 