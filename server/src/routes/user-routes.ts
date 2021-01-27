import express from "express";
// controllers
import {
  profileUserController,
  signinUserController,
  signupUserController,
} from "../controllers/user-controllers";
// middlewares
import { currentUser, authenticate } from "../utils";

const router = express.Router();

router.route("/signin").post(signinUserController);
router.route("/signup").post(signupUserController);
router.route("/profile").get(profileUserController, currentUser, authenticate);
export { router as userRouter };
