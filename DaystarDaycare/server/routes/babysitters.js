import express from 'express';
import { pool } from '../index.js';
import { authenticateToken, isManager } from '../middleware/auth.js';

const router = express.Router();

// Get all babysitters
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [babysitters] = await pool.execute('SELECT * FROM babysitters');
    res.json(babysitters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching babysitters' });
  }
});

// Register a new babysitter
router.post('/', authenticateToken, isManager, async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      nin,
      age,
      next_of_kin_name,
      next_of_kin_phone
    } = req.body;

    // Validate age
    if (age < 21 || age > 35) {
      return res.status(400).json({ message: 'Babysitter must be between 21 and 35 years old' });
    }

    // Create user account for babysitter
    const [userResult] = await pool.execute(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [email || phone_number, 'default_password', 'babysitter']
    );

    const userId = userResult.insertId;

    // Insert babysitter details
    await pool.execute(
      `INSERT INTO babysitters 
      (user_id, first_name, last_name, email, phone_number, nin, age, next_of_kin_name, next_of_kin_phone)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, first_name, last_name, email, phone_number, nin, age, next_of_kin_name, next_of_kin_phone]
    );

    res.status(201).json({ message: 'Babysitter registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering babysitter' });
  }
});

// Update babysitter details
router.put('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      email,
      phone_number,
      nin,
      age,
      next_of_kin_name,
      next_of_kin_phone
    } = req.body;

    // Validate age
    if (age < 21 || age > 35) {
      return res.status(400).json({ message: 'Babysitter must be between 21 and 35 years old' });
    }

    await pool.execute(
      `UPDATE babysitters 
      SET first_name = ?, last_name = ?, email = ?, phone_number = ?, 
          nin = ?, age = ?, next_of_kin_name = ?, next_of_kin_phone = ?
      WHERE id = ?`,
      [first_name, last_name, email, phone_number, nin, age, next_of_kin_name, next_of_kin_phone, id]
    );

    res.json({ message: 'Babysitter updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating babysitter' });
  }
});

// Delete babysitter
router.delete('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM babysitters WHERE id = ?', [id]);
    res.json({ message: 'Babysitter deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting babysitter' });
  }
});

export default router; 