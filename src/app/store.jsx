import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";

export default configureStore({
  reducer: {
    loginStore: loginReducer,
  },
});
