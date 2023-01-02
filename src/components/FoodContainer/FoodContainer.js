import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const FoodContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h3>search your food on: {meals.length}</h3>
      <input onChange={searchFood} type="text" />
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default FoodContainer;
