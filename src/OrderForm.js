import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
const OrderForm = () => {
  return (
      <form className="App">
          <label>
              Name for Order: 
              <input type="text"/>
          </label>

        <br/>
        <Link to={'/pizza'}>
            <button>Submit Order</button>
        </Link>
      </form>
      
    
  );
};
export default OrderForm;