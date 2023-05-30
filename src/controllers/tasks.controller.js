const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createTasks = async (req, res, next) => {
  const { title, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, descripcion) VALUES ($1,$2) RETURNING *",
      [title, descripcion]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, descripcion } = req.body;
    const result = await pool.query(
      "UPDATE tasks SET title = $1,descripcion = $2 WHERE id = $3 RETURNING *",
      [title, descripcion, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTasks,
  createTasks,
  deleteTasks,
  updateTasks,
};
