import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Page not found !!!!!");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serialize() {
    return [{ message: "Page not found" }];
  }
}
