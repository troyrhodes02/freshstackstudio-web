export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

export interface ProjectsData {
  projects: Project[];
}
