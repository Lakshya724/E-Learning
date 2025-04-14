import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";

const { Pool } = pg;
const app = express();
const port = 5000;

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
    // Check if the user exists and validate old password
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    if (user.password !== oldPassword) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }

    // Update password
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
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [userId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
