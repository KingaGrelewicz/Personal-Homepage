import { SkillsListItem, StyledSkillsList } from "./styled";

interface Skill {
  name: string;
}

interface SkillsListProps {
  items: Skill[];
}

export const professionalSkills: Skill[] = [
  { name: "HTML" },
  { name: "Styled Components" },
  { name: "CSS Bem Convention" },
  { name: "CSS Flex" },
  { name: "CSS Grid" },
  { name: "React Router" },
  { name: "React Hooks" },
  { name: "Working with API (fetch, axios)" },
  { name: "Promises (async, await)" },
  { name: "Error handling" },
  { name: "Trello" },
];

export const skillsToLearn: Skill[] = [
  { name: "TypeScript" },
  { name: "React Native" },
  { name: "Vite" },
];

export const SkillsList: React.FC<SkillsListProps> = ({ items }) => {
  return (
    <StyledSkillsList>
      {items.map((item) => (
        <SkillsListItem key={item.name}>{item.name}</SkillsListItem>
      ))}
    </StyledSkillsList>
  );
};
