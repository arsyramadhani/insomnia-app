import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    id: "82o30sadkV",
    type: "splash",
    title: "Splash Screen",
    data: {},
    config: {},
  },
  {
    id: "98asd723i",
    type: "welcome",
    title: "Welcome Screen",
    data: {
      title: "Harfia & Riky",
      date: new Date().toISOString(),
    },
    config: {
      align: "justify-start",
    },
  },
  {
    id: "29oauosjd",
    type: "person",
    title: "Groom & Bride",
    data: {},
    config: {},
  },
];

export const screensSlice = createSlice({
  name: "screens",
  initialState: {
    data: initialData,
    status: "idle",
  },
});

// export const { fetchUserscreens } = screensSlice.actions;

export default screensSlice.reducer;
