import jwt from "jsonwebtoken";
import { BadRequestError } from "./errors/bad-request-error";

const generateToken = (userId: string) => {
  if (!process.env.JWT_SECRET) {
    throw new BadRequestError("Need to define JWT Secret");
  }
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { generateToken };
