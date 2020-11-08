import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
const Pizza = (props) => {
  return (
      <div className="App">
          <h1>Pizza is on the way!</h1>
          <h2>Your Order: </h2>
          <pre>{JSON.stringify(props.location.state.pizza, null, 2)}</pre>
          <Link to="/">Return to home</Link>
      </div>
    
  );
};
export default Pizza;
