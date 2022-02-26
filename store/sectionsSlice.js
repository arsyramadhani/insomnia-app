import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  data: [
    {
      id: "QQjZvdrt9FI",
      type: "welcome",
      metadata: {
        title: "Indira & Nurmana",
        date: new Date().toLocaleDateString(),
        attribute1: "Wedding of",
        attribute2: "We are happy to invite you to our wedding",
        attribute3: "",
      },
      config: {
        hasTitle: true,
        textAlign: "center",
        position: "justify-center",
        displayDate: 1,
        display: {
          fontSize: "text-2xl",
          fontWeight: "font-bold",
        },
        body: {
          fontSize: "text-md",
          fontWeight: "font-normal",
        },
        padding: 8,
      },
    },
  ],
};

const initialState = {
  data: {},
  status: "idle",
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    data: initialData.data,
    status: "idle",
  },
  reducers: {
    filterSection: (state, { payload }) => {
      const newData = initialData.data.find(({ id }) => id === payload);
      return {
        ...state,
        data: newData,
      };
    },
    changeMetadata: (state, { payload }) => {
      return {
        status: { ...state.status },
        data: {
          ...state.data,
          [payload.type]: payload.data,
        },
      };
    },
  },
});
export const { filterSection, changeMetadata } = sectionsSlice.actions;
export default sectionsSlice.reducer;
