import { SkillsList } from "../SkillsList";
import { SkillsImage, SkillsTitle, SkillsWrapper } from "./styled";

interface Skill {
  name: string;
}

interface SkillsProps extends React.PropsWithChildren<{}> {
  title: string;
  img: string;
  skills: Skill[];
}
export const Skills: React.FC<SkillsProps> = ({
  title,
  img,
  skills,
  children,
}) => {
  return (
    <SkillsWrapper>
      <SkillsTitle>
        {title}
        <SkillsImage src={img} alt="Skills Image" />
      </SkillsTitle>
      <SkillsList items={skills} />
      {children}
    </SkillsWrapper>
  );
};
