import { createSlice } from '@reduxjs/toolkit';
import { saveThemeInLocalStorage } from '../themeLocalStorage';


const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkTheme: localStorage.getItem('theme') === 'dark' ? true : false,
    },
    reducers: {
        toggleTheme: state => {
            state.isDarkTheme = !state.isDarkTheme;
            saveThemeInLocalStorage('theme', state.isDarkTheme ? 'dark' : 'light');
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = state => state.theme.isDarkTheme;
export default themeSlice.reducer;