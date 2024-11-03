import { isPast } from "date-fns";
import { ConflictError } from "../../../helpers/errors";
import { TaskRepository } from "../task.repository";
import { ITaskRespository, TaskRequest, TaskResponse } from "../task.types";

export class CreateTaskServices {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  private taskRepository: ITaskRespository;

  async execute(data: TaskRequest): Promise<TaskResponse> {
    const hasTaskWithName = await this.taskRepository.findByName(data.name);

    if (hasTaskWithName)
      throw new ConflictError("Este nome já está associado a uma tarefa");

    const dateIsPast = isPast(data.limitDate);
    
    if (dateIsPast)
      throw new ConflictError("A data limite da tarefa deve estar no futuro");

    const task = await this.taskRepository.create(data);

    return task;
  }
}
