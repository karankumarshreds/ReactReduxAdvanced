export abstract class CustomError extends Error {
  abstract statusCode: number;
  // message === for logging purposes
  // to be used by subclasses only
  constructor(message: string) {
    super(message);
    // because we are extending built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  // subclasses must have serialize method
  abstract serializeErrors(): { message: string }[];
}
