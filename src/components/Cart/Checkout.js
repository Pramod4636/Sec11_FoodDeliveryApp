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
      const enteredStreetIsValid = !isEmpty(enteredStreet);
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
    
     const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid }` ;
     const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid }` ;
     const postCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid }` ;
     
     const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid }` ;
     


    return (
    <form className= {classes.form} onSubmit = {confirmHandler} >
        <div className= {nameControlClasses}>
            <label htmlFor="name"> Your Name </label>
            <input type="text" id="name" ref = {nameInputRef}/>
            { !formInputsValidity.name && <p  >Please enter valid name! </p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor="street"> Street </label>
            <input type="text" id="street" ref = {streetInputRef} />
            { !formInputsValidity.street && <p >Please enter valid street! </p>}
        </div>
        <div className= {postCodeControlClasses} >
            <label htmlFor="postal"> Postal code  </label>
            <input type="text" id="postal" ref = {postalCodeInputRef} />
            { !formInputsValidity.postalCode && <p >Please enter valid PostalCode ! </p>}
        </div>
        <div className = {cityControlClasses} >
            <label htmlFor="city"> City   </label>
            <input type="text" id="city" ref = {cityInputRef} />
            { !formInputsValidity.city && <p  >Please enter valid City! </p>}
        
        </div>
        <button className = {classes.actions} type = "button" onClick = {props.onCancel}>Cancel </button>
        <button>Confirm </button>
        
    </form>    
  )
}

export default Checkout
