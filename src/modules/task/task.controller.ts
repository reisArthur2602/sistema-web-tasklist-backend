import { Request, Response } from "express";
import { CreateTaskServices } from "./services/create-task.services";
import {
  CreateTaskSchema,
  EditTaskSchema,
  RemoveTaskSchema,
  ReorderTaskSchema,
} from "./task.schema";
import { ListTaskServices } from "./services/list-task.services";
import { RemoveTaskServices } from "./services/remove-task.services";
import { EditTaskServices } from "./services/edit-task.services";
import { ReorderTaskServices } from "./services/reorder-task.services";

export class TaskController {
  async create(request: Request, response: Response) {
    const data = CreateTaskSchema.parse(request.body);

    const userId = request.userId;

    const createTaskServices = new CreateTaskServices();

    const task = await createTaskServices.execute({ ...data, userId });

    response.status(201).json(task);
  }

  async list(request: Request, response: Response) {
    const listTaskServices = new ListTaskServices();

    const userId = request.userId;

    const tasks = await listTaskServices.execute(userId);

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
    
    const userId = request.userId;

    const editTaskServices = new EditTaskServices();

    const task = await editTaskServices.execute({ ...data, userId });

    response.status(200).json(task);
  }

  async reorder(request: Request, response: Response) {
    const data = ReorderTaskSchema.parse(request.body);

    const reorderTaskServices = new ReorderTaskServices();

    await reorderTaskServices.execute(data);

    response.status(200).json({});
  }
}
