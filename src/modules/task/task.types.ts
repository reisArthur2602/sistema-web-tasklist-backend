export type TaskResponse = {
  id: string;
  name: string;
  cost: number;
  limitDate: Date;
  sortOrder: number;
};

export type TaskRequest = {
  name: string;
  cost: number;
  limitDate: Date;
};

export interface ITaskRespository {}
