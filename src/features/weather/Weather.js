import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getWeatherToday, loadingWeather, selectWeather} from './weatherSlice'

const Weather = () => {
  const dispatch = useDispatch();
  const weatherIsLoading = useSelector(loadingWeather);
  const weatherToday = useSelector(selectWeather);
  useEffect(() => {
    dispatch(getWeatherToday());
  }, [dispatch])
  console.log(weatherToday);
  if (weatherIsLoading) {
    console.log(weatherIsLoading);
    return <p>Loading Weather</p>
  } else {
    return (
      <div className='weather-container'>
        <h2>{weatherToday.name}</h2>
        <h2>{weatherToday.main.temp}</h2>
      </div>
    )
  }
}

export default Weather
