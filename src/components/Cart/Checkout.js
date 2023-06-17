import React from 'react'
import classes from './Checkout.module.css' ; 
import { useRef ,useState } from 'react';


const isEmpty = value => value.trim() ==='';
const isFiveChars = value => value.trim().length === 5 ;



const Checkout = (props) => {
   
     const [formInputsValidity , setFormInputValidity] = useState({
        name : true , 
        street : true , 
        city : true,
        postalCode : true 
     });


     
    const confirmHandler  = (event )=>{
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;
      
      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreetIsValid);
      const enteredCityIsValid = !isEmpty(enteredCity);
      const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode); 

     setFormInputValidity({
        name : enteredNameIsValid , 
        street : enteredStreetIsValid ,
        city : enteredCityIsValid , 
        postalCode : enteredPostalCodeIsValid 

     }) ; 

     


      const formIsValid = 
         enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid ;

      if(!formIsValid)  // not valid then avoid furter steps 
      {
        return ; 
      }
      
      //submit cart data 

   }
    
    const nameInputRef = useRef() ; 
    const streetInputRef = useRef() ; 
    const postalCodeInputRef = useRef() ; 
    const cityInputRef = useRef() ; 
    

    return (
    <form className= {classes.form} onSubmit = {confirmHandler} >
        <div className={classes.control}>
            <label htmlFor="name"> Your Name </label>
            <input type="text" id="name" ref = {nameInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="street"> Street </label>
            <input type="text" id="street" ref = {streetInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="postal"> Postal code  </label>
            <input type="text" id="postal" ref = {postalCodeInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="city"> City   </label>
            <input type="text" id="city" ref = {cityInputRef} />
        </div>
        <button type = "button" onClick = {props.onCancel}>Cancel </button>
        <button>Confirm </button>
        
    </form>    
  )
}

export default Checkout
