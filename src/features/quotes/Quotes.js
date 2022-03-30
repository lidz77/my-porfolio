import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types'
import {selectTodayQuote, loadingQuote, getTodayQuote} from './quotesSlice'

const Quotes = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayQuote())
  }, [dispatch])

  return (
    <div className="quote-container">
      hehe
    </div>
  )
}


export default Quotes
