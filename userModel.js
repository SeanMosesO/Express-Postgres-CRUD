const db = require('../db');

// Get all users
async function getAllUsers() {
  const result = await db.query('SELECT * FROM users ORDER BY id');
  return result.rows;
}

// Get user by ID
async function getUserById(id) {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
}

// Create new user
async function createUser(name, email, age) {
  const result = await db.query(
    'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  return result.rows[0];
}

// Update user
async function updateUser(id, name, email, age) {
  const result = await db.query(
    'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
    [name, email, age, id]
  );
  return result.rows[0];
}

// Delete user
async function deleteUser(id) {
  await db.query('DELETE FROM users WHERE id = $1', [id]);
  return { message: 'User deleted' };
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
