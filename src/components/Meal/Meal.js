import React from 'react';

const Meal = (props) => {
    console.log(props.meal);
    const {strMeal, strArea, strMealThumb} = props.meal;
    return (
        <div>
            <h2>Food Name: {strMeal}</h2>
            <h5>Area: {strArea}</h5>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Meal;