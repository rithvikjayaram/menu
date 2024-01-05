const express = require('express');
const app = express();
const port = 3001; 

const meals = [
  { id: 1, name: 'Meal 1', price: 10, tags: ['tag1', 'tag2'], image: 'meal1.jpg' },
  { id: 2, name: 'Meal 2', price: 15, tags: ['tag2', 'tag3'], image: 'meal2.jpg' },
  
];

app.use(express.json());

app.get('/meals', (req, res) => {
  res.json(meals);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});