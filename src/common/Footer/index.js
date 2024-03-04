import {
    FooterContent,
    FooterFacebookIcone,
    FooterGitHubIcone,
    FooterIcones,
    FooterLinkedInIcone,
    FooterMail,
    FooterParagraph,
    FooterWrapper
} from "./styled";


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
            <FooterIcones>
                <a 
                href="https://github.com/KingaGrelewicz" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FooterGitHubIcone />
                </a>
                <a 
                href="https://www.linkedin.com/in/kinga-grelewicz/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FooterLinkedInIcone />
                </a>
                <a 
                href="https://www.facebook.com/kinga.grelewicz.5/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FooterFacebookIcone />
                </a>
            </FooterIcones>
        </FooterWrapper>
    )
};

export default Footer;