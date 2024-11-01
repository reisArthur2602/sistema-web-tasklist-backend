import { prisma } from "../../database/prisma";
import { ITaskRespository, TaskRequest, TaskResponse } from "./task.types";

export class TaskRepository implements ITaskRespository {
  async findByName(name: string): Promise<TaskResponse | null> {
    const task = await prisma.task.findUnique({ where: { name } });
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

  async list(): Promise<TaskResponse[] | []> {
    const task = await prisma.task.findMany({ orderBy: { sortOrder: "asc" } });
    return task;
  }
}