import React, {useState, useEffect} from "react";
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
          <h1>Build Your Pizza</h1>
          <label>
              Name for Order: 
              <input type="text" name="name"/>
          </label>
          <label>
              Size: 
              <select name='size'> 
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='XTRA Large'>XTRA Large</option>
              </select>
          </label>
          <br/>
              <h3>Toppings: </h3>
              <label>Pepperoni: <input type="checkbox" id="pepperoni" name="pepperoni"/></label>
              <label>Sausage: <input type="checkbox" id="sausage" name="sausage"/></label>
              <label>Mushroom: <input type="checkbox" id="mushroom" name="mushroom"/></label>
              <label>Onion: <input type="checkbox" id="onion" name="onion"/></label>
          <br/>
          <label>
            Special Instructions: 
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