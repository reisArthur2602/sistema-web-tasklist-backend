import { Request, Response } from "express";
import { CreateUserServices } from "./services/create-user.services";
import { CreateUserSchema, SessionUserSchema } from "./user.schema";
import { SessionUserServices } from "./services/session-user.services";

export class UserController {
  async create(request: Request, response: Response) {
    const data = CreateUserSchema.parse(request.body);

    const createUser = new CreateUserServices();

    const user = await createUser.execute(data);

    response.status(201).json(user);
  }
  async session(request: Request, response: Response) {
    const data = SessionUserSchema.parse(request.body);

    const sessionUser = new SessionUserServices();

    const user = await sessionUser.execute(data);

    response.status(200).json(user);
  }
}
