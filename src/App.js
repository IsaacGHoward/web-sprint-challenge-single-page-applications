import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import OrderForm from './OrderForm'
const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <h1>Lambda Eats</h1>
          <p>Deliver whatever you want from home, while coding!</p>
          <Link to={'/order'}>
            <button>Pizza?</button>
          </Link>
        </div>
      </Route>
      <Route path="/order">
        <OrderForm/>
      </Route>
    </Router>
  );
};
export default App;
