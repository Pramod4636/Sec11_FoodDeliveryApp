import React from 'react'
import { useContext } from 'react'
import CartIcon from '../Cart/Cartoon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
const HeaderCartButton = ( props ) => {
  
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce( (curNumber ,item)=>{
    return curNumber + item.amount ; 
  } 
  , 0 );

  return (
    <React.Fragment>
        <button className={classes['button']} onClick = {props.onClick} >
            <span className={classes['icon']}> <CartIcon/></span>
            <span>You Cart </span>
            <span className= {classes['badge']}>{numberOfCartItems}</span>
            
        </button>
    </React.Fragment>
  )
}

export default HeaderCartButton
