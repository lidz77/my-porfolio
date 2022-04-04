import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectTodayQuote, loadingQuote, getTodayQuote} from './quotesSlice'

const Quotes = () => {
  const dispatch = useDispatch();
  const quoteIsLoading = useSelector(loadingQuote);
  const todayQuote = useSelector(selectTodayQuote);
  useEffect(() => {
    dispatch(getTodayQuote())
  }, [dispatch])
  if (quoteIsLoading) {
    console.log('quote failed');
    return <p>Loading quote...</p>
  } else {
    console.log('quote loaded')
    return (
      <div className="quote-container">
         <h2>{todayQuote.content}</h2>
         <p>{todayQuote.author}</p>
      </div>
    )
  }

}


export default Quotes
