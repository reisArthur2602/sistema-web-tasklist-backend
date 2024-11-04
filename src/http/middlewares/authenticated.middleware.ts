import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";
import { UnauthorizedError } from "../../helpers/errors";

interface Payload {
  sub: string;
}

export const AuthenticatedMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const accessToken = request.headers.authorization;

  if (!accessToken)
    throw new UnauthorizedError("O usuário não está autenticado");

  const [, token] = accessToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET as string) as Payload;
    request.userId = sub;
    return next();
  } catch (error) {
    throw new UnauthorizedError("O usuário não está autenticado");
  }
};
