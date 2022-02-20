import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "AAxsda4fx",
    title: "Undangan Pernikahan Bgito & Rihma",
    last_update: "21 Jan 2022",
  },
  {
    id: "9sKsdP7sf",
    title: "Undangan Pernikahan Dika & Namy",
    last_update: "14 Feb 2022",
  },
];

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
});

export const { set, unset } = collectionsSlice.actions;

export default collectionsSlice.reducer;
