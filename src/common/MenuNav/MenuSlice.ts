import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface MenuState {
    isOpen: boolean;
  }
  
  const initialState: MenuState = {
    isOpen: false,
  };

  const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: state => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: state => {
            state.isOpen = false;
        },
    },
  });

  export const {toggleMenu, closeMenu} = menuSlice.actions;

  export const SelectIsMenuOpen = (state: RootState) => state.menu.isOpen;

  export default menuSlice.reducer;