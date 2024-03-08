import { useState } from "react";
import {
    HeaderModeIcon,
    HeaderToggleMode,
    HeaderToggler,
    HeaderTogglerIcon,
    HeaderTogglerLabel
} from "./styled";
import { toggleTheme } from "./themeSlice";
import { useDispatch } from "react-redux";

const Toggler = ({ theme }) => {
    const [isToggled, setIsToggled] = useState(theme === "dark");
    const dispatch = useDispatch();

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
        dispatch(toggleTheme());
    };

    return (
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
    )
}

export default Toggler;