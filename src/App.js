import { Switch,Route,Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import NotFound from "./Pages/NotFound";
import QuotesDetails from "./Pages/QuotesDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes/>
        </Route>
        <Route path='/quotes/:quotesId'>
          <QuotesDetails/>
        </Route>
        <Route path='/new-quote'>
          <NewQuotes/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
