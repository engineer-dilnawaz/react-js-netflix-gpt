import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.loggedInUser = action.payload;
    },
    updateProfileDetails: (state, action) => {
      state.loggedInUser = { ...state.loggedInUser, ...action.payload };
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { logIn, logout, updateProfileDetails } = authSlice.actions;

export default authSlice.reducer;
