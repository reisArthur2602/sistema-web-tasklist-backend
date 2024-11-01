import { Request, Response } from "express";
import { CreateTaskServices } from "./services/create-task.services";
import {
  CreateTaskSchema,
  EditTaskSchema,
  RemoveTaskSchema,
} from "./task.schema";
import { ListTaskServices } from "./services/list-task.services";
import { RemoveTaskServices } from "./services/remove-task.services";
import { EditTaskServices } from "./services/edit-task.services";

export class TaskController {
  async create(request: Request, response: Response) {
    const data = CreateTaskSchema.parse(request.body);

    const createTaskServices = new CreateTaskServices();

    const task = await createTaskServices.execute(data);

    response.status(201).json(task);
  }

  async list(request: Request, response: Response) {
    const listTaskServices = new ListTaskServices();

    const tasks = await listTaskServices.execute();

    response.status(200).json(tasks);
  }

  async remove(request: Request, response: Response) {
    const { id } = RemoveTaskSchema.parse(request.query);

    const removeTaskServices = new RemoveTaskServices();

    const task = await removeTaskServices.execute(id);

    response.status(200).json(task);
  }

  async edit(request: Request, response: Response) {
    const data = EditTaskSchema.parse(request.body);

    const editTaskServices = new EditTaskServices();

    const task = await editTaskServices.execute(data);

    response.status(200).json(task);
  }
}
