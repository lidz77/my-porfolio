import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const clientId = 'qECfCNJxXgsRf2Wp63T7SAEW3xz-AzF-WJEcPy14Ywg';

export const getImages = createAsyncThunk('backgroundImages/getImages',
  async () => {
    const data = await fetch(`https://api.unsplash.com/photos?client_id=${clientId}`);
    const response = await data.json();
    let imgList = response.map(item => item.urls.regular);
    return imgList;
  }
)

export const backgroundImagesSlice = createSlice({
  name:'backgroundImages',
  initialState:{
    images:{},
    isLoading: true,
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

export const selectBackgrounds = (state) => {
  return state.backgroundImages.images;
}
export const loadingBackgrounds = (state) => {
  return state.backgroundImages.isLoading;
}

export default backgroundImagesSlice.reducer
