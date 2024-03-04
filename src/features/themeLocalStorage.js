const localStorageKey = "theme";

export const saveThemeInLocalStorage = (theme) =>
    localStorage.setItem(localStorageKey, theme);

export const getThemeFromLocalStorage = () =>
    localStorage.getItem(localStorageKey);