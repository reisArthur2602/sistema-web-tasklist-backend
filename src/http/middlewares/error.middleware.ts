import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../helpers/errors";

export const ErrorMiddlware = (
  error: Error & Partial<ApplicationError>,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;

  const message = error.message ?? "Internal Server Error";

  console.error({ status: error.statusCode, message });

  response.status(statusCode).json({ message });
};
