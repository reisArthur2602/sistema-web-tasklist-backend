import { Router } from "express";
import { UserController } from "./user.controller";

const userRoutes = Router();

export const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.post("/session", userController.session);

export { userRoutes };
