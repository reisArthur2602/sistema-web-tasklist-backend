import { TaskRepository } from "../task.repository";
import { ITaskRespository, ReorderTaskRequest } from "../task.types";

export class ReorderTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(data: ReorderTaskRequest[]): Promise<void> {
    data.map(async (task) => {
      await this.taskRepository.edit(task);
    });
  }
}
