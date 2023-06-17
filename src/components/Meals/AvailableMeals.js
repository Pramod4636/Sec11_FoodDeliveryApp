import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';

import { useEffect } from 'react';
import {useState} from 'react'; 

import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
   
   const [meals,setMeals] = useState([]);
   const [isLoading , setIsLoading] = useState(true);
   const [httpError , setHttpError] = useState();
    useEffect( ()=> {
       
         const fetchMeals = async () => 
         {
            
           const response = await fetch("https://react-http-264e0-default-rtdb.asia-southeast1.firebasedatabase.app/meals") ;
           
           if(!response.ok )
           {
              throw new Error("Somethign went Wrong !");
           }
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
            setIsLoading(false);
         }
     
         
         fetchMeals().catch(error => {
                setIsLoading(false);
                setHttpError(error.message);
         });        
         
         
         
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

    if( httpError ) 
    {
       return (
         <section className = {classes.MealsError}>
           <p>{httpError}</p>
         </section>
       )
    }

    if(isLoading)
    {
       return <section className={classes.MealsLoading}> <p>Loading.......</p></section> ;
    }

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
