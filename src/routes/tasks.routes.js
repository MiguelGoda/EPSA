const { Router } = require("express");
const {
  getAllTasks,
  getTasks,
  createTasks,
  deleteTasks,
  updateTasks,
} = require("../controllers/tasks.controller.js");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTasks);

router.post("/tasks", createTasks);

router.delete("/tasks/:id", deleteTasks);

router.put("/tasks/:id", updateTasks);

module.exports = router;
