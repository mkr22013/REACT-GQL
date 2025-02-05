import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Features/Courses/courseSlice";

export const store = configureStore({
  reducer: reducer,
});
