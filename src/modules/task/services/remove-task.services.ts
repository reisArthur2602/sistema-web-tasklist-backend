import { NotFoundError } from "../../../helpers/errors";
import { TaskRepository } from "../task.repository";
import { ITaskRespository, TaskRequest, TaskResponse } from "../task.types";

export class RemoveTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(id: string): Promise<TaskResponse> {
    const taskExists = await this.taskRepository.findById(id);

    if (!taskExists)
      throw new NotFoundError("O ID da tarefa não foi encontrado");

    const task = await this.taskRepository.remove(id);

    return task;
  }
}
