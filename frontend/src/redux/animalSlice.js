import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET animals iz backend-a
export const fetchAnimals = createAsyncThunk(
  "animals/fetchAnimals",
  async () => {
    const res = await axios.get("http://localhost:5000/api/animals");
    return res.data;
  }
);

const animalSlice = createSlice({
  name: "animals",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnimals.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default animalSlice.reducer;