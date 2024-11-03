import { Request, Response } from "express";
import { CreateUserServices } from "./services/create-user.services";
import { CreateUserSchema } from "./user.schema";

export class UserController {
  async create(request: Request, response: Response) {
    const data = CreateUserSchema.parse(request.body);

    const createUser = new CreateUserServices();

    const user = await createUser.execute(data);

    response.status(201).json(user);
  }
}
