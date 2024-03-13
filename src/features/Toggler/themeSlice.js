import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from '../themeLocalStorage';


const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkTheme: getThemeFromLocalStorage() === 'dark',
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
            saveThemeInLocalStorage(state.isDarkTheme ? 'dark' : 'light');
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = state => state.theme.isDarkTheme;
export default themeSlice.reducer;