import React from 'react'
import classes from './Cart.module.css'

const Cart = () => {
   const carItems = (  <ul className = {classes['cart-items']}> 
   { [{id : 'c1' , name : 'Sushi' , amount : 2 , price : 12.99}].map( item => {
       return (<li>{item.name}</li>)
   })}  </ul> );


  return (
    <div>
      { cartItems}  
      <div className= {classes['total']} >
        <span> Total Amount </span>
        <span>35.63</span>
      </div>
      <div className= {classes['actions']}>
          <button className = {classes['button--alt']}>close</button>
          <button className = { classes['button']}> Order</button>
      </div>        
    </div>
  )
}

export default Cart
