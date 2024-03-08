const localStorageKey = "theme";

export const saveThemeInLocalStorage = theme => {
    localStorage.setItem(localStorageKey, JSON.stringify(theme));
};

export const getThemeFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {};
};
