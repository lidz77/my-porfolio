import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getWeatherToday, loadingWeather, selectWeather} from './weatherSlice';
import './Weather.css'

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
        <img src={`http://openweathermap.org/img/w/${weatherToday.details.icon}.png`} alt="weather icon"/>
        <h2>{weatherToday.main.temp}</h2>
        <h3>{weatherToday.details.main}</h3>
      </div>
    )
  }
}

export default Weather
