import express from "express";
// controllers
import { signinUser } from "../../controllers/user-controllers";

const router = express.Router();

router.route("/signin").get(signinUser);

export { router as userRouter };
