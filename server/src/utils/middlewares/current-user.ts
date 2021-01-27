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

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // compare the jwt coming from the req
  const token = req.header("x-auth-token");
  if (!token) {
    next();
  }
  const payload = jwt.verify(token!, process.env.JWT_SECRET!) as UserPayload;
  if (!payload) {
    next();
  }
  req.currentUser = payload;
  next();
};
