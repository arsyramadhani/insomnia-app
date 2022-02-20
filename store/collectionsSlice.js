import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../services/supabaseClient";

export const fetchUserCollections = createAsyncThunk(
  "collections/fetchUserCollections",
  async (_, thunkAPI) => {
    const { data, error } = await supabase
      .from("collections")
      .select("id, title, user_id, created_at");
    return { data, error };
  }
);

export const collectionsSlice = createSlice({
  name: "collections",
  initialState: { data: [], status: null },
  extraReducers: {
    [fetchUserCollections.pending]: (state, payload) => {
      state.status = "loading";
    },
    [fetchUserCollections.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
      state.status = "idle";
    },
    [fetchUserCollections.rejected]: (state, payload) => {
      state.status = "failed";
    },
  },
});

// export const { fetchUserCollections } = collectionsSlice.actions;

export default collectionsSlice.reducer;
