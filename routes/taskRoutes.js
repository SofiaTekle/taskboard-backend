import express from "express";
import { getAllTasks, createTask } from "../db/tasks.js";

const router = express.Router();

router.get("/", async (request, response) => {
    const tasks = await getAllTasks();
    response.json(tasks);
});

router.post("/", async (request, response) => {
    const task = await createTask(request.body);
    response.status(201).json(task);
});

export default router;