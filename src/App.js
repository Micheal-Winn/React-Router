import { Routes,Route,Navigate,Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import NotFound from "./Pages/NotFound";
import QuotesDetails from "./Pages/QuotesDetails";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to={'/quotes'} />} />

        <Route path='/quotes' element={<AllQuotes/>}/>
        <Route path='/quotes/:quotesId' element={<QuotesDetails/>}>
          <Route 
            path=""
            element={
              <div className='centered'>
            <Link className='btn--flat' to={'comments'}>Load Comments</Link>
          </div>
            }
          />
          <Route path="comments" element={ <Comments/>}/>
        </Route>
        <Route path='/new-quote' element={<NewQuotes/>}/>       
        <Route path='*' element={<NotFound/>}/>       
      </Routes>
    </Layout>
  );
}

export default App;
