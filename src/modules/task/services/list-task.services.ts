import { ConflictError } from "../../../helpers/errors";
import { TaskRepository } from "../task.repository";
import { ITaskRespository, TaskRequest, TaskResponse } from "../task.types";

export class ListTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(): Promise<TaskResponse[] | []> {
    const task = await this.taskRepository.list();

    return task;
  }
}
