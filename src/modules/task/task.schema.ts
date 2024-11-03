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
  id: z
    .string({ message: "O id da tarefa deve ser uma string" })
    .min(1, { message: "O id da tarefa é um campo obrigatório" }),
});

export const EditTaskSchema = z.object({
  id: z
    .string({ message: "O id da tarefa deve ser uma string" })
    .min(1, { message: "O id da tarefa é um campo obrigatório" }),

  name: z
    .string({ message: "O nome da tarefa deve ser uma string" })
    .min(3, { message: "O nome da tarefa deve conter no mínimo 3 caracteres" })
    .toLowerCase()
    .trim()
    .optional(),
  cost: z
    .number({ message: "O custo da tarefa deve ser um número" })
    .optional(),
  limitDate: z.coerce
    .date({
      message: "A data limite da tarefa é um campo obrigátório",
    })
    .optional(),
});

const ReorderTask = z.object({
  id: z
    .string({ message: "O id da tarefa deve ser uma string" })
    .min(1, { message: "O id da tarefa é um campo obrigatório" }),
  sortOrder: z
    .number({ message: "A ordem de classificação deve ser um número" })
    .min(1, { message: "A ordem de classificação é um campo obrigatório" }),
});

export const ReorderTaskSchema = z.array(ReorderTask);
