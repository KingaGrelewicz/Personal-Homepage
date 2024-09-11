import { createSlice } from "@reduxjs/toolkit";
import { saveThemeInLocalStorage } from "../../features/themeLocalStorage";
import { darkTheme, lightTheme, Theme } from "../../theme";

interface ThemeState {
  theme: Theme;
  isDarkTheme: boolean;
}

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "dark" ? darkTheme : lightTheme;
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
  isDarkTheme: localStorage.getItem("theme") === "dark" ? true : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      state.theme = state.isDarkTheme ? darkTheme : lightTheme;
      saveThemeInLocalStorage(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = (state: { theme: ThemeState }) =>
  state.theme.isDarkTheme;
export default themeSlice.reducer;
