  // const [message, setMessage] = useState("Loading");
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/home').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //       console.log(data.setMessage)
  //       console.log(data.setPeople)
  //       setMessage(data.message)
  //       setPeople(data.people)
  //     }
  //   )
  // }, [])
  
  // const router = useRouter();
  // const handleRegister = async () => {
  //   try {
  //     if (!fullname || !studio || !address || !email || !password ) {
  //       setMessage('All fields are required'); // Set message for empty fields
  //       return;
  //     }
  //     const response = await axios.post('http://localhost:8080/register', {
  //       fullnameme,
  //       studio,
  //       address,
  //       email,
  //       password,
  //     });
      
  //     setMessage(response.data.message); // Success or error message from server
  //     if (response.status === 200) {
  //       setMessage('Registration successful');

  //     }}
  //     catch (error) {
  //       if (error.response.status === 400 && error.response.data.message === 'Email already exists') {
  //         setMessage('Email already exists'); // Set message for existing email
  //       } else {
  //         setMessage('Registration unsuccessful'); // Set generic error message
  //       }
      
  //       console.error('Error:', error);
  //     }
  //   };
// const express = require("express");
// const cors = require ("cors");
// const https = require('https');
// const app = express();
// const bodyParser = require('body-parser');
// const mysql = require('mysql');



// const PORT = 8080;
// app.use(bodyParser.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'photousers',
//   });

//   db.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Connected to the database');
//   });

// //  Endpoint for user registration
// app.post('/register',async  (req, res) => {
//     const { fullname, studio, address, email, password} = req.body;
  
// // app.get("/api/home", (req, res) => {
// //     res.json({messge: "Hello World", people:["john", "pool","john", "pool"]});
// // });  
    
  
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ message: 'Invalid email format' });
//     }
//     // Validate fields (e.g., check for empty fields)
//     if (!fullname || !studio || !address ||  !email || !password ) {
//       return res.status(400).json({ message: 'Please fill in all fields' });
//     }
    
//     // Perform insertion into the database
//     const CHECK_EMAIL_QUERY = 'SELECT * FROM users WHERE email = ?';
//     db.query(CHECK_EMAIL_QUERY, [email], (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: 'Registration unsuccessful' });
//       }
//       if (result.length > 0) {
//         return res.status(400).json({ message: 'Email already exists' });
//       }
  
  
//     const INSERT_USER_QUERY = 'INSERT INTO users (fullname, studio, address, email, password) VALUES (?, ?, ?, ?, ?)';
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, email, password], (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: 'Registration unsuccessful' });
//       }
//       return res.status(200).json({ message: 'Registration successful' });
//     });
    
//   });
  
  
//   });
  

// app.listen(PORT, () => {
//     console.log('server on ${PORT}');
// });
  {/* <div>
  <div>{message}</div>
  {
  people.map((person, index) => (
    <div key={index}>
      {person}
    </div>
  ))
  }
</div> */}
 // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   router.push('/success');
  // };
  // const handleRegister = async () => {
  //   try {
  //     if (!fullname || !studio || !address || !email || !password ) {
  //       setMessage('All fields are required'); // Set message for empty fields
  //       return;
  //     }



  const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Use bcrypt for hashing passwords

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
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
  const { fullname, studio, address, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, email, password) VALUES (?, ?, ?, ?, ?)`;
  db.query(INSERT_USER_QUERY, [fullname, studio, address, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send({ error: 'Error registering user' });
    } else {
      res.status(200).send({ message: 'User registered successfully' });
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const FIND_USER_QUERY = `SELECT * FROM users WHERE email = ?`;

  db.query(FIND_USER_QUERY, [email], async (err, results) => {
    if (err) {
      console.error('Error finding user:', err);
      res.status(500).send({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(401).send({ error: 'Invalid email or password' });
    } else {
      const user = results[0];
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        res.status(200).send({ message: 'Login successful' });
        // You can set up session management or JWT here
      } else {
        res.status(401).send({ error: 'Invalid email or password' });
      }
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
