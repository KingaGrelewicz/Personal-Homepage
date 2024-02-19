import { useState } from "react";
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from "./themeLocalStorage";

const useTheme = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage() || "light");
    const isLightTheme = theme === "light";
  
    const toggleTheme = () => {
      const newTheme = isLightTheme ? "dark" : "light";
      setTheme(newTheme);
      saveThemeInLocalStorage(newTheme);
    };

    return { theme, toggleTheme, isLightTheme };
}

export default useTheme;