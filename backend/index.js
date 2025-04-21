import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import multer from "multer";
import path from "path";
import nodemailer from 'nodemailer';


const { Pool } = pg;
const app = express();
const port = 5000;

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: "uploads/", // folder where files will be stored
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Adds timestamp to filename
  },
});
const upload = multer({ storage });

// Serve static files (uploaded images) from the 'uploads' folder
app.use("/uploads", express.static("uploads"));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "skill_elevate",
  password: "7870",
  port: 5432,
});

// Register endpoint
app.post("/register", async (req, res) => {
  const { Name, mobile, email, password } = req.body;
  console.log("Incoming request data:", req.body);

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email is already used" });
    }

    const result = await pool.query(
      "INSERT INTO users (name, mobile, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [Name, mobile, email, password]
    );

    console.log("✅ User registered");
    res.status(201).json({ message: "User registered successfully", user: result.rows[0] });
  } catch (error) {
    console.error("❌ DB Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Email not found" });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update user profile
app.put("/update-user/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, mobile } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, mobile = $2 WHERE id = $3 RETURNING *",
      [name, mobile, userId]
    );

    res.status(200).json({ message: "User updated", user: result.rows[0] });
  } catch (error) {
    console.error("❌ Update Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get user by ID
app.get("/get-user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    console.error("❌ Fetch user error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Change password
app.put("/change-password/:id", async (req, res) => {
  const userId = req.params.id;
  const { oldPassword, newPassword } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    if (user.password !== oldPassword) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }

    const updateResult = await pool.query(
      "UPDATE users SET password = $1 WHERE id = $2 RETURNING *",
      [newPassword, userId]
    );

    res.status(200).json({ message: "Password updated successfully", user: updateResult.rows[0] });
  } catch (error) {
    console.error("❌ Change password error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows); // Send the users data as JSON
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE route for removing a user
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    if (result.rowCount > 0) {
      res.json({ message: "User removed" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error removing user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add course with image upload (newly added)
app.post("/add-course", upload.single("image"), async (req, res) => {
  const { courseName, profName, category, description, otherCategory } = req.body;
  const finalCategory = category === "Others" ? otherCategory : category;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      `INSERT INTO courses (title, instructor, category, description, image) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [courseName, profName, finalCategory, description, imagePath]
    );

    res.status(201).json({ success: true, course: result.rows[0] });
  } catch (err) {
    console.error("Error inserting course:", err);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Get all courses or filter by category
app.get("/courses", async (req, res) => {
  try {
    const { title, instructor, category } = req.query;

    let query = "SELECT * FROM courses WHERE 1=1";
    const values = [];

    if (title) {
      query += " AND LOWER(title) LIKE LOWER($" + (values.length + 1) + ")";
      values.push(`%${title}%`);
    }

    if (instructor) {
      query += " AND LOWER(instructor) LIKE LOWER($" + (values.length + 1) + ")";
      values.push(`%${instructor}%`);
    }

    if (category) {
      query += " AND LOWER(category) LIKE LOWER($" + (values.length + 1) + ")";
      values.push(`%${category}%`);
    }

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update course with optional image upload
app.put("/courses/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, category, instructor } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    // Get current course info
    const current = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);

    if (current.rows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    const existingImage = current.rows[0].image;
    const finalImage = imagePath || existingImage;

    const result = await pool.query(
      "UPDATE courses SET title = $1, category = $2, instructor = $3, image = $4 WHERE id = $5 RETURNING *",
      [title, category, instructor, finalImage, id]
    );

    res.status(200).json({ message: "Course updated", course: result.rows[0] });
  } catch (err) {
    console.error("Error updating course:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single course by ID
app.get("/course/:id", async (req, res) => {
  const courseId = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM courses WHERE id = $1", [courseId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching course:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// DELETE course by ID
app.delete("/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM courses WHERE id = $1", [id]);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save to database
    await pool.query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4)',
      [name, email, subject, message]
    );

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Lakshyakumar724@gmail.com',
        pass: 'thpa epxs mqoa xlwv',
      },
    });

    await transporter.sendMail({
      from: '"Contact Form" <Lakshyakumar724@gmail.com>',
      to: 'Lakshyakumar724@gmail.com',
      subject: `New Contact Message: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error.message);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

const router = express.Router();
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const expiry = new Date(Date.now() + 3600000); // 1 hour

    await pool.query(
      'UPDATE users SET reset_token = $1, token_expiry = $2 WHERE email = $3',
      [token, expiry, email]
    );

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Lakshyakumar724@gmail.com',
        pass: 'thpa epxs mqoa xlwv',
      },
    });

    const resetLink = `http://localhost:5173/reset-password/${token}`;

    await transporter.sendMail({
      from: '"SkillElevate Support" <your-email@gmail.com>',
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });

    res.json({ message: 'Reset link sent to your email' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE reset_token = $1 AND token_expiry > NOW()',
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const user = result.rows[0];

    // Update the password (without hashing)
    await pool.query(
      'UPDATE users SET password = $1, reset_token = NULL, token_expiry = NULL WHERE id = $2',
      [newPassword, user.id]
    );

    res.json({ message: 'Password successfully reset!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
