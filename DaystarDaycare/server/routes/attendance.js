import express from 'express';
import { pool } from '../index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all attendance records
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [attendance] = await pool.execute(`
      SELECT a.*, c.first_name as child_first_name, c.last_name as child_last_name,
             b.first_name as babysitter_first_name, b.last_name as babysitter_last_name
      FROM attendance a
      JOIN children c ON a.child_id = c.id
      JOIN babysitters b ON a.babysitter_id = b.id
    `);
    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching attendance records' });
  }
});

// Record child check-in
router.post('/check-in', authenticateToken, async (req, res) => {
  try {
    const { child_id, babysitter_id, session_type } = req.body;
    const date = new Date().toISOString().split('T')[0];
    const check_in = new Date().toTimeString().split(' ')[0];

    await pool.execute(
      `INSERT INTO attendance 
      (child_id, babysitter_id, date, check_in, session_type)
      VALUES (?, ?, ?, ?, ?)`,
      [child_id, babysitter_id, date, check_in, session_type]
    );

    res.status(201).json({ message: 'Check-in recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error recording check-in' });
  }
});

// Record child check-out
router.put('/check-out/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const check_out = new Date().toTimeString().split(' ')[0];

    await pool.execute(
      'UPDATE attendance SET check_out = ? WHERE id = ?',
      [check_out, id]
    );

    res.json({ message: 'Check-out recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error recording check-out' });
  }
});

// Get attendance report
router.get('/report', authenticateToken, async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    const [report] = await pool.execute(`
      SELECT 
        DATE_FORMAT(date, '%Y-%m-%d') as date,
        COUNT(*) as total_children,
        SUM(CASE WHEN session_type = 'full-day' THEN 1 ELSE 0 END) as full_day,
        SUM(CASE WHEN session_type = 'half-day' THEN 1 ELSE 0 END) as half_day
      FROM attendance
      WHERE date BETWEEN ? AND ?
      GROUP BY date
      ORDER BY date
    `, [start_date, end_date]);

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating attendance report' });
  }
});

export default router; 