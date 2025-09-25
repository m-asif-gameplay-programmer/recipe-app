const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));
/*
// Get all recipes
app.get("/recipes", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM recipes ORDER BY createdAt DESC");
    res.json({ items: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a recipe
app.post("/recipes", async (req, res) => {
  const { title, ingredients, steps } = req.body;
  if (!title || !ingredients || !steps) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO recipes (title, ingredients, steps) VALUES (?, ?, ?)",
      [title, ingredients, steps]
    );
    res.status(201).json({ id: result.insertId, title, ingredients, steps });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
