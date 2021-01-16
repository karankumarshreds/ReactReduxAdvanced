import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log("Error while processing request");
    return res.status(err.statusCode).send({ errors: err.serialize() });
  }
  // and if not
  console.log(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
