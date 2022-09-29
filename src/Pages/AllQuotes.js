import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY__DATA = [{
  id : 'q1',author : 'thant' , text : 'Learning React'
},
{
  id : 'q2',author : 'thantzin' , text : 'Learning React is Fun!'
},
]
export default function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY__DATA}/>
  )
}
