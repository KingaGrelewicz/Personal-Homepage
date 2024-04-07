import {
    HeaderModeIcon,
    HeaderToggleMode,
    HeaderToggler,
    HeaderTogglerIcon,
    HeaderTogglerLabel
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggler = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    const handleToggleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <HeaderToggleMode>
            <HeaderTogglerLabel>
                {isDarkTheme ? "DARK MODE ON" : "DARK MODE OFF"}
            </HeaderTogglerLabel>
            <HeaderToggler onClick={handleToggleClick}>
                <HeaderTogglerIcon $moveToRight={isDarkTheme}>
                    <HeaderModeIcon />
                </HeaderTogglerIcon>
            </HeaderToggler>
        </HeaderToggleMode>
    )
}

export default ThemeToggler;