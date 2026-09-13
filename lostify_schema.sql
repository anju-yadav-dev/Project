-- =====================================================
-- LOSTIFY: Intelligent Based Lost and Found Portal
-- Database Schema (MySQL)
-- =====================================================

CREATE DATABASE IF NOT EXISTS lostify_db;
USE lostify_db;

-- =====================================================
-- 1. USER Table
-- =====================================================
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_no VARCHAR(15),
    address VARCHAR(255),
    user_type ENUM('USER', 'ADMIN') DEFAULT 'USER',
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 2. CATEGORY Table
-- =====================================================
CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    description VARCHAR(255)
);

-- =====================================================
-- 3. ADMIN Table
-- =====================================================
CREATE TABLE admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'ADMIN'
);

-- =====================================================
-- 4. ITEM Table
-- =====================================================
CREATE TABLE item (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    item_type VARCHAR(50),
    location VARCHAR(150),
    image_url VARCHAR(255),
    status VARCHAR(50) DEFAULT 'ACTIVE',
    category_id INT,
    CONSTRAINT fk_item_category FOREIGN KEY (category_id)
        REFERENCES category(category_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- =====================================================
-- 5. LOST_REPORT Table
-- =====================================================
CREATE TABLE lost_report (
    lost_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    category_id INT,
    location VARCHAR(150),
    date_lost DATE,
    image_url VARCHAR(255),
    status VARCHAR(50) DEFAULT 'PENDING',
    item_id INT,
    CONSTRAINT fk_lost_user FOREIGN KEY (user_id)
        REFERENCES user(user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_lost_category FOREIGN KEY (category_id)
        REFERENCES category(category_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_lost_item FOREIGN KEY (item_id)
        REFERENCES item(item_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- =====================================================
-- 6. FOUND_REPORT Table
-- =====================================================
CREATE TABLE found_report (
    found_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    category_id INT,
    location VARCHAR(150),
    date_found DATE,
    image_url VARCHAR(255),
    status VARCHAR(50) DEFAULT 'PENDING',
    item_id INT,
    CONSTRAINT fk_found_user FOREIGN KEY (user_id)
        REFERENCES user(user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_found_category FOREIGN KEY (category_id)
        REFERENCES category(category_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_found_item FOREIGN KEY (item_id)
        REFERENCES item(item_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- =====================================================
-- 7. CLAIM Table
-- =====================================================
CREATE TABLE claim (
    claim_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    report_id INT,
    item_id INT,
    claim_description TEXT,
    status VARCHAR(50) DEFAULT 'PENDING',
    claimed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    admin_id INT,
    CONSTRAINT fk_claim_user FOREIGN KEY (user_id)
        REFERENCES user(user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_claim_found_report FOREIGN KEY (report_id)
        REFERENCES found_report(found_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_claim_item FOREIGN KEY (item_id)
        REFERENCES item(item_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_claim_admin FOREIGN KEY (admin_id)
        REFERENCES admin(admin_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- =====================================================
-- 8. NOTIFICATION Table
-- =====================================================
CREATE TABLE notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_notification_user FOREIGN KEY (user_id)
        REFERENCES user(user_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- =====================================================
-- 9. ADMIN_LOG Table
-- =====================================================
CREATE TABLE admin_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    action VARCHAR(100),
    entity_type VARCHAR(100),
    entity_id INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_adminlog_admin FOREIGN KEY (admin_id)
        REFERENCES admin(admin_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- =====================================================
-- Sample Data (Optional - for testing)
-- =====================================================

INSERT INTO category (category_name, description) VALUES
('Electronics', 'Phones, laptops, gadgets'),
('Documents', 'ID cards, certificates, papers'),
('Accessories', 'Bags, wallets, jewelry'),
('Others', 'Miscellaneous items');

INSERT INTO admin (name, email, password, role) VALUES
('Super Admin', 'admin@lostify.com', 'hashed_password_here', 'ADMIN');

INSERT INTO user (name, email, password, phone_no, address, user_type) VALUES
('Anju Kumar', 'anju@example.com', 'hashed_password_here', '9876543210', 'Kanpur, UP', 'USER');

-- =====================================================
-- End of Script
-- =====================================================
