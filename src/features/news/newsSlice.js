import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("bookmarks")) || [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
      localStorage.setItem("newsly_bookmarks", JSON.stringify(state.bookmarks));
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.url !== action.payload
      );
      localStorage.setItem("newsly_bookmarks", JSON.stringify(state.bookmarks));
    },
  },
});

export const { addBookmark, removeBookmark } = newsSlice.actions;
export default newsSlice.reducer;
