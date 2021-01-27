import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { Password } from "../utils/password";
// models
import { User } from "../models/User";
import { BadRequestError } from "../utils";

/** ============================
 * @route /api/user/signin
 * ============================ */
const signinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Invalid username or password");
  }
  const validPassword = await Password.compare(user.password, password);
  if (!validPassword) {
    console.log("INVALID PASSWORD FOR THE USER");
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

/** ============================
 * @route /api/user/signup
 * ============================ */
const signupUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    await userExist.remove();
    throw new BadRequestError("Email in use");
  }
  const user = User.build({
    name,
    email,
    password,
  });
  await user.save();
  res.json({ token: generateToken(user.id) });
};

export { signinUser, signupUser };
