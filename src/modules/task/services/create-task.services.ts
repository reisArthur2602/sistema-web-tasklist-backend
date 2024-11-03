import { ConflictError } from "../../../helpers/errors";
import { TaskRepository } from "../task.repository";
import { ITaskRespository, TaskRequest, TaskResponse } from "../task.types";

export class CreateTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(data: TaskRequest): Promise<TaskResponse> {
    
    const hasTaskWithName = await this.taskRepository.findByName(
      data.userId,
      data.name
    );

    if (hasTaskWithName)
      throw new ConflictError("Este nome já está associado a uma tarefa");

    const task = await this.taskRepository.create(data);

    return task;
  }
}
