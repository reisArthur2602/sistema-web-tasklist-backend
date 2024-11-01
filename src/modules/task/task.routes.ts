import { Router } from "express";
import { TaskController } from "./task.controller";

const taskRoutes = Router();

const taskController = new TaskController();

taskRoutes.get("/", taskController.list);
taskRoutes.post("/", taskController.create);
taskRoutes.delete("/", taskController.remove);
taskRoutes.patch("/", taskController.edit);

export { taskRoutes };
