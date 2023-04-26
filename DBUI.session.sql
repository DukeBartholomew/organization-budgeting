DROP DATABASE IF EXISTS DBUI;
CREATE DATABASE IF NOT EXISTS DBUI;
USE DBUI;
CREATE TABLE IF NOT EXISTS users(
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(128) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    firstName VARCHAR(128) NOT NULL,
    lastName VARCHAR(128) NOT NULL,
    age INT,
    admin BOOLEAN NOT NULL DEFAULT FALSE,
    dateJoined DATETIME DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS organizations (
    orgId INT AUTO_INCREMENT PRIMARY KEY,
    orgName VARCHAR (128) UNIQUE NOT NULL,
    _description VARCHAR (500),
    venmo VARCHAR (128),
    creator INT NOT NULL,
    dateCreated DATETIME DEFAULT NOW(),
    FOREIGN KEY (creator) REFERENCES users(userId)
);
CREATE TABLE IF NOT EXISTS budgets (
    budgetId INT AUTO_INCREMENT PRIMARY KEY,
    orgName VARCHAR (128) UNIQUE NOT NULL,
    budgetAmount VARCHAR(128),
    dateCreated DATETIME DEFAULT NOW(),
    FOREIGN KEY (orgName) REFERENCES organizations(orgName)
);
CREATE TABLE IF NOT EXISTS organizationMembers (
    userId INT NOT NULL,
    orgId INT NOT NULL,
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
INSERT INTO users (username, password, firstName, lastName, age)
VALUES("UncleRico", "password", "Uncle", "Rico", 45);
INSERT INTO users (username, password, firstName, lastName, age)
VALUES("PeterRabs", "password", "Peter", "Rabbit", 8);
INSERT INTO organizations (orgName, _description, venmo, creator) VALUE(
        "ACME",
        "Providing the best tools for the job since 1899",
        "wile-e-coyote",
        2
    );
INSERT INTO organizations (orgName, _description, venmo, creator) VALUE(
        "Raising Canes",
        "Best fast food and sauce in the game, don't test us",
        "doggy-cane",
        2
    );
INSERT INTO organizations (orgName, _description, venmo, creator) VALUE(
        "DoGe CoIn",
        "Invest in us, it'll be the best purchase of your life. We were cool 2 years ago",
        "shiba-inu",
        2
    );
INSERT INTO budgets (orgName, budgetAmount) VALUE("ACME", "$25,000");
INSERT INTO budgets (orgName, budgetAmount) VALUE("Raising Canes", "a lot");
INSERT INTO budgets (orgName, budgetAmount) VALUE("DoGe CoIn", "$-10");