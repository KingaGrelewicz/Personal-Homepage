import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../theme';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: lightTheme,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === lightTheme ? darkTheme : lightTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme.theme;
export default themeSlice.reducer;