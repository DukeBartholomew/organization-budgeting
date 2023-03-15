
CREATE TABLE organizations (
	orgId serial PRIMARY KEY,
	orgName VARCHAR ( 128 ) UNIQUE NOT NULL,
	totalBudget REAL NOT NULL,
	budgetDate VARCHAR ( 128 ) UNIQUE NOT NULL,
	primary key(orgId),
	foreign key(orgId) references budget,
);