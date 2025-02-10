import { useAppDispatch } from "../../hooks";
import { toggleMenu } from "../MenuNav/MenuSlice";
import { MenuButtonStyled, MenuIcon } from "./styled";

const MenuButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <MenuButtonStyled onClick={() => dispatch(toggleMenu())}>
      <MenuIcon />
    </MenuButtonStyled>
  );
};

export default MenuButton;
