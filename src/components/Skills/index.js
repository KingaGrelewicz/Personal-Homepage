import { SkillsList } from "../SkillsList";
import { SkillsImage, SkillsTitle, SkillsWrapper } from "./styled";

export const Skills = ({ title, img, skills }) => {
    return (
        <SkillsWrapper>
            <SkillsTitle>
                {title}
                <SkillsImage src={img} alt="Skills Image" />
            </SkillsTitle>
            <SkillsList items={skills} />
        </SkillsWrapper>
    )
};

