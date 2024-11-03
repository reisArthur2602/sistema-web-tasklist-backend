export type TaskResponse = {
  id: string;
  userId: string;
  name: string;
  cost: number;
  limitDate: Date;
  sortOrder: number;
};
export type EditTaskRequest = {
  id: string;
  userId?: string;
  name?: string;
  cost?: number;
  limitDate?: Date;
  sortOrder?: number;
};

export type TaskRequest = {
  name: string;
  userId: string;
  cost: number;
  limitDate: Date;
};
export type ReorderTaskRequest = {
  id: string;
  sortOrder: number;
};

export interface ITaskRespository {
  create(data: TaskRequest): Promise<TaskResponse>;
  edit(data: EditTaskRequest): Promise<TaskResponse>;
  list(userId: string): Promise<TaskResponse[] | []>;
  remove(id: string): Promise<TaskResponse>;
  findByName(userId: string, name: string): Promise<TaskResponse | null>;
  findById(id: string): Promise<TaskResponse | null>;
}
