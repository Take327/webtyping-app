import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "commonState",
  initialState: {
    sideNaviOpen: false,
  },
  reducers: {
    changeState: (state) => {
      state.sideNaviOpen = !state.sideNaviOpen;
    },
  },
});

export const { changeState } = commonSlice.actions;

export default commonSlice.reducer;
