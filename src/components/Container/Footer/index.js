import { FooterMail, FooterWrapper } from "./styled";


const Footer = () => {
    return (
        <FooterWrapper>
            <p>Let's Talk</p>
            <FooterMail href="mailto:kinga.grelewicz@gmail.com">kinga.grelewicz@gmail.com</FooterMail>
        </FooterWrapper>
    )
};

export default Footer;