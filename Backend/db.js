require("dotenv").config(); // Keep for local dev, harmless in ECS

const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Initialize DB (create table if not exists)
async function init() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS recipes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        ingredients TEXT NOT NULL,
        steps TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Connected to AWS RDS & table ready");
  } catch (err) {
    console.error("❌ Database initialization failed:", err.message);
  }
}

// Run init only once at startup
init();

module.exports = db;
