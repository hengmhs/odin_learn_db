import pool from "./pool";

const getAllUserNames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username: string) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

export { getAllUserNames, insertUsername };
