import React from 'react'
import calsses from './Card.module.css'

const Card = (props) => {
  return (
    <div className= {class['card']}>
       {props.children}
    </div>
  )
}

export default Card
