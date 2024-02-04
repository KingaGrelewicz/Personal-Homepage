import { SectionTitle, SectionToolImage, SectionWrapper } from "./styled";

export const Section = ({ title, content }) => {
    return (
        <SectionWrapper>
            <SectionTitle>
                {title} <SectionToolImage />
            </SectionTitle>
            <div>
                {content}
            </div>
        </SectionWrapper>
    )
};

