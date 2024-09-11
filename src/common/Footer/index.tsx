import React from "react";
import { email } from "../../email";
import { SocialIcons } from "./SocialIcons";
import {
  FooterContent,
  FooterMail,
  FooterParagraph,
  FooterWrapper,
} from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterParagraph>LET'S TALK</FooterParagraph>
      <FooterMail href={`mailto:${email}`}>{email}</FooterMail>
      <FooterContent>
        I am always open to new challenges.
        <br />
        If you need help implementing your ideas, feel free to contact me 👋
      </FooterContent>
      <SocialIcons />
    </FooterWrapper>
  );
};

export default Footer;
