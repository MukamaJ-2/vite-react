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
    phone VARCHAR(20) NOT NULL,
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
    child_id INT,
    babysitter_id INT,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    status ENUM('present', 'absent') NOT NULL,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    child_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_type ENUM('half-day', 'full-day') NOT NULL,
    payment_date DATE NOT NULL,
    status ENUM('pending', 'paid') DEFAULT 'pending',
    FOREIGN KEY (child_id) REFERENCES children(id)
);

-- Expenses table
CREATE TABLE IF NOT EXISTS expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Babysitter payments table
CREATE TABLE IF NOT EXISTS babysitter_payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    babysitter_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_date DATE NOT NULL,
    status ENUM('pending', 'paid') DEFAULT 'pending',
    FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
); 