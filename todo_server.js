const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

// 20 sample todos
const todos = [
  { id: 1, title: "Go to the gym", description: "Workout for 1 hour", completed: false },
  { id: 2, title: "Study DSA", description: "Solve 5 problems", completed: false },
  { id: 3, title: "Learn React", description: "Complete useState hook tutorial", completed: false },
  { id: 4, title: "Meditate", description: "Meditate for 15 minutes", completed: true },
  { id: 5, title: "Read a book", description: "Read 20 pages", completed: false },
  { id: 6, title: "Call parents", description: "Check in with family", completed: true },
  { id: 7, title: "Go for a walk", description: "Evening walk 30 minutes", completed: false },
  { id: 8, title: "Clean desk", description: "Organize workspace", completed: true },
  { id: 9, title: "Drink water", description: "8 glasses today", completed: false },
  { id: 10, title: "Write journal", description: "Reflect on the day", completed: false },
  { id: 11, title: "Watch a tutorial", description: "Learn Express.js basics", completed: true },
  { id: 12, title: "Cook dinner", description: "Try new recipe", completed: false },
  { id: 13, title: "Do laundry", description: "Wash and fold clothes", completed: true },
  { id: 14, title: "Plan tomorrow", description: "Set goals for next day", completed: false },
  { id: 15, title: "Listen to podcast", description: "Tech podcast 30 mins", completed: true },
  { id: 16, title: "Update resume", description: "Add recent projects", completed: false },
  { id: 17, title: "Practice coding", description: "1 LeetCode problem", completed: false },
  { id: 18, title: "Clean inbox", description: "Delete old emails", completed: false },
  { id: 19, title: "Stretch", description: "10 min full-body stretch", completed: true },
  { id: 20, title: "Sleep early", description: "Go to bed before 11PM", completed: false }
];

// ✅ Fixed endpoint
app.get('/todo', (req, res) => {
  const idParam = req.query.id;

  if (idParam) {
    const id = parseInt(idParam);
    const todo = todos.find(t => t.id === id);
    if (todo) {
      return res.json(todo); // ✅ Use return to stop function here
    } else {
      return res.status(404).json({ error: 'Todo not found' });
    }
  }

  // ✅ Only runs if no ID is provided
  const randomIndex = Math.floor(Math.random() * todos.length);
  const randomTodo = todos[randomIndex];
  res.json(randomTodo);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
