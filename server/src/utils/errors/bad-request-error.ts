import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  error: string;
  constructor(error: string) {
    super("Bad request error");
    this.error = error;
  }
  serialize() {
    return [
      {
        message: this.error,
      },
    ];
  }
}
