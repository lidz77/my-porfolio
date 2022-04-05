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
  if (weatherIsLoading) {
    return <p>Loading Weather</p>
  } else {
    return (
      <div className='weather-container'>
        <h2>{weatherToday.name}</h2>
        <h2>{weatherToday.main.temp}</h2>
        <h2>{weatherToday.details.main}</h2>
        <img src={`http://openweathermap.org/img/w/${weatherToday.details.icon}.png`} alt="weather icon"/>
      </div>
    )
  }
}

export default Weather
