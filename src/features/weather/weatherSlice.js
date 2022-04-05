import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
let apiKey = '1a258498a57379b2e592eb204293f514';
let lat = '14.3837464';
let lon = '107.8653757';

export const getWeatherToday = createAsyncThunk('weather/getWeatherToday',
  async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const {main, name, weather} = await data.json();
    let details = weather[0];
    return {main, name, details};
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState:{
    weatherToday:{},
    isLoading: true,
    hasError: false
  },
  reducers:{},
  extraReducers:{
    [getWeatherToday.pending]:(state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getWeatherToday.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.weatherToday = action.payload;
    },
    [getWeatherToday.rejected]:(state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  }
})

export const selectWeather = (state) => {
  return state.weather.weatherToday;
}
export const loadingWeather = (state) => {
  return state.weather.isLoading;
}

export default weatherSlice.reducer
