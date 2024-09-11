import { Theme } from "../theme";
const localStorageKey = "theme";

export const saveThemeInLocalStorage = (theme: Theme): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(theme));
};

export const getThemeFromLocalStorage = (): Theme | null => {
  const themeString = localStorage.getItem(localStorageKey);
  if (!themeString) return null;

  try {
    return JSON.parse(themeString) as Theme;
  } catch (error) {
    console.error("Failed to parse theme from localStorage", error);
    return null;
  }
};
