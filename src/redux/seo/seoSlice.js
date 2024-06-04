import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom"


export const fetchUsers = createAsyncThunk("seo/getdata", async () => {
  return axios
    .get("http://localhost:8000/api/getseodata")
    .then((res) => res.data);
});

export const addUser = createAsyncThunk("seo/seoregister", async (payload) => {
  return axios
    .post(`http://localhost:8000/api/seoregister`, payload)
    .then((res) => res.data);
});
export const SingleUser = createAsyncThunk("seo/getseosingledata", async (payload) => {
  const { id } = useParams("");
  console.log(id);
  return axios
    .get(`http://localhost:8000/api/getseosingledata/${id}`, payload)
    .then((res) => res.data);
});
export const updateUser = createAsyncThunk("seo/updateseodata", async (payload) => {
  return axios
    .patch(`http://localhost:8000/api/updateseodata`, payload)
    .then((res) => res.data);
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

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });

    builder.addCase(SingleUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(SingleUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(SingleUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default seoSlice.reducer;
