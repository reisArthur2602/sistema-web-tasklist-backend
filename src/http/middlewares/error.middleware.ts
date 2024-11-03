import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../helpers/errors";
import { ZodError } from "zod";

export const ErrorMiddlware = (
  error: Error & Partial<ApplicationError>,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    const validationErrors = error.errors.map((e) => ({
      path: e.path[0],
      message: e.message,
    }));
    console.error({ status: 400, message: validationErrors });
    response.status(400).json(validationErrors);
  } else {
    const statusCode = error.statusCode ?? 500;

    const message = error.message ?? "Internal Server Error";

    console.error({ status: error.statusCode, message });

    response.status(statusCode).json({ message });
  }
};
