import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  error: string;
  constructor(error: string) {
    super("Not authorized error");
    this.error = error;
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [
      {
        message: this.error,
      },
    ];
  }
}
