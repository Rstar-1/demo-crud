import { configureStore } from "@reduxjs/toolkit";
import seoSlice from "./seo/seoSlice"
import projectSlice from "./project/projectSlice"

export const store = configureStore({
  reducer: { user: seoSlice, project: projectSlice },
});

export default store;