import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  errors: "",
};

export const minimalState = createSlice({
  name: "minimalstate",
  initialState,
  reducers: {},
});

export const { set, unset } = minimalState.actions;

export default minimalState.reducer;
