DROP DATABASE IF EXISTS DBUI;
CREATE DATABASE IF NOT EXISTS DBUI;
USE DBUI;
CREATE TABLE IF NOT EXISTS users(
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    age INT,
    admin BOOLEAN NOT NULL DEFAULT FALSE,
    dateJoined DATETIME DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS organizations (
    orgId INT AUTO_INCREMENT PRIMARY KEY,
    orgName VARCHAR (128) UNIQUE NOT NULL,
    dateCreated DATETIME DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS budgets (
    budgetId INT AUTO_INCREMENT PRIMARY KEY,
    orgId INT NOT NULL,
    dateCreated DATETIME DEFAULT NOW(),
    FOREIGN KEY (orgId) REFERENCES organizations(orgId)
);

CREATE TABLE IF NOT EXISTS organizationMembers (
    userId INT,
    orgId INT,
    role VARCHAR(128),
    dateJoined DATETIME DEFAULT NOW(),
    favorited BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (userId, orgId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (orgId) REFERENCES organizations(orgId)
);

CREATE TABLE IF NOT EXISTS contributions (
    contributionId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    orgId INT,
    amount REAL,
    dateContributed DATETIME DEFAULT NOW(),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (orgId) REFERENCES organizations(orgId),
    FOREIGN KEY (userId, orgId) REFERENCES organizationMembers(userId, orgId)
);