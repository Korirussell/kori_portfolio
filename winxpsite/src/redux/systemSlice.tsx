import { createSlice } from "@reduxjs/toolkit";

// Redux Reducer for System Settings State Mangagement
export const systemSlice = createSlice({
  name: "system",
  initialState: {
    backactive: false,
    theme: "luna-blue" as "luna-blue" | "olive-green" | "silver",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = systemSlice.actions;
export default systemSlice.reducer;
