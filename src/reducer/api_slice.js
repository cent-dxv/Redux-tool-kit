
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initilaState = {};

// export const fetch_user = createSlice({
//   name: "fetch_user",
//   initialState: { loadding: false, user: [], error: "0" },
//   reducers: {
//     fetch_request: (state) => {
//       state.loadding = true;
//     },
//     fetch_success: (state, action) => {
//       state.loadding = false;
//       state.error = "";
//       state.user = action.payload;
//     },
//     fetch_error: (state, action) => {
//       state.loadding = false;
//       state.error = action.payload;
//       state.user = [];
//     },
//   },
// });

// export const { fetch_request, fetch_success, fetch_error } = fetch_user.actions;
// export default fetch_user.reducer;


//new way
export const getPost = createAsyncThunk("fetch_user/getPost", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
});

// const initilaState = {
//   loadding: false,
//   user: [],
//   error: "0",
// };

export const fetch_user = createSlice({
  name: "fetch_user",
  initialState: {
    loadding: false,
    user: [],
    error: "0",
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.loadding = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loadding = false;
      state.error = "";
      state.user = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loadding = false;
      state.error = action.payload;
      state.user = [];
    },
  },
});

export const { fetch_request, fetch_success, fetch_error } = fetch_user.actions;
export default fetch_user.reducer;
