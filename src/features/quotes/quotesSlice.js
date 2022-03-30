import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit'

export const getTodayQuote = createAsyncThunk('quotes/getTodayQuote',
  async () => {
    const data = await fetch('https://api.quotable.io/random');
    const {content, author} = await data.json();
    return {content, author};
  }
)

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState:{
    todayQuote:{},
    isLoading: false,
    hasError: false
  },
  reducers:{},
  extraReducers:{
    [getTodayQuote.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getTodayQuote.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.todayQuote = action.payload;
    },
    [getTodayQuote.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  }
})

export const selectTodayQuote = (state) => {
  return state.quotes.todayQuote;
}
export const loadingQuote = (state) => {
  return state.quotes.isLoading;
}

export default quotesSlice.reducer;
