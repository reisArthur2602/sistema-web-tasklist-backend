import { Router } from "express";
import { UserController } from "./user.controller";
import { AuthenticatedMiddleware } from "../../http/middlewares/authenticated.middleware";

const userRoutes = Router();

export const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.post("/session", userController.session);
userRoutes.get("/", AuthenticatedMiddleware, userController.details);

export { userRoutes };
