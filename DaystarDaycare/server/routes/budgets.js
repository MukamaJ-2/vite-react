import express from 'express';
import { pool } from '../index.js';
import { authenticateToken, isManager } from '../middleware/auth.js';

const router = express.Router();

// Get all budgets
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [budgets] = await pool.execute(`
      SELECT b.*, 
             COALESCE(SUM(e.amount), 0) as actual_spending,
             b.amount - COALESCE(SUM(e.amount), 0) as remaining
      FROM budgets b
      LEFT JOIN expenses e ON b.category = e.category 
        AND MONTH(e.date) = b.month 
        AND YEAR(e.date) = b.year
      GROUP BY b.id
      ORDER BY b.year DESC, b.month DESC
    `);
    res.json(budgets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching budgets' });
  }
});

// Create a new budget
router.post('/', authenticateToken, isManager, async (req, res) => {
  try {
    const {
      category,
      amount,
      month,
      year
    } = req.body;

    await pool.execute(
      `INSERT INTO budgets 
      (category, amount, month, year)
      VALUES (?, ?, ?, ?)`,
      [category, amount, month, year]
    );

    res.status(201).json({ message: 'Budget created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating budget' });
  }
});

// Update budget
router.put('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category,
      amount,
      month,
      year
    } = req.body;

    await pool.execute(
      `UPDATE budgets 
      SET category = ?, amount = ?, month = ?, year = ?
      WHERE id = ?`,
      [category, amount, month, year, id]
    );

    res.json({ message: 'Budget updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating budget' });
  }
});

// Delete budget
router.delete('/:id', authenticateToken, isManager, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM budgets WHERE id = ?', [id]);
    res.json({ message: 'Budget deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting budget' });
  }
});

// Get budget report
router.get('/report', authenticateToken, async (req, res) => {
  try {
    const { month, year } = req.query;

    const [report] = await pool.execute(`
      SELECT 
        b.category,
        b.amount as budgeted_amount,
        COALESCE(SUM(e.amount), 0) as actual_spending,
        b.amount - COALESCE(SUM(e.amount), 0) as remaining,
        (COALESCE(SUM(e.amount), 0) / b.amount * 100) as percentage_spent
      FROM budgets b
      LEFT JOIN expenses e ON b.category = e.category 
        AND MONTH(e.date) = b.month 
        AND YEAR(e.date) = b.year
      WHERE b.month = ? AND b.year = ?
      GROUP BY b.id
      ORDER BY percentage_spent DESC
    `, [month, year]);

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating budget report' });
  }
});

export default router; 