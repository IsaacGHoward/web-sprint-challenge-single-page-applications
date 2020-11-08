import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import * as Yup from "yup";
const axios = require('axios').default;
const OrderForm = () => {
    const formSchema = Yup.object().shape({
        name: Yup
          .string()
          .required("Must include name.")
          .min(2, "Name must be at least 2 characters")
      });
    const [errors, setErrors] = useState({
      name:'',
    });
    const [formState, setFormState] = useState({
      name:'',
      size:'Small',
      toppings:[],
      instruct:''
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const inputChange = e => {
        e.persist();
        let value = e.target.value;
        if(e.target.type === "checkbox")
            value = e.target.checked;
        if(e.target.name === "name"){
            Yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
            })
            .catch(err => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            });
            });
        }
        if(e.target.type !== "checkbox"){
            setFormState({
                ...formState,
                [e.target.name]: value
            });
        }
        else {
            if(value){
                setFormState({
                    ...formState,
                    "toppings": [...formState.toppings, e.target.name]
                });
            }
            else{
                var topps = formState.toppings;
                var idx = topps.indexOf(e.target.name);
                topps.splice(idx, 1);
                setFormState({
                    ...formState,
                    "toppings": topps
                });

            }
            
        }
            
        
    };
  return (
      <form className="App">
          <h1>Build Your Pizza</h1>
          <label>
              Name for Order: 
              <input type="text" name="name" onChange={inputChange}/>
          </label>
          <label>
              Size: 
              <select name='size' onChange={inputChange}> 
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='XTRA Large'>XTRA Large</option>
              </select>
          </label>
          <br/>
              <h3>Toppings: </h3>
              <label>Pepperoni: <input type="checkbox" id="pepperoni" name="pepperoni" onChange={inputChange}/></label>
              <label>Sausage: <input type="checkbox" id="sausage" name="sausage" onChange={inputChange}/></label>
              <label>Mushroom: <input type="checkbox" id="mushroom" name="mushroom" onChange={inputChange}/></label>
              <label>Onion: <input type="checkbox" id="onion" name="onion" onChange={inputChange}/></label>
          <br/>
          <label>
            Special Instructions: 
            <input type="text" name="instruct" onChange={inputChange}/>
          </label>
            
        <br/>
        <button>Submit Order</button>
      </form>
      
    
  );
};
export default OrderForm;