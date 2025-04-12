import express from 'express';
import { pool } from '../index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all payments
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [payments] = await pool.execute(`
      SELECT p.*, c.first_name as child_first_name, c.last_name as child_last_name
      FROM payments p
      JOIN children c ON p.child_id = c.id
      ORDER BY p.date DESC
    `);
    res.json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching payments' });
  }
});

// Record a new payment
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      child_id,
      amount,
      payment_type
    } = req.body;

    const date = new Date().toISOString().split('T')[0];

    await pool.execute(
      `INSERT INTO payments 
      (child_id, amount, payment_type, date, status)
      VALUES (?, ?, ?, ?, 'paid')`,
      [child_id, amount, payment_type, date]
    );

    res.status(201).json({ message: 'Payment recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error recording payment' });
  }
});

// Update payment status
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.execute(
      'UPDATE payments SET status = ? WHERE id = ?',
      [status, id]
    );

    res.json({ message: 'Payment status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating payment status' });
  }
});

// Get payment report
router.get('/report', authenticateToken, async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    const [report] = await pool.execute(`
      SELECT 
        DATE_FORMAT(date, '%Y-%m-%d') as date,
        SUM(amount) as total_amount,
        SUM(CASE WHEN payment_type = 'full-day' THEN amount ELSE 0 END) as full_day_amount,
        SUM(CASE WHEN payment_type = 'half-day' THEN amount ELSE 0 END) as half_day_amount,
        COUNT(*) as total_payments
      FROM payments
      WHERE date BETWEEN ? AND ?
      GROUP BY date
      ORDER BY date
    `, [start_date, end_date]);

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating payment report' });
  }
});

export default router; 