import React, { useEffect } from 'react'
import {  useParams, Outlet} from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/Ui/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';



export default function QuotesDetails() {
    const params = useParams();
    const {quotesId} = params;
   const {sendRequest , status , data : loadedQuote, error} = useHttp(getSingleQuote,true)

  useEffect(()=>{
    sendRequest(quotesId)
  },[sendRequest,quotesId])

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if(error){
    return <div className='centered'>{error}</div>
  }


    if(!loadedQuote.text){
      return <p>No quotes Found!</p>
    }
  return (
    <section>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Outlet/>
    </section>
  )
}
