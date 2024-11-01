import { Router } from "express";
import { TaskController } from "./task.controller";
import { BadRequestError } from "../../helpers/errors";

const taskRoutes = Router();

const taskController = new TaskController();

taskRoutes.get("/", (request, response) => {
  response.json({ message: "hello Word!" });
});

export { taskRoutes };
