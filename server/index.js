


// const express = require('express');
// const mysql = require('mysql');

// const app = express();


// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'photousers',
//   });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('MySQL connected');
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/register', (req, res) => {
//     const { fullname, studio, address, email, password } = req.body;
//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, email, password) VALUES (?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, email, password], (err, result) => {
//         if (err) {
//             res.status(500).send({ error: 'Error registering user' });
//         } else {
//             res.status(200).send({ message: 'User registered successfully' });
//         }
//     });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'photousers',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { fullname, studio, address, email, password } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, email, password) VALUES (?, ?, ?, ?, ?)`;
  db.query(INSERT_USER_QUERY, [fullname, studio, address, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send({ error: 'Error registering user' });
    } else {
      res.status(200).send({ message: 'User registered successfully' });
    }
  });
});
// Endpoint for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Validate fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }
  
    // Check credentials in the database
    const SELECT_USER_QUERY = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error while logging in' });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'Invalid credentials' });
      }
      return res.status(200).json({ message: 'Login successful' });
    });
  });
  

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const FIND_USER_QUERY = `SELECT * FROM users WHERE email = ?`;
  
//     db.query(FIND_USER_QUERY, [email], async (err, results) => {
//       if (err) {
//         console.error('Error finding user:', err);
//         res.status(500).send({ error: 'Internal server error' });
//       } else if (results.length === 0) {
//         res.status(401).send({ error: 'Invalid email or password' });
//       } else {
//         const user = results[0];
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (isPasswordMatch) {
//           res.status(200).send({ message: 'Login successful' });
//           // You can set up session management or JWT here
//         } else {
//           res.status(401).send({ error: 'Invalid email or password' });
//         }
//       }
//     });
//   });
  
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
