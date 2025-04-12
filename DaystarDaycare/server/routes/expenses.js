import express from 'express';
import { pool } from '../index.js';
import { authenticateToken, isManager } from '../middleware/auth.js';

const router = express.Router();

// Get all expenses
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [expenses] = await pool.execute(`
      SELECT * FROM expenses
      ORDER BY date DESC
    `);
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

// Record a new expense
router.post('/', authenticateToken, isManager, async (req, res) => {
  try {
    const {
      category,
      amount,
      description
    } = req.body;

    const date = new Date().toISOString().split('T')[0];

    await pool.execute(
      `INSERT INTO expenses 
      (category, amount, description, date)
      VALUES (?, ?, ?, ?)`,
      [category, amount, description, date]
    );

    res.status(201).json({ message: 'Expense recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error recording expense' });
  }
});

// Update expense
router.put('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category,
      amount,
      description
    } = req.body;

    await pool.execute(
      `UPDATE expenses 
      SET category = ?, amount = ?, description = ?
      WHERE id = ?`,
      [category, amount, description, id]
    );

    res.json({ message: 'Expense updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating expense' });
  }
});

// Delete expense
router.delete('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM expenses WHERE id = ?', [id]);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting expense' });
  }
});

// Get expense report
router.get('/report', authenticateToken, async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    const [report] = await pool.execute(`
      SELECT 
        category,
        SUM(amount) as total_amount,
        COUNT(*) as total_expenses
      FROM expenses
      WHERE date BETWEEN ? AND ?
      GROUP BY category
      ORDER BY total_amount DESC
    `, [start_date, end_date]);

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating expense report' });
  }
});

export default router; 