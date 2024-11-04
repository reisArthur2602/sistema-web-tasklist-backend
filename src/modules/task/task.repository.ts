import { prisma } from "../../database/prisma";
import {
  EditTaskRequest,
  ITaskRespository,
  TaskRequest,
  TaskResponse,
} from "./task.types";

export class TaskRepository implements ITaskRespository {
  async findByName(userId: string, name: string): Promise<TaskResponse | null> {
    const task = await prisma.task.findFirst({ where: { userId, name } });
    return task;
  }

  async findById(id: string): Promise<TaskResponse | null> {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }

  async remove(id: string): Promise<TaskResponse> {
    const task = await prisma.task.delete({ where: { id } });
    return task;
  }

  async create(data: TaskRequest): Promise<TaskResponse> {
    const task = await prisma.task.create({ data });
    return task;
  }

  async list(userId: string): Promise<TaskResponse[] | []> {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { sortOrder: "asc" },
    });
    return tasks;
  }
  async edit(data: EditTaskRequest): Promise<TaskResponse> {
    const { cost, id, limitDate, name, sortOrder } = data;

    const task = await prisma.task.update({
      where: { id },
      data: { cost, limitDate, name, sortOrder },
    });

    return task;
  }
}
