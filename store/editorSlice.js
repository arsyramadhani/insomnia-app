import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "asdasdgaryra542rf",
    },
  ],
  status: "idle",
};

export const editorSlice = createSlice({
  name: "editors",
  initialState,
  reducers: {},
});

// export const { set, unset } = editorSlice.actions;

export default editorSlice.reducer;
