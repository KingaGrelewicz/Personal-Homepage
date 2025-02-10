import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeMenu, SelectIsMenuOpen } from "./MenuSlice";
import {
  CloseButtonWrapper,
  CloseIcon,
  MenuNavBackground,
  MenuNavWrapper,
  NavigationLink,
  NavigationList,
  StyledMenuNav,
} from "./styled";
import { useEffect, useRef } from "react";

const MenuNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(SelectIsMenuOpen);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(closeMenu());
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, dispatch]);

  return (
    <Transition in={isOpen} timeout={500} mountOnEnter unmountOnExit>
      {($state) => (
        <MenuNavWrapper>
          <MenuNavBackground $state={$state} />
          <StyledMenuNav ref={menuRef} $state={$state}>
            <CloseButtonWrapper onClick={() => dispatch(closeMenu())}>
              <CloseIcon />
            </CloseButtonWrapper>

            <NavigationList>
              <NavigationLink>
                <Link to="/" onClick={() => dispatch(closeMenu())}>
                  About Me
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link to="/experience" onClick={() => dispatch(closeMenu())}>
                  Work Experience
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link to="/education" onClick={() => dispatch(closeMenu())}>
                  Education
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link to="/skills" onClick={() => dispatch(closeMenu())}>
                  Skills
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link to="/frontend" onClick={() => dispatch(closeMenu())}>
                  Fontend
                </Link>
              </NavigationLink>
            </NavigationList>
          </StyledMenuNav>
        </MenuNavWrapper>
      )}
    </Transition>
  );
};

export default MenuNav;
