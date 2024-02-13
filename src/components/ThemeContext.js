import { createContext, useContext, useState } from 'react';
import { light, dark } from '../theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "light" ? setTheme(light) : setTheme(dark);
    };


    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
}

