import { SectionImage, SectionTitle, SectionWrapper } from "./styled";

export const Section = ({ title, img, content }) => {
    return (
        <SectionWrapper>
            <SectionTitle>
                {title} 
                <SectionImage src={img} alt="Section Image" />
            </SectionTitle>
            <div>
                {content}
            </div>
        </SectionWrapper>
    )
};

