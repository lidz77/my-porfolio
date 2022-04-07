import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectTodayQuote, loadingQuote, getTodayQuote} from './quotesSlice'
import './Quotes.css'

const Quotes = () => {
  const dispatch = useDispatch();
  const quoteIsLoading = useSelector(loadingQuote);
  const todayQuote = useSelector(selectTodayQuote);
  useEffect(() => {
    dispatch(getTodayQuote())
  }, [dispatch])
  if (quoteIsLoading) {
    return <p>Loading quote...</p>
  } else {
    return (
      <div className="quote-container">
         <h2>"{todayQuote.content}"</h2>
         <h3>{todayQuote.author}</h3>
      </div>
    )
  }

}


export default Quotes
