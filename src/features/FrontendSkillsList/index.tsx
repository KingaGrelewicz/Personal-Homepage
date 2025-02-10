import { Skill, SkillsListProps } from "../../types/types";
import { FrontendSkillsListItem, FrontendStyledSkillsList } from "./styled";

export const professionalSkills: Skill[] = [
  { name: "HTML" },
  { name: "Styled Components" },
  { name: "CSS Bem Convention" },
  { name: "CSS Flex" },
  { name: "CSS Grid" },
  { name: "React Router" },
  { name: "Working with API (fetch, axios)" },
  { name: "Promises (async, await)" },
  { name: "React Hooks" },
  { name: "Error handling" },
  { name: "Trello" },
];

export const skillsToLearn: Skill[] = [
  { name: "Vite" },
  { name: "TypeScript" },
  { name: "React Native" },
];

export const FrontendSkillsList: React.FC<SkillsListProps> = ({ items }) => {
  return (
    <FrontendStyledSkillsList>
      {items.map((item) => (
        <FrontendSkillsListItem key={item.name}>
          {item.name}
        </FrontendSkillsListItem>
      ))}
    </FrontendStyledSkillsList>
  );
};
