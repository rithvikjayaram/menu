import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals from the backend API
    axios.get('http://localhost:3001/meals') // Replace with your backend URL
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
      });
  }, []);

  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <img src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p>Price: ${meal.price}</p>
            {/* Other meal information */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
