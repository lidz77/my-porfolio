import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

let clientId = 'qECfCNJxXgsRf2Wp63T7SAEW3xz-AzF-WJEcPy14Ywg';

export const getImages = createAsyncThunk('backgrounds/getImages',
  async () => {
    const data = await fetch(`https://api.unsplash.com/photos?client_id=${clientId}`);
    const response = await data.json();
    return response;
  }
)

export const backgroundsSlice = createSlice({
  name:'backgrounds',
  initialState:{
    images:{},
    isLoading: false,
    hasError: false
  },
  reducers:{},
  extraReducers:{
    [getImages.pending]:(state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getImages.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.images = action.payload;
    },
    [getImages.rejected]:(state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  }
})

export const loadingBackgrounds = (state) => {
  return state.backgrounds.isLoading;
}
export const selectBackground = (state) => {
  return state.backgrounds.images;
}

export default backgroundsSlice.reducer
