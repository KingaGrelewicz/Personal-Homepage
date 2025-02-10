import {
  StyledHeader,
  HeaderContainer,
} from "./styled";
import ThemeToggler from "../ThemeToggler";
import MenuButton from "../MenuButton";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <MenuButton />
        <ThemeToggler />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
