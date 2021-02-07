import { Request, Response } from 'express';
import { BadRequestError, generateToken, Password } from '../utils';
// models
import { User } from '../models/User';

/** ============================
 * @route /api/user/signin
 * @request POST
 * ============================ */
const signinUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError('Invalid username or password');
  }
  const validPassword = await Password.compare(user.password, password);
  if (!validPassword) {
    throw new BadRequestError('Invalid username or password');
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
 * @request POST
 * ============================ */
const signupUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userExist: UserDoc | null = await User.findOne({ email });
  if (userExist) {
    throw new BadRequestError('Email in use');
  }
  const user = User.build({
    name,
    email,
    password,
  });
  await user.save();
  res.json({ token: generateToken(user.id) });
};

/** ============================
 * @route /api/user/profile
 * @request GET
 * ============================ */
const profileUserController = async (req: Request, res: Response) => {
  const user: UserDoc | null = await User.findById(req.currentUser!.id);
  if (!user) {
    throw new BadRequestError('User not found');
  }
  const { email, name, id } = user;
  res.send({
    name,
    email,
    id,
  });
};

/** ============================
 * @route /api/user/profile
 * @request POST
 * ============================ */
const profileUpdateController = async (req: Request, res: Response) => {
  const user: UserDoc = await User.findById(req.currentUser!.id);
  if (!user) {
    throw new BadRequestError('User not found');
  }
  const { name, email, password } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;
  const updatedUser = await user.save();
  res.status(201).json({
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    token: generateToken(updatedUser.id),
  });
};

export {
  signinUserController,
  signupUserController,
  profileUserController,
  profileUpdateController,
};
