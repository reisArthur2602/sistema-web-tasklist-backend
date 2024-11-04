import { TaskRepository } from "../task.repository";
import { ITaskRespository, TaskRequest, TaskResponse } from "../task.types";

export class ListTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(userId: string): Promise<TaskResponse[] | []> {
    const tasks = await this.taskRepository.list(userId);

    return tasks;
  }
}
