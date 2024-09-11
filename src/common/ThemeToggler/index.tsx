import React from "react";
import {
    HeaderModeIcon,
    HeaderToggleMode,
    HeaderToggler,
    HeaderTogglerIcon,
    HeaderTogglerLabel
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";


const ThemeToggler = () => {
    const isDarkTheme = useAppSelector(selectIsDarkTheme);
    const dispatch = useAppDispatch();

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