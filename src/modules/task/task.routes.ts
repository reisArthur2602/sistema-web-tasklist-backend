import { Router } from "express";
import { TaskController } from "./task.controller";

const taskRoutes = Router();

const taskController = new TaskController();

taskRoutes.post("/", taskController.create);

export { taskRoutes };
