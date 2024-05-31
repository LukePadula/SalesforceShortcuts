import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "SEARCH",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onSearchTermChanged: (state, action) => {
      console.log(action.payload);
      state.searchTerm = action.payload;
    },
  },
});

export const { onSearchTermChanged } = searchSlice.actions;
export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;
