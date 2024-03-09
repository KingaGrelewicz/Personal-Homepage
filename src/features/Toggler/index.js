import {
    HeaderModeIcon,
    HeaderToggleMode,
    HeaderToggler,
    HeaderTogglerIcon,
    HeaderTogglerLabel
} from "./styled";
import { selectTheme, toggleTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Toggler = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const handleToggleClick = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(toggleTheme(newTheme));
    };

    return (
        <HeaderToggleMode>
            <HeaderTogglerLabel>
                {theme === "dark" ? "DARK MODE OFF" : "DARK MODE ON"}
            </HeaderTogglerLabel>
            <HeaderToggler onClick={handleToggleClick}>
                <HeaderTogglerIcon>
                    <HeaderModeIcon theme={theme} />
                </HeaderTogglerIcon>
            </HeaderToggler>
        </HeaderToggleMode>
    )
}

export default Toggler;