import { configureStore } from "@reduxjs/toolkit";
import seoSlice from "./seo/seoSlice"

export const store = configureStore({
  reducer: { user: seoSlice },
});

export default store;