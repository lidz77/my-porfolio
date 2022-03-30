import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getWeatherToday, loadingWeather, selectWeather} from './weatherSlice'

const Weather = (props) => {
  const dispatch = useDispatch();
  const weatherToday = useSelector(selectWeather);
  const weatherIsLoading = useSelector(loadingWeather);

  useEffect(() => {
    dispatch(getWeatherToday());
  }, [dispatch])
  console.log(weatherToday);
  if (weatherIsLoading) {
    return <p>Loading Weather</p>
  } else {
    return (
      <div className='weather-container'>
        ???
      </div>
    )
  }
}

export default Weather
