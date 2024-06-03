import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("seo/getdata", async () => {
  return axios
    .get("http://localhost:8000/api/getseodata")
    .then((res) => res.data);
});

export const addUser = createAsyncThunk("seo/seoregister", async (values) => {
  return fetch("http://localhost:8000/api/seoregister", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      title: values.title,
      author: values.author,
      keyword: values.keyword,
      description: values.description,
    }),
  }).then((res) => res.json());
});

const seoSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: [],
    error: "",
    isSuccess: "",
  },

  // reducer call
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });

     builder.addCase(addUser.pending, (state) => {
       state.loading = true;
       state.error = "";
     });
     builder.addCase(addUser.fulfilled, (state, action) => {
       state.loading = false;
       state.user = [];
       state.isSuccess = action.payload;
     });

     builder.addCase(addUser.rejected, (state, action) => {
       state.loading = false;
       state.user = [];
       state.error = action.error.message;
     });
  },
});

export default seoSlice.reducer;
