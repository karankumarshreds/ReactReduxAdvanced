import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  error: string;
  constructor(error: string) {
    super("Bad request error");
    this.error = error;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  public serializeErrors() {
    return [
      {
        message: this.error,
      },
    ];
  }
}
