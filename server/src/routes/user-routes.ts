import express from "express";
// controllers
import { signinUser, signupUser } from "../controllers/user-controllers";

const router = express.Router();

router.route("/signin").post(signinUser);
router.route("/signup").post(signupUser);

export { router as userRouter };
