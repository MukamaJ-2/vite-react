import express from 'express';
import { pool } from '../index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all children
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [children] = await pool.execute('SELECT * FROM children');
    res.json(children);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching children' });
  }
});

// Register a new child
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      age,
      parent_name,
      parent_phone,
      special_needs,
      session_type
    } = req.body;

    await pool.execute(
      `INSERT INTO children 
      (first_name, last_name, age, parent_name, parent_phone, special_needs, session_type)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, age, parent_name, parent_phone, special_needs, session_type]
    );

    res.status(201).json({ message: 'Child registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering child' });
  }
});

// Update child details
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      age,
      parent_name,
      parent_phone,
      special_needs,
      session_type
    } = req.body;

    await pool.execute(
      `UPDATE children 
      SET first_name = ?, last_name = ?, age = ?, parent_name = ?, 
          parent_phone = ?, special_needs = ?, session_type = ?
      WHERE id = ?`,
      [first_name, last_name, age, parent_name, parent_phone, special_needs, session_type, id]
    );

    res.json({ message: 'Child updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating child' });
  }
});

// Delete child
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM children WHERE id = ?', [id]);
    res.json({ message: 'Child deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting child' });
  }
});

export default router; 