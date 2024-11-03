import { Router } from "express";
import { UserController } from "./user.controller";

const userRoutes = Router();

export const userController = new UserController();

userRoutes.get("/", (request, response) => {
  response.json({ message: "true" });
});

export { userRoutes };
