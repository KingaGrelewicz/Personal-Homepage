import {
  StyledHeader,
  HeaderButton,
  HeaderContent,
  HeaderImage,
  HeaderMailIcon,
  HeaderTitle,
  HeaderWrapper,
} from "./styled";
import image from "../../image/kinga.jpg";
import ThemeToggler from "../ThemeToggler";
import { email } from "../../email";
import React from "react";


const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ThemeToggler />
      <HeaderWrapper>
        <HeaderImage src={image} alt="" />
        <HeaderContent>
          <HeaderTitle>Kinga Grelewicz</HeaderTitle>
          I am an <strong>open-minded person</strong> who approaches the exploration of new areas and personal development with enthusiasm,
          both in my private life and professionally.I believe that a willingness to learn is the key to growth.<br />
          I embrace challenges and always strive to broaden my horizons to better understand a given task.

          I value both <strong>teamwork and independent projects</strong>, seeing them as opportunities to develop skills.
          I am convinced that diversity of perspectives enriches experiences and opens doors to new possibilities.<br />
          I also enjoy <strong>discussing solutions</strong> to challenges with a team, as each of us brings a different approach and experience,
          allowing for mutual learning and gaining insight into another person's point of view.
          <HeaderButton href={`mailto:${email}`} title={email}>
            <HeaderMailIcon />Hire me
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
