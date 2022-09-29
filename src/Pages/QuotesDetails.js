import React from 'react'
import { Route , useParams} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY__DATA = [{
  id : 'q1',author : 'thant' , text : 'Learning React'
},
{
  id : 'q2',author : 'thantzin' , text : 'Learning React is Fun!'
},
]

export default function QuotesDetails() {
    const params = useParams();
    const quote = DUMMY__DATA.find(quote=> quote.id === params.quotesId)
    if(!quote){
      return <p>No quotes Found!</p>
    }
  return (
    <section>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        
        <Route path={`/quotes/${params.quotesId}/comments`}>
            <Comments/>
        </Route>
    </section>
  )
}
