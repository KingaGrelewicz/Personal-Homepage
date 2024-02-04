import { FooterContent, FooterMail, FooterParagraph, FooterWrapper } from "./styled";


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterParagraph>LET'S TALK</FooterParagraph>
            <FooterMail 
                href="mailto:kinga.grelewicz@gmail.com">kinga.grelewicz@gmail.com
            </FooterMail>
            <FooterContent>
                I am always open to new challenges.<br /> 
                If you need help implementing your ideas, feel free to contact me 👋
            </FooterContent>
        </FooterWrapper>
    )
};

export default Footer;