import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../index";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError("Not Authorized");
  }
  next();
};
