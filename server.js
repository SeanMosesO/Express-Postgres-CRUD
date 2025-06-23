const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json()); // Middleware to parse JSON

const userRoutes = require('./routes/users');
app.use('/users', userRoutes); // Mount /users route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
