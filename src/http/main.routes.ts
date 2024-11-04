import { Router } from "express";
import { taskRoutes } from "../modules/task/task.routes";
import { userRoutes } from "../modules/user/user.routes";

const mainRoutes = Router();

mainRoutes.use("/task", taskRoutes);
mainRoutes.use("/user", userRoutes);

export { mainRoutes };
