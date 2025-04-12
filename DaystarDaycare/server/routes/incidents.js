import express from 'express';
import { pool } from '../index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all incidents
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [incidents] = await pool.execute(`
      SELECT i.*, c.first_name as child_first_name, c.last_name as child_last_name,
             b.first_name as babysitter_first_name, b.last_name as babysitter_last_name
      FROM incidents i
      JOIN children c ON i.child_id = c.id
      JOIN babysitters b ON i.babysitter_id = b.id
      ORDER BY i.date DESC
    `);
    res.json(incidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching incidents' });
  }
});

// Report a new incident
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      child_id,
      babysitter_id,
      description,
      severity
    } = req.body;

    const date = new Date().toISOString().split('T')[0];

    await pool.execute(
      `INSERT INTO incidents 
      (child_id, babysitter_id, date, description, severity)
      VALUES (?, ?, ?, ?, ?)`,
      [child_id, babysitter_id, date, description, severity]
    );

    res.status(201).json({ message: 'Incident reported successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error reporting incident' });
  }
});

// Update incident status
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.execute(
      'UPDATE incidents SET status = ? WHERE id = ?',
      [status, id]
    );

    res.json({ message: 'Incident status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating incident status' });
  }
});

// Get incident report
router.get('/report', authenticateToken, async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    const [report] = await pool.execute(`
      SELECT 
        DATE_FORMAT(date, '%Y-%m-%d') as date,
        COUNT(*) as total_incidents,
        SUM(CASE WHEN severity = 'high' THEN 1 ELSE 0 END) as high_severity,
        SUM(CASE WHEN severity = 'medium' THEN 1 ELSE 0 END) as medium_severity,
        SUM(CASE WHEN severity = 'low' THEN 1 ELSE 0 END) as low_severity
      FROM incidents
      WHERE date BETWEEN ? AND ?
      GROUP BY date
      ORDER BY date
    `, [start_date, end_date]);

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating incident report' });
  }
});

export default router; 