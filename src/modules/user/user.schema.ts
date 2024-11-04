import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é um campo obrigatório" })
    .email("Insira um formato de email válido")
    .trim(),
  password: z.string().min(4, {
    message: "A senha deve ter no mínimo 4 caracteres",
  }),
});
export const SessionUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é um campo obrigatório" })
    .email("Insira um formato de email válido")
    .trim(),
  password: z.string().min(4, {
    message: "A senha deve ter no mínimo 4 caracteres",
  }),
});
