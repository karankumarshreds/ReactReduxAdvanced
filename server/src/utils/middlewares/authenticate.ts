import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../index";

interface UserPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("x-auth-token");
    // payload is user id which we signed off with the token for the user while signin
    const payload = jwt.verify(token!, process.env.JWT_SECRET!) as UserPayload;
    if (!payload) {
      throw new Error();
    }
    req.currentUser = payload;
  } catch (error) {
    throw new NotAuthorizedError("Not Authorized");
  }
  next();
};
