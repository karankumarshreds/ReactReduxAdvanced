import { Request, Response } from "express";

const signinUser = async (req: Request, res: Response) => {
  res.send({ OK: "OK" });
};

export { signinUser };
