-- Create database
CREATE DATABASE IF NOT EXISTS daystar_daycare;
USE daystar_daycare;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('manager', 'babysitter') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Babysitters table
CREATE TABLE IF NOT EXISTS babysitters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    phone_number VARCHAR(20) NOT NULL,
    nin VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    next_of_kin_name VARCHAR(100) NOT NULL,
    next_of_kin_phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Children table
CREATE TABLE IF NOT EXISTS children (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    parent_name VARCHAR(100) NOT NULL,
    parent_phone VARCHAR(20) NOT NULL,
    special_needs TEXT,
    session_type ENUM('half-day', 'full-day') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    child_id INT NOT NULL,
    babysitter_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    session_type ENUM('half-day', 'full-day') NOT NULL,
    status ENUM('present', 'absent') DEFAULT 'present',
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);

-- Incidents table
CREATE TABLE IF NOT EXISTS incidents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    child_id INT NOT NULL,
    babysitter_id INT NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    severity ENUM('low', 'medium', 'high') NOT NULL,
    status ENUM('open', 'resolved') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    child_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_type ENUM('half-day', 'full-day') NOT NULL,
    date DATE NOT NULL,
    status ENUM('pending', 'paid') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (child_id) REFERENCES children(id)
);

-- Expenses table
CREATE TABLE IF NOT EXISTS expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category ENUM('salaries', 'toys', 'maintenance', 'utilities', 'other') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Budgets table
CREATE TABLE IF NOT EXISTS budgets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category ENUM('salaries', 'toys', 'maintenance', 'utilities', 'other') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 