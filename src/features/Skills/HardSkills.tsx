import { Skill } from "../../types/types";
import {
  SkillsHeader,
  SkillsItem,
  SkillsWrapper,
  StyledSkillsList,
} from "./styled";

interface HardSkillsProps {
  skills: Skill[];
}

const HardSkills: React.FC<HardSkillsProps> = ({ skills }) => {
  return (
    <SkillsWrapper>
      <SkillsHeader>Hard Skills</SkillsHeader>
      <StyledSkillsList>
        {skills.map((skill) => (
          <SkillsItem key={skill.name}>{skill.name}</SkillsItem>
        ))}
      </StyledSkillsList>
    </SkillsWrapper>
  );
};

export default HardSkills;
