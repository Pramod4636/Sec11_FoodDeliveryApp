import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartItem from './CartItem';

import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import {useState} from 'react' ; 
const Cart = (props) => {

  const [isChekout,setIsCheckout] = useState(false);
  const cartItemRemoveHandler = id => {} ;
  const cartItemAddHandler = item => {} ; 
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}` ;
  const hasItems = (cartCtx.items.length > 0 ) ; 


  const orderHandler = () => {
        setIsCheckout(true);
  } ;
  
  const submitOrderHandler = (userData) => { 
   
         console.log(userData) ;
         fetch('https://react-http-264e0-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', 
         {
           method : 'POST' , 
           body : JSON.stringify({
             user : userData , 
             orderedItems : cartCtx.items 
           } ), 

         }) ;      
  };

   const cartItems = (  
   <ul className = {classes['cart-items']}> 
        {   cartCtx.items.map( (item) => 
              ( <CartItem key = {item.id} name = {item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null,item.id)} onAdd = {cartItemAddHandler.bind(null,item)} />)
            )
        }       
   </ul> 
   );

  return (
    <Modal onClose = {props.onClose}>
      { cartItems }  
      <div className= {classes['total']} >
        <span> Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      { isChekout &&  <Checkout onConfirm = {submitOrderHandler}  onCancel = {props.onClose} /> }
          { !isChekout && 
          <div className= {classes['actions']}>
              <button className = {classes['button--alt']} onClick = {props.onClose}>close</button>
            {   hasItems && <button className = { classes['button']} onClick = {orderHandler}> Order</button> } 
          </div>        
      }
    </Modal>
  )
}

export default Cart
