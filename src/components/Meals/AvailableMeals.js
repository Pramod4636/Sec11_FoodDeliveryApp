import React from 'react'
import DUMMY_MEALS from "./DUMMY_MEAL"
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';


const AvailableMeals = () => {
   
    const mealsList = DUMMY_MEALS.map( (meal) => {
       return ( <li> {meal.name}</li> ); 
    });


    return (
   <section className = {classes['meals']}>
      <Card>
      <ul>
         {mealsList}
      </ul>
      </Card>
   </section>
  )
};

export default AvailableMeals
