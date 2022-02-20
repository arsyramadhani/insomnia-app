import { configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "./collectionsSlice";
import loadingUiReducer from "./loadingUiSlice";
import minimalStateReducer from "./minimalStateSlice";
import screensReducer from "./screensSlice";
import sectionsReducer from "./sectionsSlice";

export const store = configureStore({
  reducer: {
    loadingui: loadingUiReducer,
    minimalState: minimalStateReducer,
    sections: sectionsReducer,
    collections: collectionsSlice,
    screens: screensReducer,
  },
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
