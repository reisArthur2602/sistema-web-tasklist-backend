import { Router } from "express";
import { taskRoutes } from "../modules/task/task.routes";


const mainRoutes = Router();

mainRoutes.use("/task", taskRoutes);

export { mainRoutes };
