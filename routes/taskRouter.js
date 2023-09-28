const express = require("express");
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  getEachTask,
} = require("../controllers/taskController");

const router = express.Router();


router.get("/", getAllTask);

router.post("/create", createTask);

router.patch("/:id", editTask);

router.delete("/:id", deleteTask);

router.get("/:id", getEachTask);

module.exports = router;
