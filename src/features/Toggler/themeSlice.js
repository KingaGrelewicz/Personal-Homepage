import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../theme';
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from '../themeLocalStorage';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: getThemeFromLocalStorage() || lightTheme,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === lightTheme ? darkTheme : lightTheme;
            saveThemeInLocalStorage(state.theme);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme.theme;
export default themeSlice.reducer;