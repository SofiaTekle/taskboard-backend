import { pool } from "./pool.js";

export async function getAllTasks() {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id");
  return result.rows;
}

export async function createTask(task) {
  const { title, description, assignee, category, priority } = task;
  const result = await pool.query(
    `INSERT INTO tasks (title, description, assignee, category, priority, status)
     VALUES ($1, $2, $3, $4, $5, 'todo')
     RETURNING *`,
    [title, description, assignee, category, priority],
  );
  return result.rows[0];
}
