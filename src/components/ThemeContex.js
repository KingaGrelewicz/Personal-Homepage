import { createContext, useContext, useState } from 'react';
import { light, dark } from '../theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    const currentTheme = theme === 'light' ? light : dark;

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
}

