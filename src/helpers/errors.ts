export class ApplicationError extends Error {
  public readonly statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApplicationError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class ConflictError extends ApplicationError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class UnauthorizedError extends ApplicationError {
  constructor(message: string) {
    super(message, 401);
  }
}
