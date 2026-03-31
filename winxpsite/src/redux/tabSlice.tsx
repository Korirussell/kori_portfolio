import { AppDirectory } from "@/appData";
import { App, Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";

// Redux Reducer for Tab/Windows State Mangagement
export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [
      {
        id: "init-welcome",
        title: "Quick Start Guide",
        message: "",
        Icon: help,
        isMinimized: false,
        zIndex: 1,
        program: App.WELCOME,
        prompt: false,
        backBtnActive: false,
      },
      {
        id: "init-mywork",
        title: "My Work",
        message: "",
        Icon: cmd,
        isMinimized: false,
        zIndex: 0,
        program: App.MYWORK,
        prompt: false,
        backBtnActive: false,
      },
    ] as Tab[],
    id: 0,
    currentFocusedTab: "init-welcome" as string | number,
    currentZIndex: 2,
  },
  reducers: {
    addTab: (state, action) => {
      state.tray.push(action.payload);
      action.payload.zIndex = state.currentZIndex;
      state.currentFocusedTab = action.payload.id;
      state.id = state.id + 1;
      state.currentZIndex = state.currentZIndex + 1;
    },
    removeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray = state.tray.filter((_, i) => {
        return i !== index;
      });
    },
    minimizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = true;
    },
    maximizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = false;
    },
    setFocusedTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      if (index !== -1 && state.currentFocusedTab !== state.tray[index].id) {
        state.currentZIndex = state.currentZIndex + 1;
        state.tray[index].zIndex = state.currentZIndex;
      }
      state.currentFocusedTab = action.payload.id;
    },
    setBackBtn: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].backBtnActive = action.payload.backBtnActive;
    },
  },
});

export const {
  addTab,
  removeTab,
  minimizeTab,
  maximizeTab,
  setFocusedTab,
  setBackBtn,
} = tabtraySlice.actions;
export default tabtraySlice.reducer;
