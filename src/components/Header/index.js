import {
  StyledHeader,
  HeaderButton,
  HeaderContent,
  HeaderImage,
  HeaderMailIcone,
  HeaderTitle,
  HeaderWrapper,
  HeaderToggleMode,
  HeaderToggler,
  HeaderTogglerIcon,
  HeaderModeIcon,
  HeaderTogglerLabel
} from "./styled";
import image from "../../image/kinga.jpg"
import { useState } from "react";

const Header = ({ theme, toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(theme === "dark");

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <StyledHeader>
      <HeaderToggleMode>
        <HeaderTogglerLabel>
          {isToggled ? "DARK MODE OFF" : "DARK MODE ON"}
        </HeaderTogglerLabel>
        <HeaderToggler onClick={handleToggleClick}>
          <HeaderTogglerIcon $isToggled={isToggled}>
            <HeaderModeIcon theme={theme} />
          </HeaderTogglerIcon>
        </HeaderToggler>
      </HeaderToggleMode>
      <HeaderWrapper>
        <HeaderImage src={image} alt="" />
        <HeaderContent>
          <HeaderTitle>Kinga Grelewicz</HeaderTitle>
          I am an <strong>open-minded person</strong> who approaches the exploration of new areas and personal development with enthusiasm,
          both in my private life and professionally. I believe that a willingness to learn is the key to growth.
          I embrace challenges and always strive to broaden my horizons to better understand a given task.

          I value both <strong>teamwork and independent projects</strong>, seeing them as opportunities to develop skills.
          I am convinced that diversity of perspectives enriches experiences and opens doors to new possibilities.<br />
          I also enjoy <strong>discussing solutions</strong> to challenges with a team, as each of us brings a different approach and experience,
          allowing for mutual learning and gaining insight into another person's point of view.
          <HeaderButton href="mailto:kinga.grelewicz@gmail.com">
            <HeaderMailIcone />Hire me
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
