import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgresql://sean:<role_password>@localhost:5432/top_users",
});

export default pool;
