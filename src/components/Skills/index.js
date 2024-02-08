import { SkillsImage, SkillsListItem, SkillsTitle, SkillsWrapper, StyledSkillsList } from "./styled";

export const professionalSkills = [
    "HTML",
    "Styled Components",
    "CSS Bem Convention",
    "CSS Flex",
    "CSS Grid",
    "React Router",
    "React Hooks",
    "Working with API (fetch, axios)",
    "Promises (asyns, await)",
    "Error handling",
    "Trello",
];

export const skillsToLearn = [
    "Vite",
    "Next.js",
    "CSS Emotion",
    "Unit testing",
];

const SkillsList = ({ items }) => (
    <StyledSkillsList>
        {items.map(item =>
            <SkillsListItem key={item}>
                {item}
            </SkillsListItem>
        )}
    </StyledSkillsList>
)


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

