// db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'skill_elevate',
  password: '7870',
  port: 5432, // default PostgreSQL port
});

export default pool;
