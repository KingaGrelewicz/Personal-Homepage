import {
    HeaderModeIcon,
    HeaderToggleMode,
    HeaderToggler,
    HeaderTogglerIcon,
    HeaderTogglerLabel
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Toggler = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    const handleToggleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <HeaderToggleMode>
            <HeaderTogglerLabel>
                {isDarkTheme ? "DARK MODE OFF" : "DARK MODE ON"}
            </HeaderTogglerLabel>
            <HeaderToggler onClick={handleToggleClick}>
                <HeaderTogglerIcon $isDarkTheme={isDarkTheme}>
                    <HeaderModeIcon />
                </HeaderTogglerIcon>
            </HeaderToggler>
        </HeaderToggleMode>
    )
}

export default Toggler;