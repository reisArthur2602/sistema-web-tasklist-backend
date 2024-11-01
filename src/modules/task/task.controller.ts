import { Request, Response } from "express";
import { CreateTaskServices } from "./services/create-task.services";
import { CreateTaskSchema } from "./task.schema";

export class TaskController {
    
  async create(request: Request, response: Response) {
    const data = CreateTaskSchema.parse(request.body);

    const createTaskSerrvice = new CreateTaskServices();

    const task = await createTaskSerrvice.execute(data);

    response.status(200).json(task);
  }

}
