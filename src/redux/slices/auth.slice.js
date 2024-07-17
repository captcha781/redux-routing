import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  id: "",
  token: "",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setupAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.id = action.payload.id;
      state.token = action.payload.token;

      return state;
    },
    resetAuth: (state, action) => {
      state = initialState;

      return state;
    },
  },
});

export const { setupAuth } = authSlice.actions;
export default authSlice.reducer;
