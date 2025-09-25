/*require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,     
  user: process.env.DB_USER,     
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME, 
  port: 3306
});

async function init() {
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
}

init();

module.exports = db;
*/