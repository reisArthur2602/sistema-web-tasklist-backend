import { ConflictError } from "../../../helpers/errors";
import { UserRepository } from "../user.respository";
import { IUserRepository, UserRequest, UserResponse } from "../user.types";
import { hash } from "bcrypt";
export class CreateUserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  private userRepository: IUserRepository;

  async execute(data: UserRequest): Promise<UserResponse> {
    const hasUserWithEmail = await this.userRepository.findByEmail(data.email);

    if (hasUserWithEmail)
      throw new ConflictError("Este email já está associado a um usuário");

    const passwordHash = await hash(data.password, 10);

    const user = await this.userRepository.create({
      ...data,
      password: passwordHash,
    });

    return user;
  }
}
