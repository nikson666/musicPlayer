import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuth: false,
};

const authSclice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setIaAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
});

export const { setToken, setIaAuth } = authSclice.actions;
export default authSclice;
