import { Router } from "express";
import { TaskController } from "./task.controller";

const taskRoutes = Router();

const taskController = new TaskController();

taskRoutes.get("/", (request, response) => {
  response.json({ message: "hello Word!" });
});

export { taskRoutes };
