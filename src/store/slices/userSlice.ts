import { TUser } from "@/types/users.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      // state.email = action.payload.email;
      // state.firstName = action.payload.firstName;
      // state.gender = action.payload.gender;
      // state.id = action.payload.id;
      // state.image = action.payload.image;
      // state.lastName = action.payload.lastName;
      // state.token = action.payload.token;
      // state.username = action.payload.username;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
