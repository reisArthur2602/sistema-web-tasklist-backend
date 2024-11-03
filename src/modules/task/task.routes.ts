import { Router } from "express";
import { TaskController } from "./task.controller";
import { AuthenticatedMiddleware } from "../../http/middlewares/authenticated.middleware";

const taskRoutes = Router();

const taskController = new TaskController();

taskRoutes.get("/", AuthenticatedMiddleware, taskController.list);
taskRoutes.post("/", AuthenticatedMiddleware, taskController.create);
taskRoutes.delete("/", AuthenticatedMiddleware, taskController.remove);
taskRoutes.put("/", AuthenticatedMiddleware, taskController.edit);
taskRoutes.patch("/reorder", AuthenticatedMiddleware, taskController.reorder);

export { taskRoutes };
