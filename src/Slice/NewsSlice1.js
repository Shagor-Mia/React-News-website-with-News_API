import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "5026024fd7b7496d816c2b8d23af17ec";

// Async Thunk to Fetch News
export const fetchNews = createAsyncThunk(
  "search/fetchNews",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      return data.articles; // Return only articles array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCard = createAsyncThunk(
  "card/fetchCard",
  async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles; // Return only articles array
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload; // Assign articles array
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload; // Assign articles array
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
