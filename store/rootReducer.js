import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collectionsSlice";
import screensReducer from "./screensSlice";

export const store = configureStore({
  reducer: {
    collections: collectionReducer,
    screens: screensReducer,
  },
});
