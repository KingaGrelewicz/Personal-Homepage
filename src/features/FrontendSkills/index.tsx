import { SkillsProps } from "../../types/types";
import { FrontendSkillsList } from "../FrontendSkillsList";
import {
  FrontendSkillsImage,
  FrontendSkillsTitle,
  FrontendSkillsWrapper,
} from "./styled";

export const FrontendSkills: React.FC<SkillsProps> = ({
  title,
  img,
  skills,
  children,
}) => {
  return (
    <FrontendSkillsWrapper>
      <FrontendSkillsTitle>
        {title}
        <FrontendSkillsImage src={img} alt="Skills Image" />
      </FrontendSkillsTitle>
      <FrontendSkillsList items={skills} />
      {children}
    </FrontendSkillsWrapper>
  );
};
