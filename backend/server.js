const express = require('express')
const app = express()
const port = 8000

// Enable Cross-Origin Resource Sharing
const cors = require('cors')
app.use(cors()) // This has to be before any routes

// Enable JSON parsing
app.use(express.json())

// Connect to mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BeOrganized',
  database: 'DBUI'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
  });

// API routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

  // Handle login form submission
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    isValidCredentials(username, password, (isValid) => {
      if (isValid) {
        // Redirect to the home page if the credentials are valid
        res.status(200).send('Login successful');
      } else {
        // Invalid credentials
        res.status(200).send('Invalid credentials');
      }
    });
  });
function isValidCredentials(username, password, callback) {
    const query = `SELECT * FROM users WHERE userName = "${username}" AND userPassword = "${password}"`;
    
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.error(err);
        callback(false);
        return;
      }
  
      // If a user with the given username and password was found, return true
      if (rows.length == 1) {
        callback(true);
      } else {
        callback(false);
      }
    });
  }
app.put('/parse', (req, res) => {
    console.log(req.body)
    
    try {
        const { id, first, last, username, age, admin } = req.body
        const name = `${first} ${last}`
        const isAdmin = admin ? "is an admin." : "is not an admin"

        res.status(200)
        res.send(`${name} is ${age} years old and ${isAdmin} His user ID is ${id} and his username is ${username}`)
    } catch (err) {
        console.log(err)
    }
})

app.get('/db', (req, res) => {
    connection.query('SHOW TABLES', (err, rows, fields) =>{
        if (err) throw err

        console.log(rows)
        res.status(200)
        res.send(rows)
    })
})

app.post('/user', (req, res) => {
    const { id, first, last, username, password, age, admin } = req.body
    const query = `INSERT INTO users (userId, firstName, lastName, userName, userPassword, age, admin) VALUES (${id}, '${first}', '${last}', '${username}', '${password}', ${age}, ${admin})`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        res.status(200)
        res.send("Successfully added user!")
    })
})

app.get('/users', (req, res) => {
    connection.query(`SELECT * FROM users`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

app.put('/users/clear', (req, res) => {
    connection.query(`DELETE FROM users`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send("Successfully cleared users!")
    })
})

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})