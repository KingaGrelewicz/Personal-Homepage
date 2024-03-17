const localStorageKey = "theme";

export const saveThemeInLocalStorage = theme => {
    localStorage.setItem(localStorageKey, JSON.stringify(theme));
};

export const getThemeFromLocalStorage = theme => {
    JSON.parse(localStorage.getItem(localStorageKey));
}
