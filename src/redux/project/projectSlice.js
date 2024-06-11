import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addproject = createAsyncThunk("project/projectregister", async (payload) => {
  return axios
    .post(`http://localhost:8000/api/projectregister`, payload)
    .then((res) => res.data);
});
export const getproject = createAsyncThunk("project/getprojectdata", async () => {
  return axios
    .get("http://localhost:8000/api/getprojectalldata")
    .then((res) => res.data);
});

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    project: [],
    error: "",
    isSuccess: "",
  },

  // reducer call
  extraReducers: (builder) => {
    builder.addCase(addproject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });

    builder.addCase(getproject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = action.payload;
      state.error = "";
    });
    builder.addCase(getproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });
  },
});

export default projectSlice.reducer;
