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
  const { token } = req.body;
  const userId = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
  if (!token || !userId) {
    next();
  }
  req.currentUser = userId;
  next();
};
