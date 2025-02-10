import React from "react";
import {
  SkillsHeader,
  SkillsItem,
  SkillsWrapper,
  StyledSkillsList,
} from "./styled";
import { Skill } from "../../types/types";

interface SoftSkillsProps {
    skills: Skill[];
  }

const SoftSkills: React.FC<SoftSkillsProps> = ({ skills }) => {
  return (
    <SkillsWrapper>
      <SkillsHeader>Soft Skills</SkillsHeader>
      <StyledSkillsList>
        {skills.map((skill) => (
          <SkillsItem key={skill.name}>{skill.name}</SkillsItem>
        ))}
      </StyledSkillsList>
    </SkillsWrapper>
  );
};

export default SoftSkills;
