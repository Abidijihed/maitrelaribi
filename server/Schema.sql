DROP DATABASE IF EXISTS maitrelaribi_db;
CREATE DATABASE IF NOT EXISTS maitrelaribi_db;
USE maitrelaribi_db;

-- Create User table
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);
INSERT INTO User(email,password,role)VALUES("maitrelaaribi@gmail.com","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918","admin");
-- Create Post table
CREATE TABLE Post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  text TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  id INT NOT NULL AUTO_INCREMENT,
  User_id INT NOT NULL,
  session VARCHAR(250) NOT NULL,
  date VARCHAR(250) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (User_id) REFERENCES User(id)
);
