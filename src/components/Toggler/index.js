import { useState } from "react";
import { 
    HeaderModeIcon, 
    HeaderToggleMode, 
    HeaderToggler, 
    HeaderTogglerIcon, 
    HeaderTogglerLabel 
} from "./styled";
import useTheme from "../useTheme";

const Toggler = ({ theme }) => {
    const [isToggled, setIsToggled] = useState(theme === "dark");
    const { toggleTheme } = useTheme();

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
        toggleTheme();
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

