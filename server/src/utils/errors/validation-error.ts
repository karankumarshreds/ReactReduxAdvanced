import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  errors: ValidationError[];
  constructor(errors: ValidationError[]) {
    super("Request validation error");
    this.errors = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serialize() {
    return this.errors.map((error) => ({
      message: error.msg,
    }));
  }
}
