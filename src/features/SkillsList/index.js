import { SkillsListItem, StyledSkillsList } from "./styled";

export const professionalSkills = [
    "HTML",
    "Styled Components",
    "CSS Bem Convention",
    "CSS Flex",
    "CSS Grid",
    "React Router",
    "React Hooks",
    "Working with API (fetch, axios)",
    "Promises (async, await)",
    "Error handling",
    "Trello",
];

export const skillsToLearn = [
    "Type Script",
    "React Native",
    "Vite",
    // "CSS Emotion",
    // "Unit testing",
];

export const SkillsList = ({ items }) => {
    return (
        <StyledSkillsList>
            {items.map(item =>
                <SkillsListItem key={item}>
                    {item}
                </SkillsListItem>
            )}
        </StyledSkillsList>
    )
}
