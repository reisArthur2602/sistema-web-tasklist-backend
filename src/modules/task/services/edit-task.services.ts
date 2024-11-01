import { isPast } from "date-fns";
import { ConflictError, NotFoundError } from "../../../helpers/errors";
import { TaskRepository } from "../task.repository";
import { EditTaskRequest, ITaskRespository, TaskResponse } from "../task.types";

export class EditTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(data: EditTaskRequest): Promise<TaskResponse> {
    
    if (data.limitDate) {
      const limitDateIsPast = isPast(data.limitDate);

      if (limitDateIsPast) {
        throw new ConflictError("A data limite da tarefa deve estar no futuro");
      }
    }

    const taskExists = await this.taskRepository.findById(data.id);

    if (!taskExists)
      throw new NotFoundError("O ID da tarefa não foi encontrado");

    if (data.name) {
      const hasTaskWithName = await this.taskRepository.findByName(data.name);

      if (hasTaskWithName && hasTaskWithName.id !== data.id) {
        throw new ConflictError("Este nome já está associado a uma tarefa");
      }
    }

    const task = await this.taskRepository.edit(data);

    return task;
  }
}
