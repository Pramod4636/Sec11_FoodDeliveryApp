import React from 'react'
import DUMMY_MEALS from "./DUMMY_MEAL"
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';

import { useEffect } from 'react';
import {useState} from 'react'; 

import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
   
   const [meals,setMeals] = useState([]);
    useEffect( ()=> {
    
         const fetchMeals = async () => 
         {
            
           const response = await fetch("https://react-http-264e0-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json") ;
           const responseData = await response.json();

          const loadedMeals = [];

           for( const key in responseData ) { 
               loadedMeals.push( {
                  id : key ,
                  name : responseData[key]["name"],
                  description : responseData[key]["description"] ,
                  price : responseData[key]["price"] 
               });
           }

            setMeals(loadedMeals);
         }
  
         fetchMeals();

      }, []);

    const mealsList = meals.map( (meal) => {
       return ( <MealItem   
          key={meal.id} 
          id = {meal.id}
          name = {meal.name} 
          description = {meal.description} 
          price = {meal.price} 
          />); 
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
