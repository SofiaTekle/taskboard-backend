import express from "express";
import { getAllTasks, createTask } from "../db/tasks.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const tasks = await getAllTasks();
    response.json(tasks);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      error: "Kunde inte hämta tasks",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const task = await createTask(request.body);
    response.status(201).json(task);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      error: "Kunde inte skapa task",
    });
  }
});

export default router;
