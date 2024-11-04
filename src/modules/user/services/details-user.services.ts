import { NotFoundError } from "../../../helpers/errors";
import { UserRepository } from "../user.respository";
import { IUserRepository, UserResponse } from "../user.types";

export class DetailsUserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  private userRepository: IUserRepository;

  async execute(id: string): Promise<UserResponse> {
    const hasUserWithId = await this.userRepository.findById(id);
    if (!hasUserWithId) throw new NotFoundError("O usuário não foi encontrado");
    return hasUserWithId;
  }
}
