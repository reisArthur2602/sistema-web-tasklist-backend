import { compare } from "bcrypt";
import { NotFoundError, UnauthorizedError } from "../../../helpers/errors";
import { UserRepository } from "../user.respository";
import { AuthUserResponse, IUserRepository, UserRequest } from "../user.types";

import { sign } from "jsonwebtoken";
export class SessionUserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  private userRepository: IUserRepository;

  async execute(data: UserRequest): Promise<AuthUserResponse> {
    const hasUserWithEmail = await this.userRepository.findByEmail(data.email);

    if (!hasUserWithEmail)
      throw new NotFoundError("O usuário não foi encontrado");

    const passwordMatch = await compare(
      data.password,
      hasUserWithEmail.password
    );

    if (!passwordMatch) {
      throw new UnauthorizedError("A senha está incorreta");
    }

    const accessToken = sign({}, process.env.JWT_SECRET as string, {
      subject: hasUserWithEmail.id,
      expiresIn: "30d",
    });

    return {
      user: hasUserWithEmail,
      accessToken,
    };
  }
}
