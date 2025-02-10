export interface Repo {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  description: string | null;
}

export interface ReposState {
  loading: boolean;
  error: string | null;
  data: Repo[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface ExperienceProps {
  jobs: Experience[];
}

export interface Skill {
  name: string;
}

export interface SkillsProps extends React.PropsWithChildren<{}> {
  title: string;
  img: string;
  skills: Skill[];
}

export interface SkillsListProps {
  items: Skill[];
}
