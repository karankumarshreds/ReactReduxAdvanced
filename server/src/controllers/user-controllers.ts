import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { Password } from "../utils/password";
// models
import { User } from "../models/User";
import { BadRequestError } from "../utils";

const signinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Invalid username or password");
  }
  const validPassword = await Password.compare(user.password, password);
  if (!validPassword) {
    throw new BadRequestError("Invalid username or password");
  }
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user.id),
  });
};

export { signinUser };
