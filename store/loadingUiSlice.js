import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loadingUiSlice = createSlice({
  name: "loadingui",
  initialState,
  reducers: {
    set: (state) => {
      state.value = true;
    },
    unset: (state) => {
      state.value = false;
    },
  },
});

export const { set, unset } = loadingUiSlice.actions;

export default loadingUiSlice.reducer;
