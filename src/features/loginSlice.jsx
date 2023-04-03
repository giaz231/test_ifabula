import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (password === "admin") {
        state.isLoggedIn = true;
        state.user = {
          username: username,
        };
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.username = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
