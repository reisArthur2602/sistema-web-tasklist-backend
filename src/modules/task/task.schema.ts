import { z } from "zod";

export const CreateTaskSchema = z.object({
  name: z
    .string({ message: "O nome da tarefa deve ser uma string" })
    .min(3, { message: "O nome da tarefa deve conter no mínimo 3 caracteres" })
    .toLowerCase()
    .trim(),
  cost: z.number({ message: "O custo da tarefa deve ser um número" }),
  limitDate: z.coerce.date({
    message: "A data limite da tarefa é um campo obrigátório",
  }),
});

export const RemoveTaskSchema = z.object({
  id: z.string({ message: "O id da tarefa deve ser uma string" }),
});
