import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    no: 0,
    id: "isk456921x",
    type: "welcome",
    title: "Welcome Screen",
  },
  {
    no: 1,
    id: "92kHksz6s2",
    type: "mempelai",
    title: "Pasangan Mempelai",
  },
  {
    no: 2,
    id: "G7Gbss7s8a",
    type: "doa",
    title: "Doa menikah",
  },
];

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducer: {
    load: (state) => {
      return [...state];
    },
  },
});
export const { load } = sectionsSlice.actions;
export default sectionsSlice.reducer;
