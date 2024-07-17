import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  username: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setupUser: (state, action) => {
      const { payload } = action;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.username = payload.username;
      state.gender = payload.gender;

      return state;
    },

    resetUser: (state, action) => {
      state = initialState;

      return state;
    },
  },
});

export const { resetUser, setupUser } = userSlice.actions;
export default userSlice.reducer;
