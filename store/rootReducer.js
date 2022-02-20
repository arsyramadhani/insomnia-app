import { configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "./collectionsSlice";
import loadingUiReducer from "./loadingUiSlice";
import minimalStateReducer from "./minimalStateSlice";
import sectionsReducer from "./sectionsSlice";

export const store = configureStore({
  reducer: {
    loadingui: loadingUiReducer,
    minimalState: minimalStateReducer,
    sections: sectionsReducer,
    collections: collectionsSlice,
  },
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
