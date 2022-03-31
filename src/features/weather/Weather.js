import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getWeatherToday, loadingWeather, selectWeather} from './weatherSlice'

const Weather = (props) => {
  const dispatch = useDispatch();
  const weatherIsLoading = useSelector(loadingWeather);
  const weatherToday = useSelector(selectWeather);
  console.log(weatherIsLoading);
  useEffect(() => {
    dispatch(getWeatherToday());
  }, [dispatch])

  if (weatherIsLoading || !weatherToday) {
    return <p>Loading Weather</p>
  } else {
    let url = 'http://openweathermap.org/img/w/' + weatherToday.weather[0].icon + '.png'
    return (
      <div className='weather-container'>
        <img alt="weather icon" className="weather-icon" src={url} />
        <h2>{weatherToday.name}</h2>
        <h2>{weatherToday.main.temp}</h2>
        <h2>{weatherToday.weather[0].main}</h2>
      </div>
    )
  }
}

export default Weather
