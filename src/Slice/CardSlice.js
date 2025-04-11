import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "5026024fd7b7496d816c2b8d23af17ec";

// Replace with a real API URL
export const fetchCard = createAsyncThunk(
  "card/fetchCard",
  async (catagory) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return data.articles;
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload; // Update state correctly
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
