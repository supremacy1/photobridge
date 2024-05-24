//original
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');
// const multer = require('multer');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// // //original login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Validate fields
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   // Check credentials in the database
//   const SELECT_USER_QUERY = 'SELECT fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname });
//   });
// });
  
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

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
  methods: ['POST', 'GET', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const authenticate = (req, res, next) => {
  const userId = req.headers.userid || req.body.userId;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.userId = userId;
  next();
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/register', (req, res) => {
  const { fullname, studio, address, phone, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }
  if (!fullname || !studio || !address || !phone || !email || !password) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
  db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).send({ error: 'Error registering user' });
    }

    if (results.length > 0) {
      return res.status(400).send({ error: 'Email already exists' });
    }

    const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send({ error: 'Error registering user' });
      }

      res.status(200).send({ message: 'User registered successfully' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const SELECT_USER_QUERY = 'SELECT user_id, fullname FROM users WHERE email = ? AND password = ?';
  db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error while logging in' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'Login successful', userId: result[0].user_id, fullname: result[0].fullname });
  });
});

app.post('/upload', authenticate, upload.array('images', 10), (req, res) => {
  const { userId } = req;
  const files = req.files;
  const INSERT_IMAGE_QUERY = 'INSERT INTO images (user_id, image_path) VALUES ?';
  const values = files.map(file => [userId, file.path]);

  db.query(INSERT_IMAGE_QUERY, [values], (err) => {
    if (err) {
      console.error('Error inserting images:', err);
      return res.status(500).send({ error: 'Error uploading images' });
    }
    res.status(200).send({ message: 'Images uploaded successfully' });
  });
});

app.get('/images', authenticate, (req, res) => {
  const { userId } = req;
  const SELECT_IMAGES_QUERY = 'SELECT * FROM images WHERE user_id = ?';
  db.query(SELECT_IMAGES_QUERY, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching images:', err);
      return res.status(500).send({ error: 'Error fetching images' });
    }
    res.status(200).send(results);
  });
});

app.delete('/images/:id', authenticate, (req, res) => {
  const { userId } = req;
  const { id } = req.params;
  const SELECT_IMAGE_QUERY = 'SELECT image_path FROM images WHERE image_id = ? AND user_id = ?';
  const DELETE_IMAGE_QUERY = 'DELETE FROM images WHERE image_id = ? AND user_id = ?';

  db.query(SELECT_IMAGE_QUERY, [id, userId], (err, results) => {
    if (err) {
      console.error('Error selecting image:', err);
      return res.status(500).send({ error: 'Error deleting image' });
    }
    if (results.length === 0) {
      return res.status(404).send({ error: 'Image not found' });
    }
    const imagePath = results[0].image_path;
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
        return res.status(500).send({ error: 'Error deleting image' });
      }
      db.query(DELETE_IMAGE_QUERY, [id, userId], (err) => {
        if (err) {
          console.error('Error deleting image record:', err);
          return res.status(500).send({ error: 'Error deleting image' });
        }
        res.status(200).send({ message: 'Image deleted successfully' });
      });
    });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//working
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Setup multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// const upload = multer({ storage: storage });

// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   const SELECT_USER_QUERY = 'SELECT fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname });
//   });
// });

// app.post('/upload', upload.array('images', 12), (req, res) => {
//   const files = req.files;
//   const imageInsertPromises = files.map(file => {
//     const INSERT_IMAGE_QUERY = `INSERT INTO images (filename) VALUES (?)`;
//     return new Promise((resolve, reject) => {
//       db.query(INSERT_IMAGE_QUERY, [file.filename], (err, result) => {
//         if (err) {
//           console.error('Error inserting image:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   });

//   Promise.all(imageInsertPromises)
//     .then(() => {
//       res.status(200).send({ message: 'Images uploaded successfully' });
//     })
//     .catch((err) => {
//       res.status(500).send({ error: 'Error uploading images' });
//     });
// });

// app.get('/images', (req, res) => {
//   const SELECT_IMAGES_QUERY = 'SELECT filename FROM images';
//   db.query(SELECT_IMAGES_QUERY, (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error fetching images' });
//     }
//     res.status(200).json({ images: results });
//   });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Setup multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// // const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' });
// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   const SELECT_USER_QUERY = 'SELECT user_id, fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname, userId: result[0].id });
//   });
// });

// app.post('/upload', upload.array('images', 12), (req, res) => {
//   const files = req.files;
//   const userId = req.body.userId;

//   if (!userId) {
//     return res.status(400).send({ error: 'User ID is required' });
//   }

//   const imageInsertPromises = files.map(file => {
//     const INSERT_IMAGE_QUERY = `INSERT INTO images (filename, user_id) VALUES (?, ?)`;
//     return new Promise((resolve, reject) => {
//       db.query(INSERT_IMAGE_QUERY, [file.filename, userId], (err, result) => {
//         if (err) {
//           console.error('Error inserting image:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   });

//   Promise.all(imageInsertPromises)
//     .then(() => {
//       res.status(200).send({ message: 'Images uploaded successfully' });
//     })
//     .catch((err) => {
//       console.error('Error uploading images:', err);
//       res.status(500).send({ error: 'Error uploading images' });
//     });
// });

// app.get('/images', (req, res) => {
//   const userId = req.query.userId;

//   if (!userId) {
//     return res.status(400).json({ message: 'User ID is required' });
//   }

//   const SELECT_IMAGES_QUERY = 'SELECT filename FROM images WHERE user_id = ?';
//   db.query(SELECT_IMAGES_QUERY, [userId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error fetching images' });
//     }
//     res.status(200).json({ images: results });
//   });
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });
