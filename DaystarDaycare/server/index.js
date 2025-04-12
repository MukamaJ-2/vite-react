import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';
import authRoutes from './routes/auth.js';
import babysitterRoutes from './routes/babysitters.js';
import childRoutes from './routes/children.js';
import attendanceRoutes from './routes/attendance.js';
import incidentRoutes from './routes/incidents.js';
import paymentRoutes from './routes/payments.js';
import expenseRoutes from './routes/expenses.js';
import budgetRoutes from './routes/budgets.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/babysitters', babysitterRoutes);
app.use('/api/children', childRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/budgets', budgetRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 