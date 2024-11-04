import { prisma } from "../../database/prisma";
import { IUserRepository, UserRequest, UserResponse } from "./user.types";

export class UserRepository implements IUserRepository {
  async create(data: UserRequest): Promise<UserResponse> {
    const user = await prisma.user.create({ data });
    return user;
  }
  async findByEmail(email: string): Promise<UserResponse | null> {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
  }

  async findById(id: string): Promise<UserResponse | null> {
    const user = await prisma.user.findFirst({ where: { id } });
    return user;
  }
}
