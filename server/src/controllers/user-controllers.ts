import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";

const signinUser = async (req: Request, res: Response) => {
  res.send({ OK: "OK" });
};

export { signinUser };
