import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../services/supabaseClient";

export const fetchScreenByCollectionId = createAsyncThunk(
  "screens/fetchScreenByCollectionId",
  async (collections_id, thunkAPI) => {
    const { data, error } = await supabase
      .from("screens")
      .select("*")
      .eq("collections_id", collections_id)
      .order("order", "ascending");
    return { data, error };
  }
);

export const screensSlice = createSlice({
  name: "screens",
  initialState: { data: [], status: "idle" },
  extraReducers: {
    [fetchScreenByCollectionId.pending]: (state, payload) => {
      state.status = "loading";
    },
    [fetchScreenByCollectionId.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
      state.status = "idle";
    },
    [fetchScreenByCollectionId.rejected]: (state, payload) => {
      state.status = "error";
    },
  },
});

// export const { fetchUserscreens } = screensSlice.actions;

export default screensSlice.reducer;
