import { configureStore } from "@reduxjs/toolkit";
import commonStateReduser from "../slice/commonSlice";

export const store = configureStore({
  reducer: {
    commonState: commonStateReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
