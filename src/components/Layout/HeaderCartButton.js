import React from 'react'
import CartIcon from '../Cart/Cartoon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <React.Fragment>
        <button className={classes['button']}>
            <span className={classes['icon']}> <CartIcon/></span>
            <span>You Cart </span>
            <span className= {classes['badge']}>3</span>
            
        </button>
    </React.Fragment>
  )
}

export default HeaderCartButton
