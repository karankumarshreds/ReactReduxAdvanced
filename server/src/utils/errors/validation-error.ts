import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  errors: ValidationError[];
  constructor(errors: ValidationError[]) {
    super("Request validation error");
    this.errors = errors;
  }
  serialize() {
    return this.errors.map((error) => ({
      message: error.msg,
    }));
  }
}
