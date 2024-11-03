export type TaskResponse = {
  id: string;
  name: string;
  cost: number;
  limitDate: Date;
  sortOrder: number;
};
export type EditTaskRequest = {
  id: string;
  name?: string;
  cost?: number;
  limitDate?: Date;
  sortOrder?: number;
};

export type TaskRequest = {
  name: string;
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
  list(): Promise<TaskResponse[] | []>;
  remove(id: string): Promise<TaskResponse>;
  findByName(name: string): Promise<TaskResponse | null>;
  findById(id: string): Promise<TaskResponse | null>;
}
